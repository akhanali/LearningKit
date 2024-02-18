function numbers(){
    var a = 1;
    var p = 0;
    var n = 0;
    while(a != 0) {
        a = prompt("Enter a number");
        if(a > 0){
            p++;
            alert("positive");
        }
        else if(a < 0){
            n++;
            alert("negative");
        }
    }
    document.getElementById("output").innerHTML = n+" negative numbers "+p+" positive numbers"; 
}