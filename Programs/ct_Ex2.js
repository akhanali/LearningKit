function area() {

    
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("alpha").value);
    c = c * Math.PI / 180;

    var area = (a*b*Math.sin(c)).toFixed(2); 
    document.getElementById("output").innerHTML = "area: " + area; 
  
  }
  