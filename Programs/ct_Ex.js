function problem_16() {

    var num = parseInt(prompt("Please enter a number: ", ""));
    var prime = true;
    var d = 2;
    while(prime == true && d<=num/2){
        if(num % d == 0){
            prime = false;
        }
        d++;
    }

    if(prime == true){
        alert("Number " + num + " is prime");
    }
    else {
        alert("Number " + num + " is not prime");
    }
}
function problem_17() {

    var sum1 = 0;
    var sum2 = 0;
    for(var i = 1; i<= 4; i++){
        var num = parseInt(prompt("Please enter a number: ", ""));
        sum1 = sum1+num;
    }
    for(var i = 1; i<= 4; i++){
        var num = parseInt(prompt("Please enter a number: ", ""));
        sum2 = sum2+num;
    }
    if(sum1 == sum2){
        alert("yes");
    }
    else {
        alert("no");
    }
}
function problem_18() {

    var p = 0;
    var n = 0;
    var num;
    do{
        num = parseInt(prompt("Please enter a number: ", ""));
        if(num>0){
            p++;
        }
        else{
            if(num<0)n++;
        }
    }while(num!=0 && p <= 2*n)
}
function problem_19() {

    var cnt1 = 0;
    var cnt2 = 0;
    for(var i = 1; i<= 4; i++){
        var num = parseInt(prompt("Please enter a number: ", ""));
        if(num <0){
            cnt1++;
        }
    }
    for(var i = 1; i<= 4; i++){
        var num = parseInt(prompt("Please enter a number: ", ""));
        if(num>0){
            cnt2++;
        }
    }
    if(cnt1 == cnt2){
        alert("yes");
    }
    else {
        alert("no");
    }
}
function problem_20() {
    var num = parseInt(prompt("Please enter a number: ", ""));
    for(var i = 2; i<= num; i++){
        var flag = true;
        var d = 2;
        while(flag == true && d<=i/2){
            if(i % d == 0){
                flag = false;
            }
        d++;
        }
        if(flag == true){
            alert(i);
        }
    }
}
function problem_21() {
    var num = parseInt(prompt("Please enter a number: ", ""));
    for(var i = 2; i<= num; i++){
        var prime = true;
        var d = 2;
        while(prime == true && d<=i/2){
            if(i % d == 0){
                prime = false;
            }
        d++;
        }
        if(prime == true){
            var a = i;
            var count = 0;
            while (a > 0 && count == 0) {
                if (a % 10 == 7) {
                    count += 1;
                    alert(i);
                }
                a = Math.floor(a / 10);
            }
        }
    }
}
function problem_22() {
    var p = document.getElementById("mydata");
  
    //call a sub-algorithm to return a random number in [0,2)
    var num = generateNum();
    if(num < 1){
      document.getElementById("mydata").innerHTML="HEADS";
    }
    else{
      document.getElementById("mydata").innerHTML="TAILS";
  
    }
  
}
  // a sub-algorithm to return a random number
  // pre-conditions: none
  // post-conditions: returns a random number in [0,2)
function generateNum() {
    var n = Math.random()*2;
    return n;
  
}
function problem_23(num) {
    var p = document.getElementById("mydata");
  
    //call a sub-algorithm to return a random whole number in range [1,num]
    var result = generateNum(num);
  
    p.innerHTML = "A random number between 1 and "+num+" is "+result;
}
  
  // a sub-algorithm to return a random number
  // pre-conditions: upTo belongs to Natural numbers > 0
  // post-conditions: returns a random whole number in range [1, upTo]
function generateNum(upTo) {
    return Math.floor(Math.random() * (upTo+1));
  
}
function problem_24(num) {
    var p = document.getElementById("mydata");
    //calling a sub-algorithm to calculate sum of 1 to num
    var result = mySum(num);
    p.innerHTML = "Result = " + result; 
}
  
  // a sub-algorithm to return sum of natural numbers up to upTo
  // pre-conditions: upTo belongs to Natural numbers >= 0
  // post-conditions: returns sum of all natural numbers less than or equal to upTo
function mySum(upTo) {
    var sum = 0;
    for(i = 0; i <= upTo; i++){
      sum+=i;
    }
    return sum;
  
}
function problem_25() {
    var p = document.getElementById("mydata");
    /*calling a sub-algorithm to return a random natural number between 1 
      and 6 inclusively; saving the result in a variable */
    var val1 = rollDice();
    var val2 = rollDice();
    p.innerHTML="Dice Rolls are '"+ val1 + "' '"+val2+"'";
    if(val1==val2){
      alert("DOUBLES!");
    }
}
  
  // a sub-algorithm to return a natural number between 1 and 6 inclusively
  // pre-conditions: none
  // post-conditions: returns a random natural number in the range of [1,6]
function rollDice() {
    var n = Math.floor(Math.random() * 6);
    n = n + 1;
    return n;
}
function problem_26() {
    var p = document.getElementById("mydata");
    //call a sub-algorithm to return the current time and date in a specific format
    p.innerHTML = getDateInCustomizedFormat();
}
  
  // a sub-algorithm to return the current date in a customized format
  // pre-conditions: none
  // post-conditions: returns current time and date in the following format: "It's HOUR:MIN. Today is DAYOFWEEK (MONTH DAY, YEAR)."
  //                  where capital words are replaced by appropriate values.
function getDateInCustomizedFormat() {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var d = new Date();
    var dayOfWeek = d.getDay();
    var month = d.getMonth();
    var day = d.getDate();
    var year = d.getFullYear();
    var hour = d.getHours();
    var min = d.getMinutes();
   
    var result = "It's "+hour+":"+min+". Today is "+days[dayOfWeek]+" ("+months[month]+" "+day+", "+year+").";
    return result;
}
var i = 21;

function problem_27() {
  var p = document.getElementById("mydata");

  p.innerHTML = counter();
}
// a sub-algorithm to count down from the initial value of a global variable
// pre-conditions: i belongs to N
// post-conditions: returns i-1 if i>1; otherwise returns BOOM!
function counter() {
  if(i > 1){
    i--;
    return i;
  }
  else{
    return "BOOM!";
  }

}
