
const btns=document.querySelectorAll(".card button");
btns.forEach((btn)=>{
  btn.addEventListener("click",()=>{
    btn.innerText="Ordered";
    btn.style.transform = "scale(0.95)";
setTimeout(() => btn.style.transform = "scale(1)", 100);
  })
});