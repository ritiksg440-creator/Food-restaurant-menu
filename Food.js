
const btns=document.querySelectorAll(".card button");
btns.forEach((btn)=>{
  btn.addEventListener("click",()=>{
    btn.innerText="Ordered";
    btn.style.transform = "scale(0.95)";
setTimeout(() => btn.style.transform = "scale(1)", 100);
  })
});
const search=document.querySelector("#inp");
const cards=document.querySelectorAll(".card");
search.addEventListener("input",()=>{
  const query=search.value.toLowerCase();
  cards.forEach((card)=>{
    const name=card.querySelector("h2").innerText.toLowerCase();
    if(name.includes(query)){
      card.style.display="block";
    }
    else{
      card.style.display="none";
    }
  })
})