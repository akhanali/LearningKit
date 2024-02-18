function problem_09() {
    var outputObj = document.getElementById("output");
    // this statement receives some data and parses it to integer
    var a = parseInt(prompt("Please enter a number: ", ""));
    
   
    /* this statement add some message to our output Object
       you would need to change the message to be appropriate in Ex10 to E15*/
    outputObj.innerHTML = "number: " + a + "<br><br>its digits: ";
  
    // translate the rest of your flowcharts to js here:
    while(a > 0){
        outputObj.innerHTML += a%10 + ", "
        a = Math.floor(a/10);
    }  
    //the following statements inform the user that the program ended
    //and disable the button
    outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}
function problem_10() {
  
    /* this statement defines an object reference to the 
       html element having an ID "output".
       Every time you want to output something, use outputObj */
    var outputObj = document.getElementById("output");
    // this statement receives some data and parses it to integer
    var a = parseInt(prompt("Please enter a number: ", ""));
    var count = 0;
   
    /* this statement add some message to our output Object
       you would need to change the message to be appropriate in Ex10 to E15*/
    outputObj.innerHTML = "number: " + a + "<br><br>number of 7’s: ";
  
    // translate the rest of your flowcharts to js here:
    while(a > 0){
        if(a%10 == 7) count+=1;
        a = Math.floor(a/10);
    }  
    outputObj.innerHTML=outputObj.innerHTML+count;
    outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}
function problem_11() {
  
    /* this statement defines an object reference to the 
       html element having an ID "output".
       Every time you want to output something, use outputObj */
    var outputObj = document.getElementById("output");
    // this statement receives some data and parses it to integer
    var a = parseInt(prompt("Please enter a number: ", ""));
    var sum = 0;
   
    /* this statement add some message to our output Object
       you would need to change the message to be appropriate in Ex10 to E15*/
    outputObj.innerHTML = "number: " + a + "<br><br>sum of digits: ";
  
    // translate the rest of your flowcharts to js here:
    while(a > 0){
        sum+=a%10;
        a = Math.floor(a/10);
    }  
    outputObj.innerHTML=outputObj.innerHTML+sum;
    outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}
function problem_12() {
  
    /* this statement defines an object reference to the 
       html element having an ID "output".
       Every time you want to output something, use outputObj */
    var outputObj = document.getElementById("output");
    // this statement receives some data and parses it to integer
    var a = parseInt(prompt("Please enter a number: ", ""));
    var temp = a;
    var reverse = 0;
   
    /* this statement add some message to our output Object
       you would need to change the message to be appropriate in Ex10 to E15*/
    outputObj.innerHTML = "number: " + a + "<br><br>equal to its reverse? ";
  
    // translate the rest of your flowcharts to js here:
    while(temp > 0) {
        reverse=reverse*10+(temp%10);
        temp = Math.floor(temp/10);
    }
    if(a==reverse){
        outputObj.innerHTML=outputObj.innerHTML+"yes";
    }
    else{
        outputObj.innerHTML=outputObj.innerHTML+"no";
    }
    outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}
function problem_13() {
    var outputObj = document.getElementById("output");
    outputObj.innerHTML = "Sequnce: ";
    var n = document.getElementById("N").value;
    for(i = 1; i < n; i++) {
        outputObj.innerHTML += ((Math.pow(3,i)-1)/2) + ", ";
    }
    outputObj.innerHTML += ((Math.pow(3,n)-1)/2);

    /* this statement add some message to our output Object
       you would need to change the message to be appropriate in Ex10 to E15*/
    
    
    outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}
function fibonacci() {
  
    /* this statement defines an object reference to the 
       html element having an ID "output".
       Every time you want to output something, use outputObj */
    var outputObj = document.getElementById("output");
       // this statement receives some data and parses it to integer
    var n = parseInt(prompt("Please enter a number: ", ""));
       
      
       /* this statement add some message to our output Object
          you would need to change the message to be appropriate in Ex10 to E15*/
    outputObj.innerHTML = "number: " + n + "<br><br>Fibonnaci: ";
     

    var secondLast=0;
    var last=1;
    var newValue;
    outputObj.innerHTML += secondLast + ", " + last + ", ";
    for(i = 3; i <= n; i++) {
        newValue = last + secondLast;
        secondLast = last;
        last = newValue;     
        outputObj.innerHTML += newValue+ ", ";
    }
    
    outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}