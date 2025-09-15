import{r as s,j as f,g as C}from"./index-C3pp85LA.js";/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),w=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),i=r=>{const e=w(r);return e.charAt(0).toUpperCase()+e.slice(1)},l=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),x=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var h={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:n="",children:a,iconNode:u,...c},d)=>s.createElement("svg",{ref:d,...h,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:l("lucide",n),...!a&&!x(c)&&{"aria-hidden":"true"},...c},[...u.map(([p,m])=>s.createElement(p,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=(r,e)=>{const t=s.forwardRef(({className:o,...n},a)=>s.createElement(A,{ref:a,iconNode:e,className:l(`lucide-${g(i(r))}`,`lucide-${r}`,o),...n}));return t.displayName=i(r),t};function k({className:r,...e}){return f.jsx("div",{"data-slot":"card",className:C("bg-card text-card-foreground flex flex-col gap-6 rounded-xl",r),...e})}export{k as C,j as c};
