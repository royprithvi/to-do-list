 const a=document.getElementById("input");
const b=document.getElementById("list-container");

function addTask(){
  if(a.value===''){
    alert("Please enter a task");
  }
  else{
    const li=document.createElement("li");
    li.innerHTML=a.value;
    b.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
  }
  a.value = '';
}
  function clearAll() {
    b.innerHTML = '';
  }

b.addEventListener("click",function(e){
  if(e.target.tagName==="LI"){
  e.target.classList.toggle("checked")
  }
    else if(e.target.tagName==="SPAN"){
      e.target.parentElement.remove();
    }
    
 
    
},false);

  

