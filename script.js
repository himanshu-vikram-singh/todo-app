let h1=document.querySelector("h1");
let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");


btn.addEventListener("click",()=>{
    let li=document.createElement("li");
    li.classList.add("list"); 
    console.log("console is work ")
    li.innerText=inp.value;

  

    let btn2=document.createElement("button");
    btn2.innerHTML="remove";
    btn2.classList.add("delete");
    li.appendChild(btn2);
    ul.appendChild(li);
   li.addEventListener("click",(event)=>{
     console.dir(event.target);
     if(event.target.localName=="button"){
       let item=event.target.parentElement;
       item.remove();
      
     }
   })


});
