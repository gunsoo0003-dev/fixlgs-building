// EN/JA translation integrity. Korea-only jurisdiction and currently hidden locales are intentional.
// This checks structural coverage and fixed scoring indices; it cannot judge naturalness or legal correctness.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {PUBLISHED_LOCALES} from '../publication-config.mjs';
import {QUESTIONS, COMIC_REPORTS} from '../app/self-check-data.js';
import {getStage3Comic,getStage3Ui} from '../app/self-check-stage3-copy.js';
import {getFinalBehaviorShort} from '../app/self-check-final-copy.js';
import {QUESTION_LOCALE} from '../app/self-check-question-copy.js';
import {SITE_COPY, HEADER_SUBMENUS} from '../app/site-copy.js';
import {SELF_CHECK_COPY} from '../app/self-check-copy.js';
import {LEGAL_COPY} from '../app/legal-copy.js';
import {CONTRACT_COPY} from '../app/contract-copy.js';
import {ANALYSIS_COPY, ANALYSIS_UI_COPY} from '../app/analysis-copy.js';
import {LOCALIZED_ANALYSIS_CASES} from '../app/analysis-localized-cases.js';
import {EXIT_MAIN_BY_LOCALE, EXIT_PROTO_BY_LOCALE, EXIT_UI_COPY} from '../app/exit-i18n-data.js';

assert.deepEqual(PUBLISHED_LOCALES, ['ko'], 'Do not expose EN/JA before explicit approval.');
const dictionaries = {SITE_COPY, HEADER_SUBMENUS, SELF_CHECK_COPY, LEGAL_COPY, CONTRACT_COPY, ANALYSIS_COPY, ANALYSIS_UI_COPY, EXIT_MAIN_BY_LOCALE, EXIT_PROTO_BY_LOCALE, EXIT_UI_COPY};
let comparedPaths=0;
function compareShape(k,en,ja,path){
  if (Array.isArray(k)) {
    assert(Array.isArray(en) && Array.isArray(ja), path);
    assert.equal(en.length, k.length, `EN missing item ${path}`);
    assert.equal(ja.length, k.length, `JA missing item ${path}`);
    k.forEach((v,i)=>compareShape(v,en[i],ja[i],`${path}[${i}]`));
    return;
  }
  if(k && typeof k==='object') {
    assert(en && typeof en==='object' && ja && typeof ja==='object',path);
    for(const [name,val] of Object.entries(k)){
      if(name==='locale')continue;
      assert(Object.hasOwn(en,name) && Object.hasOwn(ja,name),`Translation field missing ${path}.${name}`);
      compareShape(val,en[name],ja[name],`${path}.${name}`);
    }
    return;
  }
  if(typeof k==='string'){
    assert.equal(typeof en,'string',`EN type mismatch ${path}`);
    assert.equal(typeof ja,'string',`JA type mismatch ${path}`);
    assert(en.trim() && ja.trim(),`Blank translation ${path}`);
    comparedPaths++;
  }
}
for(const [name,table] of Object.entries(dictionaries))compareShape(table.ko,table.en,table.ja,name);

const ids=QUESTIONS.map(q=>q.id);
assert.equal(ids.length,42);
for(const locale of ['en','ja']) {
  const questions=QUESTION_LOCALE[locale].questions;
  assert.deepEqual(Object.keys(questions).sort(),ids.slice().sort(),`${locale}: 42 questions required`);
  for(const original of QUESTIONS) {
    const translated=questions[original.id];
    assert(translated.text.trim() && translated.options.length>0,`${locale}/${original.id}`);
    for(const option of translated.options) {
      assert.equal(option.length,2,`${locale}/${original.id}: option shape`);
      assert(typeof option[0]==='string' && option[0].trim(),`${locale}/${original.id}: empty option`);
      assert(Number.isInteger(option[1]) && option[1]>=0 && option[1]<original.scores.length,
        `${locale}/${original.id}: scoring index changed`);
    }
    const other=QUESTION_LOCALE[locale==='en'?'ja':'en'].questions[original.id];
    assert.deepEqual(translated.options.map(o=>o[1]),other.options.map(o=>o[1]),`${locale}/${original.id}: scoring sequence differs by language`);
  }
  assert.deepEqual(Object.keys(LOCALIZED_ANALYSIS_CASES[locale]).sort(),['building','income','location','operation','rights']);
  for(const data of Object.values(LOCALIZED_ANALYSIS_CASES[locale])) {
    assert(data.subject && data.snapshot.length>=3 && data.report.length>=4 && data.graphic && data.conclusion);
  }
}
// Explicit checks for mistranslations / international assumptions previously found in QA.
assert.match(QUESTION_LOCALE.ja.questions.Q33.options[0][0],/入居率/);
assert(!QUESTION_LOCALE.ja.questions.Q33.options[0][0].includes('空室が安定'));
assert.match(SITE_COPY.en.guideItems[1].body,/headline yield/);
assert.match(SITE_COPY.ja.guideItems[1].body,/表面利回り/);
assert.match(LOCALIZED_ANALYSIS_CASES.en.income.report[0].body,/assumed/);
const references=fs.readFileSync(new URL('../app/OfficialReferences.js',import.meta.url),'utf8');
assert.match(references,/Information recorded in the Korean building register/);
assert.match(references,/韓国の建築物台帳に記録された建物情報/);
// C01-C16 must refer to the same *behavior*, not merely the same ID, in STEP 3 and FINAL.
// The expectations below are independent of the production short-label lookup.
const koreanBehaviorTokens = {
  C01:/검증/,C02:/최악/,C03:/현금흐름/,C04:/상승기대/,C05:/추천/,C06:/현장/,C07:/중단기준/,
  C08:/현금여력/,C09:/계획/,C10:/전문가/,C11:/계약검증/,C12:/반대근거/,C13:/차입/,C14:/직관/,C15:/투자계획/,C16:/독립결정/
};
const englishBehaviorTokens = {
  C05:/recommendations/,C06:/site impressions/,C07:/exit rules/,C08:/cash reserves/,
  C09:/plan/i,C10:/specialists/,C11:/before signing/,C12:/own assumptions/,C13:/borrowing/,C14:/intuition/,C15:/plan/i,C16:/independently/
};
const japaneseBehaviorTokens = {
  C05:/推薦/,C06:/現地/,C07:/撤退/,C08:/現金/,C09:/計画/,C10:/専門家/,C11:/契約/,C12:/反証/,C13:/借入/,C14:/直感/,C15:/計画/,C16:/独立判断/
};
const behaviorIds=Object.keys(COMIC_REPORTS).sort();
assert.equal(behaviorIds.length,16,'16 STEP 3 comics must be present');
for(const id of behaviorIds){
  assert(koreanBehaviorTokens[id],`Missing behavioral QA expectation: ${id}`);
  for(const locale of ['ko','en','ja']){
    const short=getFinalBehaviorShort(locale,id,'');
    const detail=getStage3Comic(locale,id,COMIC_REPORTS[id]);
    assert(short && detail?.name && detail?.character,`${locale} ${id}: missing final/step3 behavior`);
    const token=(locale==='ko'?koreanBehaviorTokens:locale==='en'?englishBehaviorTokens:japaneseBehaviorTokens)[id];
    if(token)assert.match(short,token,`${locale} ${id}: short result does not match detailed behavior`);
    // U.S. research/financial references in KO are preserved in both translations, without implying Korean legal authority.
    const namedSources=[...new Set(COMIC_REPORTS[id].evidence.match(/\b(?:SEC|FINRA|FDIC|OCC)\b/g)||[])];
    for(const source of namedSources)assert(detail.evidence.includes(source),`${locale} ${id}: missing source context ${source}`);
  }
}
assert.match(getStage3Ui('ja').open,/確認可能/,'Unambiguous Japanese unlocked state');
assert.match(getStage3Ui('en').basis,/not South Korean legal guidance/);
assert.match(getStage3Ui('ja').basis,/韓国法/);
const managementClient=fs.readFileSync(new URL('../app/ManagementClient.js',import.meta.url),'utf8');
const managementMetadata=fs.readFileSync(new URL('../app/[locale]/management/[[...view]]/page.js',import.meta.url),'utf8');
const exitMetadata=fs.readFileSync(new URL('../app/[locale]/exit/[[...view]]/page.js',import.meta.url),'utf8');
assert.match(managementClient,/locale==='ja'\?\{statement:/,'Japanese management labels are localized');
for(const [name,text] of [['management',managementMetadata],['exit',exitMetadata]]){
  assert.match(text,/locale==='en'\?[^\n]*South Korea/,'Korean scope for EN '+name);
  assert.match(text,/locale==='ja'\?[^\n]*韓国/,'Korean scope for JA '+name);
}

console.log(`PASS: ${comparedPaths} EN/JA counterpart strings, 42 score mappings, 16 behavior IDs x 3 locales, Korean scope, sources and Korean-only publication.`);
