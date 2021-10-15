var y = prompt("type number ");
var x = input;

 function factorial(x) {
   if(x==0) {
      return 1;
   }
   return x * factorial(x-1);
}

function run(number) {
    alert(factorial(parseInt(number, 10)));
}
run(x);
