function checkPalindrome(text)   
{  
    function checkPalindrome() {
        var revStr = "";
        var str = document.getElementById("str").value;
        var i = str.length;
        for (var j = i; j >= 0; j--) {
          revStr = revStr + str.charAt(j);
        }
        if (str == revStr) {
          alert("The entry is Palindrome");
        } else {
          alert("The entry is not a Palindrome");
        }
      }
}  
function checkPalindrome()  
{  
var text = document.getElementById("str").value;  
var f = checkPalindrome(text);  
document.getElementById("res").innerHTML="This word " + num + " is: " + f ;  
}  
