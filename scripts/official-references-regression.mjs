import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const source=readFileSync(new URL('../app/OfficialReferences.js', import.meta.url), 'utf8');
const start=source.indexOf('const S = {');
const end=source.indexOf('export default function OfficialReferences()', start);
assert.ok(start>=0 && end>start, 'reference registry not found');
const {S,REFERENCES,getPageReferences}=Function(`${source.slice(start,end)};return {S,REFERENCES,getPageReferences};`)();
for(const [section,pages] of Object.entries(REFERENCES)) {
  assert.ok(['contract','analysis','management','exit'].includes(section));
  for(const [view,keys] of Object.entries(pages)) {
    assert.ok(Array.isArray(keys) && keys.length<=2, `${section}/${view} has an excessive source list`);
    assert.equal(new Set(keys).size,keys.length);
    for(const key of keys) {
      const s=S[key];
      assert.ok(s && s.name && s.scope, `${section}/${view} has an unmapped reference`);
      const url=new URL(s.url);
      assert.equal(url.protocol,'https:');
      assert.ok(['easylaw.go.kr','www.easylaw.go.kr','www.iros.go.kr','www.gov.kr','rt.molit.go.kr','www.reb.or.kr'].includes(url.hostname));
    }
    assert.deepEqual(getPageReferences(section,view),keys.map(key=>S[key]));
  }
}
assert.equal(getPageReferences('analysis','unverified-topic'),null,'must not attach irrelevant sources');
assert.equal(getPageReferences('non-content-page','home'),null);
assert.match(source,/parts\[0\]!=='ko'/,'only published Korean locale receives refs');
assert.match(source,/공인 심리검사나 개인별 투자 적합성 판정 결과가 아닙니다/);
const layout=readFileSync(new URL('../app/[locale]/layout.js',import.meta.url),'utf8');
assert.ok(layout.indexOf('<OfficialReferences/>')>layout.indexOf('{children}') && layout.indexOf('<OfficialReferences/>')<layout.indexOf('<SiteFooter'));
const contract=readFileSync(new URL('../app/ContractPage.js',import.meta.url),'utf8');
assert.ok(!contract.includes('<SourceLinks'), 'legacy oversized source card must not be rendered');
console.log(`PASS: ${Object.keys(S).length} configured official source destinations, ${Object.values(REFERENCES).reduce((sum,group)=>sum+Object.keys(group).length,0)} route variants, Korean-only/method notice/layout checks`);
