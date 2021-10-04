console.clear()

console.log("Enter array value")
var arr = window.prompt("arr"); alert("You have input the following values : " + arr)
function mixMaxAvg(arr){
    var max = arr[0]
    var min = arr[0]
    var sum = arr[0]
    for (var i = 1; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i]
        }
        if (arr[i] > max){
            max = arr[i]
        } 
        sum = sum + arr[i]
    }
    return [min, max, sum/arr.length]
}

console.log ('minMaxAvg')
