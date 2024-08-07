const inputbox=document.getElementById("input_box");
const task=document.getElementById("task");
function addtask(){
  if(inputbox.value===''){
    alert("YOU MUST ENTER SOMETHING!");
  }
  else{
    let li=document.createElement("li");
    li.innerHTML=inputbox.value;
    task.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
  }
  inputbox.value="";
  savedata();
}

task.addEventListener("click", function(e) {
  if (e.target.tagName.toLowerCase() === "li") {
    e.target.classList.toggle("checked");
    savedata();
  } else if (e.target.tagName.toLowerCase() === "span") {
    e.target.parentNode.remove();   
 // Use parentNode instead of parentElement for broader compatibility
    savedata();
  }
});
function savedata(){
  localStorage.setItem("data",task.innerHTML)
}
function showtask(){
  task.innerHTML=localstorage.getiTem("data");
}
showtask();


