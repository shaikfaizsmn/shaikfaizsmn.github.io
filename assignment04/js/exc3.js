
function factorial(x){
    if(x === 0){
        return 1;
    }
    return x * factorial(x-1);
}

document.addEventListener("click", factorial);

function factorial() {
  document.getElementById("x").innerHTML = "number";
}

console.log(factorial("x"))