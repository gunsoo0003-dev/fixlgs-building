// EN/JA translation integrity. Korea-only jurisdiction and currently hidden locales are intentional.
// This checks structural coverage and fixed scoring indices; it cannot judge naturalness or legal correctness.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {PUBLISHED_LOCALES} from '../publication-config.mjs';
import {QUESTIONS} from '../app/self-check-data.js';
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
console.log(`PASS: ${comparedPaths} Korean-source copy fields have EN/JA counterparts; all 42 question scores and Korean-only publication remain intact.`);
