function perimeter() {

    
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);

    var perimeter = 2*(a + b); 
   
    document.getElementById("output").innerHTML = "perimeter: " + perimeter; 
  
  }
  