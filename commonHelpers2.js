import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as o}from"./assets/vendor-77e16229.js";const a=document.querySelector(".form");a.addEventListener("submit",function(s){s.preventDefault();const r=s.currentTarget.elements.delay,t=parseInt(r.value),i=s.currentTarget.elements.state.value;new Promise((e,n)=>{i==="fulfilled"?setTimeout(()=>{e(t)},t):i==="rejected"&&setTimeout(()=>{n(t)},t)}).then(e=>{o.success({message:`✅ Fulfilled promise in ${e}ms`})}).catch(e=>{o.error({message:`❌ Rejected promise in ${e}ms`})})});
//# sourceMappingURL=commonHelpers2.js.map