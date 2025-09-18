import{r as n,j as c,P as w,g as x}from"./index-DxS2gvO1.js";/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),A=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,a,e)=>e?e.toUpperCase():a.toLowerCase()),u=t=>{const r=A(t);return r.charAt(0).toUpperCase()+r.slice(1)},p=(...t)=>t.filter((r,a,e)=>!!r&&r.trim()!==""&&e.indexOf(r)===a).join(" ").trim(),g=t=>{for(const r in t)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var N={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=n.forwardRef(({color:t="currentColor",size:r=24,strokeWidth:a=2,absoluteStrokeWidth:e,className:i="",children:o,iconNode:l,...s},f)=>n.createElement("svg",{ref:f,...N,width:r,height:r,stroke:t,strokeWidth:e?Number(a)*24/Number(r):a,className:p("lucide",i),...!o&&!g(s)&&{"aria-hidden":"true"},...s},[...l.map(([h,v])=>n.createElement(h,v)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=(t,r)=>{const a=n.forwardRef(({className:e,...i},o)=>n.createElement(E,{ref:o,iconNode:r,className:p(`lucide-${C(u(t))}`,`lucide-${t}`,e),...i}));return a.displayName=u(t),a};function I({children:t,className:r}){return c.jsx("section",{className:`w-full  ${r||""}`,children:c.jsx("div",{className:"mx-auto max-w-7xl px-responsive",children:t})})}var j="Separator",d="horizontal",O=["horizontal","vertical"],m=n.forwardRef((t,r)=>{const{decorative:a,orientation:e=d,...i}=t,o=b(e)?e:d,s=a?{role:"none"}:{"aria-orientation":o==="vertical"?o:void 0,role:"separator"};return c.jsx(w.div,{"data-orientation":o,...s,...i,ref:r})});m.displayName=j;function b(t){return O.includes(t)}var P=m;function L({className:t,orientation:r="horizontal",decorative:a=!0,...e}){return c.jsx(P,{"data-slot":"separator",decorative:a,orientation:r,className:x("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",t),...e})}export{I as S,L as a,k as c};
