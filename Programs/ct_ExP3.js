function problem_31() {
    var a;
    var sum = 0;
    var mx = -1;
    a = prompt("Enter a number");
    while(a != 0) {
        var temp = a;
        sum = 0;
        while(temp > 0){
            sum = sum+(temp%10);
            temp = Math.floor(temp/10);
        }
        if(sum > mx){
            mx = sum;
        }
        a = prompt("Enter a number");
    }
    document.getElementById("output").innerHTML = mx+" is the maximum sum of digits from all numbers"; 
}
function problem_32(){
    var a;
    var count = 0;
    a = prompt("Enter a number");
    while(a != 0) {
        count = 0;
        for(i = 1; i <= a; i++){
            if(a % i == 0){
                count++;
            }
        }
        alert("The number of divisors is "+count);
        a = prompt("Enter a number");
    }
}
function problem_33() {
    var outputObj = document.getElementById("output");
    var n = parseInt(document.getElementById("n").value);
    var s = '&nbsp';
    for(i = 1; i <= n; i++) {
        if(i == 1 || i == n) {
            for(j = 1; j <= n; j++){
                outputObj.innerHTML += "#";
            }
        }    
        else{
            outputObj.innerHTML += "#";
            for(j = 2; j < n; j++){
                outputObj.innerHTML += s+s;
            }  
            outputObj.innerHTML += "#";
        }
        outputObj.innerHTML += "<br>";
    }
    document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}
function problem_34() {
    var a;
    var s = "";
    a = prompt("Enter a number");
    while(a != 0) {
        s = "";
        for(i = 1; i <= a; i++){
            if(a % i == 0){
                if(prime(i)) {
                    s += i + " ";
                }
            }
        }
        alert("The prime divisors are "+s);
        a = prompt("Enter a number");
    }
}
function prime(num) {
    var prime = true;
    var d = 2;
    while(prime == true && d <= num/2){
        if(num % d == 0) {
            prime = false;
        }
        d++;
    }
    return prime;
}
function problem_35(){
    var a;
    var s = "";
    a = prompt("Enter a number");
    while(a != 0) {
        s="";
        for(i = 1; i <= a; i++){
            if(a % i == 0){
                if(has5(i)) {
                    s += i + " ";
                }
            }
        }
        if(s == "") {
            s = "none";
        }
        alert("The divisors with digit 5 are "+s);
        a = prompt("Enter a number");
    }
}
function has5(i){
    var a = i;
    while (a > 0) {
        if (a % 10 == 5) {
            return true;

        }
        a = Math.floor(a / 10);
    }
    return false;
}
function problem_29(){
    var n = parseInt(prompt("Enter a number"));
    var p = false;
    for(i = 1; i <= n; i*=2){
        if(i == n){
            p =true;
        }
    }
    if(p == true) {
        alert("Yes it is power of 2");
    }
    else {
        alert("No it is not power of 2");

    }
}
function problem_28(){
    var n = parseInt(prompt("Enter a number"));
    for(i = 1; i <= n; i+=2){
        if(i % 3 == 0){
            alert(i);
        }
    }
}
function problem_30(){
    var n = parseInt(prompt("Enter a number"));
    var p;
    n = Math.sqrt(n);
    p = Math.round(n);
    if(n != p) {
        alert("Not a perfect square");
    }
    else{alert("A perfect square");}
}