const aboutDialog=document.getElementById('aboutDialog');
const aboutButton=document.getElementById('aboutButton');
let previousOverflow='';
aboutButton.addEventListener('click',()=>{previousOverflow=document.body.style.overflow;aboutDialog.showModal();document.body.style.overflow='hidden'});
document.getElementById('aboutClose').addEventListener('click',()=>aboutDialog.close());
aboutDialog.addEventListener('click',event=>{if(event.target!==aboutDialog)return;const r=aboutDialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)aboutDialog.close()});
aboutDialog.addEventListener('close',()=>{document.body.style.overflow=previousOverflow;aboutButton.focus()});
