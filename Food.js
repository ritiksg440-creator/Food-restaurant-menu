
const btns=document.querySelectorAll(".card button");
btns.forEach((btn)=>{
  btn.addEventListener("click",()=>{
    btn.innerText="Ordered";
  })
});