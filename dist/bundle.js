(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(81),o=t.n(a),r=t(645),c=t.n(r),i=t(667),s=t.n(i),d=new URL(t(941),t.b),l=c()(o()),m=s()(d);l.push([e.id,"#restaurantName, \n#restaurantSlogan,\n.restaurantContact,\n.menuItem {\n    color: wheat;\n    margin: 2vw;\n}\n\n\n.menuItemContainer {\n    display: flex;\n    padding: 2vw;\n}\n\n.menuItemImg {\n    max-height: 18vh;\n    max-width: 26vw;\n    border-radius: 2vw;\n    border: 1vw solid wheat;\n}\n\nbody {\n    background-image: url("+m+");\n    background-size: cover;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.tabContent {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\np {\n    color: wheat;\n}\n\n#headerContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    min-width: 100vw;\n\n    background-color: rgba(71, 68, 63, 0.7);\n\n    border-top: solid 1vw wheat;\n    border-bottom: solid 1vw wheat;\n}\n\n#aboutSection,\n#menuSection,\n#contactSection {\n    background-color: rgba(71, 68, 63, 0.7);\n    border: solid 2vw wheat;\n    border-radius: 7px;\n    max-width: 45vw;\n    padding: 2vw;\n    font-weight: 900;\n    margin: 2vw;\n}\n\n.navButton {\n    margin: 2vw;\n    background-color: wheat;\n    color:rgb(71, 68, 63);\n    border-radius: 5px;\n    border: solid .5vw rgb(71, 68, 63)\n}",""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(a)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&c[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var r={},c=[],i=0;i<e.length;i++){var s=e[i],d=a.base?s[0]+a.base:s[0],l=r[d]||0,m="".concat(d," ").concat(l);r[d]=l+1;var u=t(m),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(p);else{var h=o(p,a);a.byIndex=i,n.splice(i,0,{identifier:m,updater:h,references:1})}c.push(m)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<r.length;c++){var i=t(r[c]);n[i].references--}for(var s=a(e,o),d=0;d<r.length;d++){var l=t(r[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=s}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},941:(e,n,t)=>{e.exports=t.p+"0ab320e2925c525ab457.jpg"}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={id:a,exports:{}};return e[a](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),o=t.n(a),r=t(569),c=t.n(r),i=t(565),s=t.n(i),d=t(216),l=t.n(d),m=t(589),u=t.n(m),p=t(426),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals,t(941);const f=t.p+"650241e4f297cc392533.jpg",v=t.p+"b95de4f24d396550209f.jpg",g=t.p+"cfc5a0cf13575febc508.jpg",b=t.p+"7a591743174f2fa4960b.jpg",C=t.p+"c4b949bcf1fcce868fe9.jpg";function E(){const e=document.getElementById("content"),n=document.createElement("div"),t=document.createElement("div");t.id="headerContainer",n.appendChild(t);const a=document.createElement("h1");a.id="restaurantName",a.innerHTML="Oops All Bread",t.appendChild(a);const o=document.createElement("h2");o.id="restaurantSlogan",o.innerHTML="Its all we can afford!",t.appendChild(o);const r=document.createElement("div");r.id="navButtonContainer",t.appendChild(r);const c=document.createElement("button");c.className="navButton",c.innerHTML="Home",c.onclick=n=>{n.stopPropagation,e.innerHTML="",y()},r.appendChild(c);const i=document.createElement("button");i.className="navButton",i.innerHTML="Menu",i.onclick=n=>{n.stopPropagation,e.innerHTML="",E()},r.appendChild(i);const s=document.createElement("button");s.className="navButton",s.innerHTML="Contact Us",s.onclick=n=>{n.stopPropagation,e.innerHTML="",w()},r.appendChild(s);const d=document.createElement("div");d.id="menuSection",n.appendChild(d);const l=document.createElement("div");l.className="menuItemContainer",d.appendChild(l);const m=document.createElement("img");m.src=f,m.className="menuItemImg",l.appendChild(m);const u=document.createElement("h3");u.className="menuItem",u.innerHTML="Random Bread",l.appendChild(u);const p=document.createElement("div");p.className="menuItemContainer",d.appendChild(p);const h=document.createElement("img");h.src=v,h.className="menuItemImg",p.appendChild(h);const T=document.createElement("h3");T.className="menuItem",T.innerHTML="Random Bread With Seeds",p.appendChild(T);const M=document.createElement("div");M.className="menuItemContainer",d.appendChild(M);const H=document.createElement("img");H.src=g,H.className="menuItemImg",M.appendChild(H);const L=document.createElement("h3");L.className="menuItem",L.innerHTML="Stale Croissant",M.appendChild(L);const I=document.createElement("div");I.className="menuItemContainer",d.appendChild(I);const N=document.createElement("img");N.src=b,N.className="menuItemImg",I.appendChild(N);const x=document.createElement("h3");x.className="menuItem",x.innerHTML="Half of a Baguette",I.appendChild(x);const S=document.createElement("div");S.className="menuItemContainer",d.appendChild(S);const B=document.createElement("img");B.src=C,B.className="menuItemImg",S.appendChild(B);const k=document.createElement("h3");k.className="menuItem",k.innerHTML="Cream Puff",S.appendChild(k),n.className="tabContent",e.appendChild(n)}function w(){const e=document.getElementById("content"),n=document.createElement("div"),t=document.createElement("div");t.id="headerContainer",n.appendChild(t);const a=document.createElement("h1");a.id="restaurantName",a.innerHTML="Oops All Bread",t.appendChild(a);const o=document.createElement("h2");o.id="restaurantSlogan",o.innerHTML="Its all we can afford!",t.appendChild(o);const r=document.createElement("div");r.id="navButtonContainer",t.appendChild(r);const c=document.createElement("button");c.className="navButton",c.innerHTML="Home",c.onclick=n=>{n.stopPropagation,e.innerHTML="",y()},r.appendChild(c);const i=document.createElement("button");i.className="navButton",i.innerHTML="Menu",i.onclick=n=>{n.stopPropagation,e.innerHTML="",E()},r.appendChild(i);const s=document.createElement("button");s.className="navButton",s.innerHTML="Contact Us",s.onclick=n=>{n.stopPropagation,e.innerHTML="",w()},r.appendChild(s);const d=document.createElement("div");d.id="contactSection",n.appendChild(d);const l=document.createElement("h3");l.className="restaurantContact",l.innerHTML="Phone: (777) 777-7777 (If you get a lawyer hang up)",d.appendChild(l);const m=document.createElement("h3");m.className="restaurantContact",m.innerHTML="Email: breadbreadbreab@gmail.com (breadbreadbread was taken)",d.appendChild(m);const u=document.createElement("h3");u.className="restaurantContact",u.innerHTML=" Social Media: myspace.com (I don't remember the exact url)",d.appendChild(u),n.className="tabContent",e.appendChild(n)}function y(){let e=document.getElementById("content");e.innerHTML="";let n=document.createElement("div");const t=document.createElement("div");t.id="headerContainer",n.appendChild(t);const a=document.createElement("h1");a.id="restaurantName",a.innerHTML="Oops All Bread",t.appendChild(a);const o=document.createElement("h2");o.id="restaurantSlogan",o.innerHTML="Its all we can afford!",t.appendChild(o);const r=document.createElement("div");r.id="navButtonContainer",t.appendChild(r);const c=document.createElement("button");c.className="navButton",c.innerHTML="Home",c.onclick=n=>{n.stopPropagation,e.innerHTML="",y()},r.appendChild(c);const i=document.createElement("button");i.className="navButton",i.innerHTML="Menu",i.onclick=n=>{n.stopPropagation,e.innerHTML="",E()},r.appendChild(i);const s=document.createElement("button");s.className="navButton",s.innerHTML="Contact Us",s.onclick=n=>{n.stopPropagation,e.innerHTML="",w()},r.appendChild(s);const d=document.createElement("p");d.id="aboutSection",d.innerHTML="For 20 weeks this small family owned business has been selling buns, rolls, and those large loafs we know and love. Our owner, a member of the small family of one, had a supermarket in the suburb he grew up in and he has 20 years experience watching the bakers inside the bakery section bake their bread! This is where our bread comes from to this day! Come on in!",n.appendChild(d),console.log(e),e.innerHTML="",n.classList.add("tabContent"),e.appendChild(n)}y()})()})();