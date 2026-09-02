export const PUBLIC_TYPE_IDS = Array.from({length:14},(_,i)=>`T${String(i+1).padStart(2,'0')}`);

export const PUBLIC_ASSETS = [
  { id:'A01', name:'아파트' },
  { id:'A02', name:'빌라·연립/다세대' },
  { id:'A03', name:'오피스텔' },
  { id:'A04', name:'원룸·다가구' },
  { id:'A05', name:'상가주택' },
  { id:'A06', name:'집합상가' },
  { id:'A07', name:'꼬마빌딩' },
  { id:'A08', name:'중대형빌딩' },
  { id:'A09', name:'오피스' },
  { id:'A10', name:'토지' },
];

export const PUBLIC_BEHAVIOR_IDS = Array.from({length:16},(_,i)=>`C${String(i+1).padStart(2,'0')}`);

export const PUBLIC_RESULT_PATHS = [
  ...PUBLIC_TYPE_IDS.map(id=>`result/basic/${id}`),
  ...PUBLIC_ASSETS.map(x=>`result/asset/${x.id}`),
  ...PUBLIC_BEHAVIOR_IDS.map(id=>`result/behavior/${id}`),
  ...PUBLIC_TYPE_IDS.map(id=>`result/final/${id}`),
];
