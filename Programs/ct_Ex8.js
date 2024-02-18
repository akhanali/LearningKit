function numbers(){
    var a = 1;
    var d = 0;
    while(a != 0) {
        a = prompt("Enter a number");
        var last = a%10;
        if(last == 0 || last == 5 && last!=a){
            d++;
            alert("divisible");
        }
        else if(a!=0){
            alert("not divisible");
        }
    }
    document.getElementById("output").innerHTML = d+" numbers were divisible by 5"; 
}