import{q as m,w as c,e as v,s as l,j as d,u as g,a as y}from"./query.aiKMQ7rt.js";import{I as h,J as _,K as w,E as C,L as P,f as $,M as x,l as N,G as E,m as f}from"./entry.gJC_TtOp.js";import{h as p,u as T}from"./preview.ZfCsxmtF.js";import{_ as j}from"./nuxt-link.GNQ75Pbp.js";const S="$s";function b(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,o]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(o!==void 0&&typeof o!="function")throw new Error("[nuxt] [useState] init must be a function: "+o);const a=S+n,r=w(),i=h(r.payload.state,a);if(i.value===void 0&&o){const s=o();if(_(s))return r.payload.state[a]=s,s;i.value=s}return i}const D=async t=>{const{content:e}=C().public;typeof(t==null?void 0:t.params)!="function"&&(t=m(t));const n=t.params(),o=e.experimental.stripQueryParameters?c(`/navigation/${`${p(n)}.${e.integrity}`}/${v(n)}.json`):c(`/navigation/${p(n)}.${e.integrity}.json`);if(l())return(await P(()=>import("./client-db.AEM-_8tD.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(i=>i.generateNavigation))(n);const a=await $fetch(o,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:d(n),previewToken:T().getPreviewToken()}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a},R=$({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=x(t),n=N(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!n.value&&b("dd-navigation").value){const{navigation:a}=g();return{navigation:a}}const{data:o}=await y(`content-navigation-${p(n.value)}`,()=>D(n.value));return{navigation:o}},render(t){const e=E(),{navigation:n}=t,o=i=>f(j,{to:i._path},()=>i.title),a=(i,s)=>f("ul",s?{"data-level":s}:null,i.map(u=>u.children?f("li",null,[o(u),a(u.children,s+1)]):f("li",null,o(u)))),r=i=>a(i,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):r(n)}}),O=R;export{O as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./client-db.AEM-_8tD.js","./entry.gJC_TtOp.js","./entry.6HNuRP_h.css","./query.aiKMQ7rt.js","./preview.ZfCsxmtF.js","./index.Wme0U9j4.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}