import{bu as e,bX as n,bY as t}from"./index.3f7fdb45.js";function i(i,s=150,r){let o=()=>{i()};const[d,a]=e(o,s,r);o=d;const m=()=>{r&&r.immediate&&o(),window.addEventListener("resize",o)},b=()=>{window.removeEventListener("resize",o),a()};return n((()=>{m()})),t((()=>{b()})),[m,b]}export{i as u};
