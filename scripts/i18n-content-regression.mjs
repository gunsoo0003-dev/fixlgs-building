import assert from 'node:assert/strict';
import fs from 'node:fs';
import {CONTRACT_I18N_V035} from '../app/contract-i18n-v035.js';
import {contractTopics, firstContractSteps, PARTY_CHAIN, CONTRACT_FLOW_BODIES} from '../app/contract-localized-topics.js';
import {ANALYSIS_METHOD_DETAILS, PRICE_CASE} from '../app/analysis-localized-details.js';
import {LOCALIZED_ANALYSIS_CASES} from '../app/analysis-localized-cases.js';

const detailsUrl = new URL('../app/analysis-localized-details.js', import.meta.url).href;
const casesUrl = new URL('../app/analysis-localized-cases.js', import.meta.url).href;
const axisSource = fs.readFileSync(new URL('../app/analysis-v039-localized.js', import.meta.url), 'utf8')
  .replace("'./analysis-localized-details'", JSON.stringify(detailsUrl))
  .replace("'./analysis-localized-cases'", JSON.stringify(casesUrl));
const {ANALYSIS_AXES_V039} = await import('data:text/javascript;base64,' + Buffer.from(axisSource).toString('base64'));

for (const locale of ['en','ja']) {
  const steps = firstContractSteps(locale);
  assert.equal(steps.length,9);
  assert.equal(new Set(steps.map(s=>s.title)).size,9);
  assert.equal(new Set(steps.map(s=>s.summary)).size,9);
  const topics = contractTopics('parties', CONTRACT_I18N_V035.advanced[locale].parties);
  assert.match(topics[2].detail, locale==='en' ? /scope/ : /範囲/);
  assert.match(topics[4].detail, locale==='en' ? /account/ : /口座/);
  assert.match(PARTY_CHAIN[locale][3][1], locale==='en' ? /account holder/ : /口座名義/);
  for (const bodies of Object.values(CONTRACT_FLOW_BODIES[locale])) {
    assert.equal(bodies.length,7);
    assert.equal(new Set(bodies).size,7);
  }
  for (const axis of ANALYSIS_AXES_V039[locale]) {
    const bodies=axis.steps.map(step=>step[1]);
    assert.equal(bodies.length,7);
    assert.equal(new Set(bodies).size,7);
    assert.equal(new Set(axis.engineGuide.map(item=>item.body)).size,7);
    for(const item of axis.engineGuide) assert.notEqual(item.answer,item.body);
    assert.deepEqual(bodies,ANALYSIS_METHOD_DETAILS[locale][axis.id]);
  }
  const price=ANALYSIS_AXES_V039[locale].find(axis=>axis.id==='price').practice;
  assert.deepEqual(price.snapshot,PRICE_CASE[locale].snapshot);
  assert.equal(price.report.length,4);
  assert.match(price.subject.note,locale==='en' ? /hypothetical/ : /仮想/);
  for (const id of ['income','rights','building','location','operation']) {
    const practice=ANALYSIS_AXES_V039[locale].find(axis=>axis.id===id).practice;
    assert.deepEqual(practice.snapshot,LOCALIZED_ANALYSIS_CASES[locale][id].snapshot);
    assert.ok(practice.report.length>=4);
    assert.equal(practice.graphic.type, {income:'incomeWaterfall',rights:'rightsProcess',building:'buildingHiddenCost',location:'locationConversion',operation:'operationCompare'}[id]);
    assert.ok(practice.conclusion.body.length > 30);
    assert.ok(practice.subject.note.length > 10);
  }
  const income=ANALYSIS_AXES_V039[locale].find(axis=>axis.id==='income').practice;
  assert.match(JSON.stringify(income),locale==='en'? /96 million/:/9,600万/);
  const operation=ANALYSIS_AXES_V039[locale].find(axis=>axis.id==='operation').practice;
  assert.equal(operation.graphic.yield,'5%');
}
// The stated net operating yield must follow the supplied educational inputs.
const operatingIncome=96_000_000-12_000_000-14_000_000;
assert.equal(operatingIncome,70_000_000);
assert.equal((operatingIncome/1_500_000_000*100).toFixed(1),'4.7');
assert.equal((96_000_000/1_500_000_000*100).toFixed(1),'6.4');
console.log('PASS: EN/JA topic bindings, 9 first-contract steps, 12 axes, 12 rich educational cases, Korean assumptions and arithmetic.');
