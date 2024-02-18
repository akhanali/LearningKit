function numbers(){
    var a = 1;
    while(a != 0) {
        a = prompt("Enter a number");
        if(a > 0){
            alert("positive");
        }
        else if(a < 0){
            alert("negative");
        }
    }
}