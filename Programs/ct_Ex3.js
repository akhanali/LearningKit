function equation() {

    
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);
  
    var discriminant=(Math.sqrt(b*b-4*a*c));
    var root = ((-b+discriminant)/(2*a)).toFixed(2); 
    var anotherRoot = ((-b-discriminant)/(2*a)).toFixed(2); 
    document.getElementById("output").innerHTML = "one root: " + root +"<br/>"+"another root: "+anotherRoot; 
  
  }
  