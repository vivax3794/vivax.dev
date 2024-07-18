import{x as M,a1 as C,a2 as A,D as L,y as F,a3 as j,a0 as H,C as k}from"./entry.gJC_TtOp.js";const w=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function K(r,n){if(typeof r!="string")throw new TypeError("argument str must be a string");const i={},t=(n||{}).decode||V;let o=0;for(;o<r.length;){const s=r.indexOf("=",o);if(s===-1)break;let a=r.indexOf(";",o);if(a===-1)a=r.length;else if(a<s){o=r.lastIndexOf(";",s-1)+1;continue}const c=r.slice(o,s).trim();if(i[c]===void 0){let u=r.slice(s+1,a).trim();u.codePointAt(0)===34&&(u=u.slice(1,-1)),i[c]=J(u,t)}o=a+1}return i}function b(r,n,i){const e=i||{},t=e.encode||W;if(typeof t!="function")throw new TypeError("option encode is invalid");if(!w.test(r))throw new TypeError("argument name is invalid");const o=t(n);if(o&&!w.test(o))throw new TypeError("argument val is invalid");let s=r+"="+o;if(e.maxAge!==void 0&&e.maxAge!==null){const a=e.maxAge-0;if(Number.isNaN(a)||!Number.isFinite(a))throw new TypeError("option maxAge is invalid");s+="; Max-Age="+Math.floor(a)}if(e.domain){if(!w.test(e.domain))throw new TypeError("option domain is invalid");s+="; Domain="+e.domain}if(e.path){if(!w.test(e.path))throw new TypeError("option path is invalid");s+="; Path="+e.path}if(e.expires){if(!q(e.expires)||Number.isNaN(e.expires.valueOf()))throw new TypeError("option expires is invalid");s+="; Expires="+e.expires.toUTCString()}if(e.httpOnly&&(s+="; HttpOnly"),e.secure&&(s+="; Secure"),e.priority)switch(typeof e.priority=="string"?e.priority.toLowerCase():e.priority){case"low":s+="; Priority=Low";break;case"medium":s+="; Priority=Medium";break;case"high":s+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(e.sameSite)switch(typeof e.sameSite=="string"?e.sameSite.toLowerCase():e.sameSite){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return s}function q(r){return Object.prototype.toString.call(r)==="[object Date]"||r instanceof Date}function J(r,n){try{return n(r)}catch{return r}}function V(r){return r.includes("%")?decodeURIComponent(r):r}function W(r){return encodeURIComponent(r)}const v=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function S(r,n){n?n={...v,...n}:n=v;const i=E(n);return i.dispatch(r),i.toString()}const X=Object.freeze(["prototype","__proto__","constructor"]);function E(r){let n="",i=new Map;const e=t=>{n+=t};return{toString(){return n},getContext(){return i},dispatch(t){return r.replacer&&(t=r.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const o=Object.prototype.toString.call(t);let s="";const a=o.length;a<10?s="unknown:["+o+"]":s=o.slice(8,a-1),s=s.toLowerCase();let c=null;if((c=i.get(t))===void 0)i.set(t,i.size);else return this.dispatch("[CIRCULAR:"+c+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(s!=="object"&&s!=="function"&&s!=="asyncfunction")this[s]?this[s](t):r.ignoreUnknown||this.unkown(t,s);else{let u=Object.keys(t);r.unorderedObjects&&(u=u.sort());let f=[];r.respectType!==!1&&!B(t)&&(f=X),r.excludeKeys&&(u=u.filter(l=>!r.excludeKeys(l)),f=f.filter(l=>!r.excludeKeys(l))),e("object:"+(u.length+f.length)+":");const h=l=>{this.dispatch(l),e(":"),r.excludeValues||this.dispatch(t[l]),e(",")};for(const l of u)h(l);for(const l of f)h(l)}},array(t,o){if(o=o===void 0?r.unorderedArrays!==!1:o,e("array:"+t.length+":"),!o||t.length<=1){for(const c of t)this.dispatch(c);return}const s=new Map,a=t.map(c=>{const u=E(r);u.dispatch(c);for(const[f,h]of u.getContext())s.set(f,h);return u.toString()});return i=s,a.sort(),this.array(a,!1)},date(t){return e("date:"+t.toJSON())},symbol(t){return e("symbol:"+t.toString())},unkown(t,o){if(e(o),!!t&&(e(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return e("error:"+t.toString())},boolean(t){return e("bool:"+t)},string(t){e("string:"+t.length+":"),e(t)},function(t){e("fn:"),B(t)?this.dispatch("[native]"):this.dispatch(t.toString()),r.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),r.respectFunctionProperties&&this.object(t)},number(t){return e("number:"+t)},xml(t){return e("xml:"+t.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(t){return e("regex:"+t.toString())},uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return e("url:"+t.toString())},map(t){e("map:");const o=[...t];return this.array(o,r.unorderedSets!==!1)},set(t){e("set:");const o=[...t];return this.array(o,r.unorderedSets!==!1)},file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(r.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(t){return e("bigint:"+t.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const O="[native code] }",Y=O.length;function B(r){return typeof r!="function"?!1:Function.prototype.toString.call(r).slice(-Y)===O}class d{constructor(n,i){n=this.words=n||[],this.sigBytes=i===void 0?n.length*4:i}toString(n){return(n||$).stringify(this)}concat(n){if(this.clamp(),this.sigBytes%4)for(let i=0;i<n.sigBytes;i++){const e=n.words[i>>>2]>>>24-i%4*8&255;this.words[this.sigBytes+i>>>2]|=e<<24-(this.sigBytes+i)%4*8}else for(let i=0;i<n.sigBytes;i+=4)this.words[this.sigBytes+i>>>2]=n.words[i>>>2];return this.sigBytes+=n.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new d([...this.words])}}const $={stringify(r){const n=[];for(let i=0;i<r.sigBytes;i++){const e=r.words[i>>>2]>>>24-i%4*8&255;n.push((e>>>4).toString(16),(e&15).toString(16))}return n.join("")}},G={stringify(r){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=[];for(let e=0;e<r.sigBytes;e+=3){const t=r.words[e>>>2]>>>24-e%4*8&255,o=r.words[e+1>>>2]>>>24-(e+1)%4*8&255,s=r.words[e+2>>>2]>>>24-(e+2)%4*8&255,a=t<<16|o<<8|s;for(let c=0;c<4&&e*8+c*6<r.sigBytes*8;c++)i.push(n.charAt(a>>>6*(3-c)&63))}return i.join("")}},Q={parse(r){const n=r.length,i=[];for(let e=0;e<n;e++)i[e>>>2]|=(r.charCodeAt(e)&255)<<24-e%4*8;return new d(i,n)}},Z={parse(r){return Q.parse(unescape(encodeURIComponent(r)))}};class ee{constructor(){this._data=new d,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new d,this._nDataBytes=0}_append(n){typeof n=="string"&&(n=Z.parse(n)),this._data.concat(n),this._nDataBytes+=n.sigBytes}_doProcessBlock(n,i){}_process(n){let i,e=this._data.sigBytes/(this.blockSize*4);n?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,o=Math.min(t*4,this._data.sigBytes);if(t){for(let s=0;s<t;s+=this.blockSize)this._doProcessBlock(this._data.words,s);i=this._data.words.splice(0,t),this._data.sigBytes-=o}return new d(i,o)}}class te extends ee{update(n){return this._append(n),this._process(),this}finalize(n){n&&this._append(n)}}const _=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],re=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],p=[];class ie extends te{constructor(){super(...arguments),this._hash=new d([..._])}reset(){super.reset(),this._hash=new d([..._])}_doProcessBlock(n,i){const e=this._hash.words;let t=e[0],o=e[1],s=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7];for(let l=0;l<64;l++){if(l<16)p[l]=n[i+l]|0;else{const y=p[l-15],D=(y<<25|y>>>7)^(y<<14|y>>>18)^y>>>3,g=p[l-2],I=(g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10;p[l]=D+p[l-7]+I+p[l-16]}const z=c&u^~c&f,P=t&o^t&s^o&s,N=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),R=(c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25),x=h+R+z+re[l]+p[l],U=N+P;h=f,f=u,u=c,c=a+x|0,a=s,s=o,o=t,t=x+U|0}e[0]=e[0]+t|0,e[1]=e[1]+o|0,e[2]=e[2]+s|0,e[3]=e[3]+a|0,e[4]=e[4]+c|0,e[5]=e[5]+u|0,e[6]=e[6]+f|0,e[7]=e[7]+h|0}finalize(n){super.finalize(n);const i=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(i/4294967296),this._data.words[(e+64>>>9<<4)+15]=i,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function ne(r){return new ie().finalize(r).toString(G)}function he(r,n={}){const i=typeof r=="string"?r:S(r,n);return ne(i).slice(0,10)}function se(r,n,i={}){return r===n||S(r,i)===S(n,i)}const oe={path:"/",watch:!0,decode:r=>H(decodeURIComponent(r)),encode:r=>encodeURIComponent(typeof r=="string"?r:JSON.stringify(r))};function m(r,n){var c;const i={...oe,...n},e=ae(i)||{};let t;i.maxAge!==void 0?t=i.maxAge*1e3:i.expires&&(t=i.expires.getTime()-Date.now());const o=t!==void 0&&t<=0,s=o?void 0:e[r]??((c=i.default)==null?void 0:c.call(i)),a=t&&!o?le(s,t):M(s);{const u=typeof BroadcastChannel>"u"?null:new BroadcastChannel(`nuxt:cookies:${r}`),f=()=>{i.readonly||se(a.value,e[r])||(ue(r,a.value,i),u==null||u.postMessage(i.encode(a.value)))};let h=!1;C()&&A(()=>{h=!0,f(),u==null||u.close()}),u&&(u.onmessage=l=>{h=!0,e[r]=a.value=i.decode(l.data),L(()=>{h=!1})}),i.watch?F(a,()=>{h||f()},{deep:i.watch!=="shallow"}):f()}return a}function ae(r={}){return K(document.cookie,r)}function ce(r,n,i={}){return n==null?b(r,n,{...i,maxAge:-1}):b(r,n,i)}function ue(r,n,i={}){document.cookie=ce(r,n,i)}const T=2147483647;function le(r,n){let i,e=0;return C()&&A(()=>{clearTimeout(i)}),j((t,o)=>{function s(){clearTimeout(i);const a=n-e,c=a<T?a:T;i=setTimeout(()=>{if(e+=c,e<n)return s();r=void 0,o()},c)}return{get(){return t(),r},set(a){s(),r=a,o()}}})}const de=()=>({isEnabled:()=>{const e=k().query;return Object.prototype.hasOwnProperty.call(e,"preview")&&!e.preview?!1:!!(e.preview||m("previewToken").value||sessionStorage.getItem("previewToken"))},getPreviewToken:()=>m("previewToken").value||sessionStorage.getItem("previewToken")||void 0,setPreviewToken:e=>{m("previewToken").value=e,k().query.preview=e||"",e?sessionStorage.setItem("previewToken",e):sessionStorage.removeItem("previewToken"),window.location.reload()}});export{he as h,de as u};
