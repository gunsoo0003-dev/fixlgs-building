export function eokParts(value, locale='ko'){
  if(locale==='en') return {value:(value/10).toLocaleString('en-US',{maximumFractionDigits:2}),unit:'B KRW'};
  if(locale==='ja') return {value:Number(value).toLocaleString('ja-JP',{maximumFractionDigits:1}),unit:'億ウォン'};
  return {value:Number(value).toLocaleString('ko-KR',{maximumFractionDigits:1}),unit:'억'};
}

export function manParts(value, locale='ko'){
  if(locale==='en') return {value:(value/100).toLocaleString('en-US',{maximumFractionDigits:1}),unit:'M KRW'};
  if(locale==='ja') return {value:Number(value).toLocaleString('ja-JP'),unit:'万ウォン'};
  return {value:Number(value).toLocaleString('ko-KR'),unit:'만원'};
}

export function eokText(value, locale='ko'){
  const p=eokParts(value,locale);
  return `${p.value}${locale==='en'?' ':''}${p.unit}`;
}

export function manText(value, locale='ko'){
  const p=manParts(value,locale);
  return `${p.value}${locale==='en'?' ':''}${p.unit}`;
}
