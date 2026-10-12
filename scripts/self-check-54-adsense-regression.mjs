// Static/data regression for every public self-check page (14 basic + 10 asset + 16 behavior + 14 final).
// No browser or external service is required. Does not claim to validate actual rendered HTML.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import {
  QUESTIONS, STAGE1_IDS, STAGE2_IDS, TYPE_REPORTS, TYPE_PROTOTYPES,
  ASSET_CHARACTERISTICS, COMIC_REPORTS, AXIS_LABELS,
} from '../app/self-check-data.js';
import { PUBLIC_RESULT_PATHS, PUBLIC_ASSETS } from '../app/self-check-public-data.js';
import { PUBLIC_FINAL_SCENARIOS } from '../app/self-check-final-scenarios.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const client=fs.readFileSync(path.join(root, 'app/SelfCheckClient.js'),'utf8');
const getTypeId=(n)=>`T${String(n).padStart(2,'0')}`;
const fullIDs=Array.from({length:14},(_,i)=>getTypeId(i+1));
assert.equal(PUBLIC_RESULT_PATHS.length,54);
assert.equal(new Set(PUBLIC_RESULT_PATHS).size,54);
assert.equal(fullIDs.length,14);
assert.equal(PUBLIC_ASSETS.length,10);
assert.equal(Object.keys(COMIC_REPORTS).length,16);
assert.equal(QUESTIONS.length,42);
assert.equal(new Set([...STAGE1_IDS,...STAGE2_IDS]).size,42);
assert.deepEqual(Object.keys(PUBLIC_FINAL_SCENARIOS).sort(), fullIDs);

for(const id of fullIDs){
  assert.ok(TYPE_REPORTS[id],`missing basic/final definition for ${id}`);
  assert.ok(TYPE_PROTOTYPES[id],`missing personal-scoring prototype for ${id}`);
  for(const lang of ['ko','en','ja']){
    const sc=PUBLIC_FINAL_SCENARIOS[id][lang];
    assert.ok(sc,`missing ${lang} scenario for ${id}`);
    for(const field of ['scene','conflict','countercheck','steps']){
      assert.ok(typeof sc[field]==='string' && sc[field].trim().length>12,`empty ${id}/${lang}/${field}`);
    }
  }
}
for(const lang of ['ko','en','ja']){
  assert.equal(new Set(fullIDs.map(id=>PUBLIC_FINAL_SCENARIOS[id][lang].scene)).size,14);
  assert.equal(new Set(fullIDs.map(id=>PUBLIC_FINAL_SCENARIOS[id][lang].conflict)).size,14);
}
for(const [id,p] of Object.entries(TYPE_PROTOTYPES)) {
  for(const [k,v] of Object.entries({...p.core,...p.aux})){
    assert.ok(k in AXIS_LABELS,`unknown axis ${id}/${k}`);
    assert.ok(Number.isFinite(v) && v>=-1 && v<=1,`out of range prototype ${id}/${k}`);
  }
}
assert.equal(TYPE_PROTOTYPES.T13.core.관리참여,1);
assert.equal(TYPE_PROTOTYPES.T14.core.관리참여,-1);

// Execute the original similarity/selection code from the component rather than writing a new, different selector.
const start=client.indexOf('function similarity(');
const end=client.indexOf('function assetResult(');
assert.ok(start>0 && end>start);
const selectionCode=`const level = v=>v >= .75 ? '높음' : v <= -.75 ? '낮음' : '보통';\n${client.slice(start,end)}\nreturn pickType;`;
const makeSelector=vm.runInNewContext(`(function(TYPE_PROTOTYPES){ ${selectionCode} })`);
const pickType=makeSelector(TYPE_PROTOTYPES);
const oldPrototypes=Object.fromEntries(Object.entries(TYPE_PROTOTYPES).filter(([id])=>id!=='T13'&&id!=='T14'));
const pickOriginal=makeSelector(oldPrototypes);
const prototypeAxes=id=>{
  const p=TYPE_PROTOTYPES[id];
  const axes=Object.fromEntries(Object.keys(AXIS_LABELS).map(k=>[k,0]));
  for(const [k,v] of Object.entries(p.aux)) axes[k]=v*2;
  for(const [k,v] of Object.entries(p.core)) axes[k]=v*2;
  return axes;
};
for (const id of fullIDs){
  const actual=pickType(prototypeAxes(id));
  assert.equal(actual,id,`prototype maps to ${actual}, expected ${id}`);
  if (id!=='T13' && id!=='T14')
    assert.equal(actual,pickOriginal(prototypeAxes(id)),`previous type ${id} anchor changed`);
}

// Derive complete 42-answer questionnaire inputs from prototype axes (no fabricated scoring formula).
for(const id of ['T13','T14']) {
  const target=prototypeAxes(id);
  const answers=Object.fromEntries(QUESTIONS.map(q=>{
    const desired=target[q.axis]??0;
    const index=q.scores.reduce((best,score,i)=>Math.abs(score-desired)<Math.abs(q.scores[best]-desired)?i:best,0);
    return [q.id,index];
  }));
  const axes={};
  for(const q of QUESTIONS){ (axes[q.axis]??=[]).push(q.scores[answers[q.id]]); }
  const scores=Object.fromEntries(Object.entries(axes).map(([k,v])=>[k,v.reduce((a,b)=>a+b,0)/v.length]));
  assert.equal(pickType(scores),id,`${id} not reachable using real questionnaire options`);
}

// The public asset guide must not display a fabricated personalized answer or ranking.
const assetArea=client.slice(client.indexOf('function Stage2Result('), client.indexOf('function Stage3Result('));
assert.ok(assetArea.includes('!publicMode&&a.reasonAxes?.length'));
assert.ok(assetArea.includes('publicMode?"—"'));
assert.ok(assetArea.includes('고정 비교 예시'));
const publicAsset=client.slice(client.indexOf('function publicAssetResult('),client.indexOf('function Stage1Result('));
assert.ok(publicAsset.includes('reasonAxes:[]'));
assert.ok(publicAsset.includes('score:null'));
// A unique example is visible only on the public FINAL, not an invented individual result.
assert.ok(client.includes('publicMode&&publicScenario&&'));
assert.ok(client.includes('getPublicFinalScenario(finalTypeId,locale)'));
assert.ok(client.includes('가상 종합 판단 사례'));
const pubCfg=fs.readFileSync(path.join(root,'publication-config.mjs'),'utf8');
assert.match(pubCfg,/PUBLISHED_LOCALES\s*=\s*\['ko'\]/);
console.log('PASS: 54 paths, 14 x 3 distinct final scenarios, 42-response T13/T14 reachability, 12 legacy anchors, non-personal asset guides, ko-only publication.');
