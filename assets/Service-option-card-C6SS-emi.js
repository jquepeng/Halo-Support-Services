import{r as i,j as r,P as w,g as c,B as g}from"./index-CUIrg0Wf.js";/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),N=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,o)=>o?o.toUpperCase():a.toLowerCase()),x=e=>{const t=N(e);return t.charAt(0).toUpperCase()+t.slice(1)},p=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim(),C=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var b={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=i.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:o,className:n="",children:s,iconNode:d,...l},f)=>i.createElement("svg",{ref:f,...b,width:t,height:t,stroke:e,strokeWidth:o?Number(a)*24/Number(t):a,className:p("lucide",n),...!s&&!C(l)&&{"aria-hidden":"true"},...l},[...d.map(([h,v])=>i.createElement(h,v)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=(e,t)=>{const a=i.forwardRef(({className:o,...n},s)=>i.createElement(S,{ref:s,iconNode:t,className:p(`lucide-${j(x(e))}`,`lucide-${e}`,o),...n}));return a.displayName=x(e),a};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]],y=A("chevrons-right",k);var E="Separator",u="horizontal",L=["horizontal","vertical"],m=i.forwardRef((e,t)=>{const{decorative:a,orientation:o=u,...n}=e,s=O(o)?o:u,l=a?{role:"none"}:{"aria-orientation":s==="vertical"?s:void 0,role:"separator"};return r.jsx(w.div,{"data-orientation":s,...l,...n,ref:t})});m.displayName=E;function O(e){return L.includes(e)}var R=m;function P({className:e,orientation:t="horizontal",decorative:a=!0,...o}){return r.jsx(R,{"data-slot":"separator",decorative:a,orientation:t,className:c("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",e),...o})}const T="/Halo-Support-Services/assets/Halo-Support-Services-Logo-small(White)-rzqLPF7l.svg";function z({className:e,...t}){return r.jsx("div",{"data-slot":"card",className:c("bg-card text-card-foreground flex flex-col gap-6 rounded-xl",e),...t})}const $=({name:e,description:t,imagePath:a,url:o,reversed:n=!1})=>r.jsx(z,{className:"p-4 max-w-4xl w-full bg-white",children:r.jsxs("div",{className:c("flex flex-col sm:flex-row gap-4 w-full",n&&"md:flex-row-reverse"),children:[r.jsxs("div",{className:"flex-1 flex flex-col",children:[r.jsxs("div",{className:"w-fit",children:[r.jsx("h1",{className:"text-4xl text-primary font-bold uppercase",children:e}),r.jsx(P,{className:"mb-[2px] data-[orientation=horizontal]:w-4/5"})]}),r.jsx("p",{className:"mt-4 text-accent-foreground",children:t})]}),r.jsxs("div",{className:"relative h-64 w-full sm:w-64 rounded-sm flex-shrink-0 bg-slate-700 overflow-hidden",children:[r.jsxs("div",{className:"absolute inset-0 flex flex-col p-4 justify-end z-10",children:[r.jsx("h3",{className:"text-white text-xl font-bold uppercase text-shadow-lg",children:e}),r.jsxs(g,{className:"rounded-full w-max font-light uppercase group",onClick:()=>o,children:["Read more ",r.jsx(y,{})]})]}),r.jsx("img",{src:a,alt:e,className:"absolute inset-0 w-full h-full object-cover"})]})]})});export{z as C,T as H,P as S,$ as a};
