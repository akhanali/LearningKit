function equation() {

    
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);
  
    var discriminant=(b*b-4*a*c);
    
    if(discriminant>0){
        document.getElementById("output").innerHTML = "it has 2 distinct roots"; 
    }
    else if(discriminant<0){
        document.getElementById("output").innerHTML = "it has no roots in real numbers"; 
    }
    else if(discriminant==0){
        document.getElementById("output").innerHTML = "its roots are identical"; 
    } 
  
  }
  