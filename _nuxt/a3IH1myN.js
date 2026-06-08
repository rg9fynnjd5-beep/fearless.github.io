import{Q as t,a6 as p,R as r}from"./DFzuyqUf.js";const s=r(!1),i=r(null);function m(){const o=p().public.ownerWhatsapp;function a(e,n){const c=encodeURIComponent(`Hi! I'm interested in buying:

📦 *${e}*
🏷️ Category: ${n}

Please share price & availability. Thank you!`);return`https://wa.me/${o}?text=${c}`}function u(e,n){window.open(a(e,n),"_blank","noopener,noreferrer")}function l(){s.value=!1,setTimeout(()=>{i.value=null},300)}return{isModalOpen:t(s),modalProduct:t(i),handleBuyNow:u,closeModal:l,buildWhatsAppLink:a,ownerNumber:o}}export{m as u};
