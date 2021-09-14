(()=>{"use strict";var n={735:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(645),r=t.n(o)()((function(n){return n[1]}));r.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]);const i=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);o&&r[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],d=o.base?c[0]+o.base:c[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var m=t(u),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==m?(e[m].references++,e[m].updater(p)):e.push({identifier:u,updater:r(p,o),references:1}),a.push(u)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=o(n,r),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),a=t.n(i),s=t(565),c=t.n(s),d=t(216),l=t.n(d),u=t(589),m=t.n(u),p=t(735),h={};h.styleTagTransform=m(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),e()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;const f=()=>{const n=document.createElement("main");n.classList.add("main-about");const e=document.createElement("section");e.classList.add("mission"),n.appendChild(e);const t=document.createElement("div");t.classList.add("inner-1"),e.appendChild(t);const o=document.createElement("img");o.classList.add("chef"),o.src="../../dist/assets/chef.jpg",o.alt="Image of chef",t.appendChild(o);const r=document.createElement("div");r.classList.add("inner-2"),e.appendChild(r);const i=document.createElement("p");i.classList.add("statement"),i.textContent='"At Burger Place we value each and every one of our customers. That\'s why we go above and beyond when crafting our traditional gourmet burgers, fries and shakes in order to create the perfect infusion of flavours that will leave you wanting more."',r.appendChild(i);const a=document.createElement("section");return a.classList.add("images"),n.appendChild(a),function(){const n=document.querySelector(".about"),e=document.querySelector(".active");console.log("Before remove:"),console.log(e),e&&e.classList.remove("active"),console.log("After remove:"),console.log(e),n.classList.add("active")}(),n};console.log("Loaded menu");const b=(n,e,t,o)=>{const r=document.createElement("div");r.classList.add("menu-item");const i=document.createElement("img");i.src=n,i.alt=e;const a=document.createElement("div");a.classList.add("info");const s=document.createElement("h2");s.textContent=t;const c=document.createElement("h3");return c.textContent=o,a.appendChild(s),a.appendChild(c),r.appendChild(i),r.appendChild(a),r};console.log("Loaded contact");console.log("Connected!"),function(){const n=document.getElementById("content");n.appendChild((()=>{const n=document.createElement("header"),e=document.createElement("img");e.classList.add("logo"),e.src="../../dist/assets/bp-logo.png",e.alt="Burger Place Logo",n.appendChild(e);const t=document.createElement("h1");return t.textContent="Burger Place",n.appendChild(t),n})()),n.appendChild((()=>{const n=document.createElement("nav"),e=document.createElement("ul");e.classList.add("links"),n.appendChild(e);const t=document.createElement("li");t.classList.add("about"),t.textContent="About",e.appendChild(t);const o=document.createElement("li");o.classList.add("menu"),o.textContent="Menu",e.appendChild(o);const r=document.createElement("li");return r.classList.add("contact"),r.textContent="Contact",e.appendChild(r),n})());const e=document.createElement("section");e.classList.add("main"),n.appendChild(e),e.appendChild(f()),n.appendChild((()=>{const n=document.createElement("footer");n.classList.add("footer");const e=document.createElement("p");e.classList.add("made-by"),e.textContent="Made with ❤️ by Andrew";const t=document.createElement("a");t.href="https://github.com/apwaite",t.target="_blank",e.appendChild(t);const o=document.createElement("span");return o.classList.add("fab","fa-github"),t.appendChild(o),n.appendChild(e),n})()),function(){const n=document.querySelector(".main"),e=document.querySelector(".about"),t=document.querySelector(".menu"),o=document.querySelector(".contact");e.addEventListener("click",(()=>{n.removeChild(n.firstChild),n.appendChild(f())})),t.addEventListener("click",(()=>{n.removeChild(n.firstChild),n.appendChild((()=>{const n=document.createElement("main");return n.classList.add("main-menu"),function(){const n=document.querySelector(".menu"),e=document.querySelector(".active");console.log("Before remove:"),console.log(e),e&&e.classList.remove("active"),console.log("After remove:"),console.log(e),n.classList.add("active")}(),[b("../../dist/assets/bacon-cheese.jpg","Bacon Cheeseburger","Bacon Cheeseburger","$12.99"),b("../../dist/assets/bacon-double-cheese.jpg","Bacon Double Cheeseburger","Bacon Double Cheeseburger","$8.99"),b("../../dist/assets/crispy-chicken.jpg","Crispy Chicken Burger","Crispy Chicken Burger","$10.99"),b("../../dist/assets/ice-cold-soda.jpg","Ice Cold Soda","Ice Cold Soda","Small: $1.99, Medium: $2.99, Large: $3.99"),b("../../dist/assets/milkshake.jpg","Milkshake","Milkshake","Small: $3.99, Medium: $5.99, Large: £7.99)")].map((e=>{n.appendChild(e)})),n})())})),o.addEventListener("click",(()=>{n.removeChild(n.firstChild),n.appendChild((()=>{const n=document.createElement("main");return n.classList.add("main-contact"),function(){const n=document.querySelector(".contact"),e=document.querySelector(".active");console.log("Before remove:"),console.log(e),e&&e.classList.remove("active"),console.log("After remove:"),console.log(e),n.classList.add("active")}(),n})())}))}()}()})()})();