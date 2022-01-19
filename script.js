let container = document.querySelector(".container")
container.addEventListener("click", display);

function display(e){
  let result=document.querySelector("#result")
  if(e.target.value === undefined){
    result.value="";
  }
    else{
      result.value += e.target.value;
    }
  }

let clear = document.getElementById("clear")
let result = document.querySelector("#result")
let endresult=document.querySelector("#res")

clear.addEventListener("click",cleardata)
function cleardata(){
  result.value="";
  endresult.value="";
  
}

let equal = document.getElementById("equal")
equal.addEventListener("click", equalto)
function equalto() {
    let result = document.querySelector("#result")
    let endresult = document.querySelector("#res")
    endresult.value = eval(result.value)
}

function keypress(e) {
  
  let result = document.querySelector("#result");
  if ((e.key < 10 && e.key >= 0) || e.key === "*" || e.key === "-" || e.key === "+" || e.key === "/") {
      result.value += e.key
      
  }
  else if (e.key === "c" || e.key === "C") {
      cleardata()
  }
  else if (e.key === "Enter") {
      equalto()
  }
}
document.body.addEventListener("keypress", keypress)

