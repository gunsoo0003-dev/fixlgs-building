import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {HEADER_SUBMENUS,SITE_COPY} from '../app/site-copy.js';
import {PUBLISHED_LOCALES} from '../publication-config.mjs';

const header=readFileSync(new URL('../app/SiteHeader.js',import.meta.url),'utf8');
const css=readFileSync(new URL('../app/mobile-navigation.css',import.meta.url),'utf8');
const layout=readFileSync(new URL('../app/[locale]/layout.js',import.meta.url),'utf8');
assert.deepEqual(PUBLISHED_LOCALES,['ko'],'AdSense review must still expose Korean only');
assert.match(layout,/import '\.\.\/mobile-navigation\.css';/);
for(const part of ['fb-mobile-header','fb-mobile-menu','fb-mobile-menu-panel','fb-mobile-submenu','fb-mobile-submenu-links']) {
  assert.ok(header.includes(part), `mobile navigation missing ${part}`);
  assert.ok(css.includes(part), `mobile navigation style missing ${part}`);
}
assert.match(header,/<details className="fb-mobile-menu" ref={mobileMenuRef}>/);
assert.match(header,/<nav className="fb-mobile-menu-panel" aria-label={copy.navAria}>/);
assert.match(header,/services\.map\(\(service\) =>/);
assert.match(header,/children\.map\(\(item\) =>/);
assert.match(header,/onClick={closeMobileMenu}/);
assert.match(header,/event\.key === 'Escape'/);
assert.match(header,/document\.addEventListener\('pointerdown', closeOutside\)/);
assert.match(css,/@media\(max-width:700px\)/);
assert.match(css,/\.top-hotzone,\.reveal-nav\{display:none\}/);
assert.match(css,/max-height:calc\(100dvh - 52px\)/);
for(const locale of ['ko','en','ja']) {
  const services=SITE_COPY[locale].services;
  assert.deepEqual(services.map(({id})=>id),['self','analysis','contract','management','exit']);
  for(const {id} of services) {
    for(const {href} of HEADER_SUBMENUS[locale][id] || []) {
      assert.match(href,/^\/(?:self-check|analysis|contract|management|exit)(?:\/[a-z-]+)?$/);
    }
  }
}
console.log('PASS: 5 mobile sections, live submenu links, keyboard/outside close, <=700px-only CSS, KO-only publication');
