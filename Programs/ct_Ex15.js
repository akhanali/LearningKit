function problem_15() {
    var outputObj = document.getElementById("output");
    var n = document.getElementById("N").value;
    var s = '&nbsp';
    outputObj.innerHTML = "number: " + n + "<br>";
    for(i = 1; i <= n; i++) {
        for(j = n; j >= i; j--){
            outputObj.innerHTML += "oo";
        }     
        for(j = 1; j < i; j++){
            outputObj.innerHTML += s+s;
        }  
        outputObj.innerHTML += "<br>";
    }
        
    outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}