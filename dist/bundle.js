(()=>{"use strict";var e={735:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(645),a=t.n(o)()((function(e){return e[1]}));a.push([e.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]);const i=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(o)for(var i=0;i<this.length;i++){var r=this[i][0];null!=r&&(a[r]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&a[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},r=[],s=0;s<e.length;s++){var c=e[s],d=o.base?c[0]+o.base:c[0],l=i[d]||0,m="".concat(d," ").concat(l);i[d]=l+1;var u=t(m),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(n[u].references++,n[u].updater(p)):n.push({identifier:m,updater:a(p,o),references:1}),r.push(m)}return r}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var i=o(e=e||[],a=a||{});return function(e){e=e||[];for(var r=0;r<i.length;r++){var s=t(i[r]);n[s].references--}for(var c=o(e,a),d=0;d<i.length;d++){var l=t(i[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o=t.css,a=t.media,i=t.sourceMap;a?e.setAttribute("media",a):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),o=t(795),a=t.n(o),i=t(569),r=t.n(i),s=t(565),c=t.n(s),d=t(216),l=t.n(d),m=t(589),u=t.n(m),p=t(735),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=r().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),n()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals,console.log("Loaded about");const f=()=>{const e=document.createElement("main");e.classList.add("main-about");const n=document.createElement("section");n.classList.add("mission"),e.appendChild(n);const t=document.createElement("div");t.classList.add("inner-1"),n.appendChild(t);const o=document.createElement("img");o.classList.add("chef"),o.src="../../dist/assets/chef.jpg",o.alt="Image of chef",t.appendChild(o);const a=document.createElement("div");a.classList.add("inner-2"),n.appendChild(a);const i=document.createElement("p");i.classList.add("statement"),i.textContent='"At Burger Place we value each and every one of our customers. That\'s why we go above and beyond when crafting our traditional gourmet burgers, fries and shakes in order to create the perfect infusion of flavours that will leave you wanting more."',a.appendChild(i);const r=document.createElement("section");return r.classList.add("images"),e.appendChild(r),function(){const e=document.querySelector(".about"),n=document.querySelector(".active");n&&n.classList.remove("active"),e.classList.add("active")}(),e};console.log("Loaded menu");const b=(e,n,t,o,a)=>{const i=document.createElement("div");i.classList.add("menu-item"),e%2==0?i.classList.add("light"):i.classList.add("dark");const r=document.createElement("img");r.src=n,r.alt=t;const s=document.createElement("div");s.classList.add("info");const c=document.createElement("h2");c.textContent=o;const d=document.createElement("h3");return d.textContent=a,s.appendChild(c),s.appendChild(d),i.appendChild(r),i.appendChild(s),i};console.log("Loaded contact");console.log("Connected!"),function(){const e=document.getElementById("content");e.appendChild((()=>{const e=document.createElement("header"),n=document.createElement("img");n.classList.add("logo"),n.src="../../dist/assets/bp-logo.png",n.alt="Burger Place Logo",e.appendChild(n);const t=document.createElement("h1");return t.textContent="BURGER PLACE",e.appendChild(t),e})()),e.appendChild((()=>{const e=document.createElement("nav"),n=document.createElement("ul");n.classList.add("links"),e.appendChild(n);const t=document.createElement("li");t.classList.add("about"),t.textContent="About",n.appendChild(t);const o=document.createElement("li");o.classList.add("menu"),o.textContent="Menu",n.appendChild(o);const a=document.createElement("li");return a.classList.add("contact"),a.textContent="Contact",n.appendChild(a),e})());const n=document.createElement("section");n.classList.add("main"),e.appendChild(n),n.appendChild(f()),e.appendChild((()=>{const e=document.createElement("footer");e.classList.add("footer");const n=document.createElement("p");n.classList.add("made-by"),n.textContent="Made with ❤️ by Andrew";const t=document.createElement("a");t.href="https://github.com/apwaite",t.target="_blank",n.appendChild(t);const o=document.createElement("span");return o.classList.add("fab","fa-github"),t.appendChild(o),e.appendChild(n),e})()),function(){const e=document.querySelector(".main"),n=document.querySelector(".about"),t=document.querySelector(".menu"),o=document.querySelector(".contact");n.addEventListener("click",(()=>{e.removeChild(e.firstChild),e.appendChild(f())})),t.addEventListener("click",(()=>{e.removeChild(e.firstChild),e.appendChild((()=>{const e=document.createElement("main");return e.classList.add("main-menu"),function(){const e=document.querySelector(".menu"),n=document.querySelector(".active");n&&n.classList.remove("active"),e.classList.add("active")}(),[b(0,"../../dist/assets/bacon-cheese.jpg","Bacon Cheeseburger","Bacon Cheeseburger","$12.99, or make it a meal (soda + fries): $15.99"),b(1,"../../dist/assets/bacon-double-cheese.jpg","Bacon Double Cheeseburger","Bacon Double Cheeseburger","$8.99, or make it a meal (soda + fries): $11.99"),b(2,"../../dist/assets/crispy-chicken.jpg","Crispy Chicken Burger","Crispy Chicken Burger","$10.99, or make it a meal (soda + fries): $13.99"),b(3,"../../dist/assets/ice-cold-soda.jpg","Ice Cold Soda","Ice Cold Soda","Small: $1.99, Medium: $2.99, Large: $3.99"),b(4,"../../dist/assets/milkshake.jpg","Milkshake","Milkshake","Small: $3.99, Medium: $5.99, Large: £7.99"),b(5,"../../dist/assets/french-fries.jpg","French Fries","French Fries","On their own: $4.99")].map((n=>{e.appendChild(n)})),e})())})),o.addEventListener("click",(()=>{e.removeChild(e.firstChild),e.appendChild((()=>{const e=document.createElement("main");e.classList.add("main-contact"),function(){const e=document.querySelector(".contact"),n=document.querySelector(".active");n&&n.classList.remove("active"),e.classList.add("active")}();const n=document.createElement("section");n.classList.add("contact-item-alt","details"),e.appendChild(n);const t=document.createElement("h2");t.textContent="Opening Times:",n.appendChild(t);const o=document.createElement("h3");o.textContent="MON-FRI: 11:00 - 22:00",n.appendChild(o);const a=document.createElement("h3");a.textContent="SAT-SUN: 13:00 - 23:00",n.appendChild(a);const i=document.createElement("p");i.textContent="1-800-123-4567",n.appendChild(i);const r=document.createElement("section");r.classList.add("contact-item","location"),e.appendChild(r);const s=document.createElement("div");s.classList.add("location-image"),r.appendChild(s);const c=document.createElement("img");c.src="../../dist/assets/burger-place-location.jpg",c.alt="Burger Place Location",s.appendChild(c);const d=document.createElement("div");d.classList.add("location-address"),r.appendChild(d);const l=document.createElement("h2");l.textContent="Our Address:",d.appendChild(l);const m=document.createElement("h3");m.textContent="152 N Brand Boulevard",d.appendChild(m);const u=document.createElement("p");u.textContent="Glendale, CA 91203",d.appendChild(u);const p=document.createElement("section");p.classList.add("contact-item-alt","social-media"),e.appendChild(p);const h=document.createElement("div");h.classList.add("sm-links"),p.appendChild(h);const f=document.createElement("p");return f.textContent="TODO: Add social media icons",h.appendChild(f),e})())}))}()}()})()})();