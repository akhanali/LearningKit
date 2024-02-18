var path;
function problem(text, design, JSsolution) {
    document.getElementById("problem").innerHTML = text;

    document.getElementById("flowchart").setAttribute("src", design);
    document.getElementById("flowchart").style.display = "none";
    document.getElementById("js").setAttribute("src", JSsolution);
    document.getElementById("js").style.display = "none";
    document.getElementById("runButton").style.display = "none";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

}
function p01Func() {
    problem("Draw a flowchart for a computer program to receive two numbers as sides of a parallelogram and output the parallelogram’s perimeter.", "images/Problem1/img_01.PNG", "images/Problem1/JSsolution1.PNG");
    path = "Programs/ct_Ex1.html";
}
function p02Func() {
    problem("Draw a flowchart for a computer program which receives three numbers as sides of a parallelogram and an angle between them, in degrees, and outputs its area.", "images/Problem2/img_02.PNG", "images/Problem2/JSsolution2.PNG");
    path = "Programs/ct_Ex2.html";
}
function p03Func() {
    problem("Draw a flowchart for a computer program to receive three numerical coefficients of aquadratic equation and calculate and output its roots. (assume coefficients are good enough such that a solution in real number exists).", "images/Problem3/img_03.PNG", "images/Problem3/JSsolution3.PNG");
    path = "Programs/ct_Ex3.html";
}
function p04Func() {
    problem("Draw a flowchart to receive three numerical coefficients of a quadratic equation and determine if it has two distinct real roots, one root, or no roots in real numbers.", "images/Problem4/img_04.jpg", "images/Problem4/JSsolution4.PNG");
    path = "Programs/ct_Ex4.html";
}
function p05Func() {
    problem("Draw a flowchart to receive a number and map it to a letter grade based on York standard.", "images/Problem5/img_05.jpg", "images/Problem5/JSsolution5.PNG");
    path = "Programs/ct_Ex5.html";
}
function p06Func() {
    problem("Draw a flowchart that outputs whether the input is positive or negative until a zero is received.", "images/Problem6/img_06.jpg", "images/Problem6/JSsolution6.PNG");
    path = "Programs/ct_Ex6.html";
}
function p07Func() {
    problem("Draw a flowchart to continue receiving numbers and output if they are positive or negative, until a zero is entered. When a zero is entered, the program should output how many positive and how many negative numbers have been entered, and then stop.", "images/Problem7/img_07.jpg", "images/Problem7/JSsolution7.PNG");
    path = "Programs/ct_Ex7.html";
}
function p08Func() {
    problem("Draw a flowchart to continue receiving numbers and output if they are divisible by 5 or not until a zero is entered. When a zero is entered, the program should output how many of the entered numbers were divisible by 5, then it stops.", "images/Problem8/img_08.jpg", "images/Problem8/JSsolution8.PNG");
    path = "Programs/ct_Ex8.html";
}
function p09Func() {
    problem("Devise a flowchart to receive a positive integer and output each digit separately.", "images/Problem9/img_09.jpg", "images/Problem9/JSsolution9.PNG");
    path = "Programs/ct_Ex9.html";
}
function p10Func() {
    problem("Devise a flowchart to receive a positive number and output how many of its digits are equal to 7.", "images/Problem10/img_10.jpg", "images/Problem10/JSsolution10.PNG");
    path = "Programs/ct_Ex10.html";
}
function p11Func() {
    problem("Devise a flowchart to receive a positive number and output sum of its digits.", "images/Problem11/img_11.jpg", "images/Problem11/JSsolution11.PNG");
    path = "Programs/ct_Ex11.html";
}
function p12Func() {
    problem("Devise a flowchart to receive a positive number and output 'yes' if it's equal to its reverse; otherwise, output 'no'.", "images/Problem12/img_12.jpg", "images/Problem12/JSsolution12.PNG");
    path = "Programs/ct_Ex12.html";
}
function p13Func() {
    problem("Devise an algorithm to input an integer greater than 0, as n, and output the first n members of shell sequence", "images/Problem13/img_13.jpg", "images/Problem13/JSsolution13.PNG");
    path = "Programs/ct_Ex13.html";
}
function p14Func() {
    problem("Devise an algorithm to input an integer greater than 1, as n, and output the first n values of the Fibonacci sequence", "images/Problem14/img_14.jpg", "images/Problem14/JSsolution14.PNG");
    path = "Programs/ct_Ex14.html";
}
function p15Func() {
    problem("Devise an algorithm to input a positive integer, n, and by using o characters output the figure that has n rows, with 2n 'o' characters in the top row and two characters in the last row.", "images/Problem15/img_15.jpg", "images/Problem15/JSsolution15.PNG");
    path = "Programs/ct_Ex15.html";
}
function p16Func() {
    problem("Devise an algorithm to input an integer, n, and output whether the number is prime or not.", "images/Problem16/img_16.PNG", "images/Problem16/JSsolution16.PNG");
    path = "Programs/ct_Ex16.html";
} 
function p17Func() {
    problem("Devise an algorithm to recieve 8 numbers and output 'yes' if the sum of the first four numbers equals to the sum of the last 4 numbers, otherwise output 'no'. ", "images/Problem17/img_17.PNG", "images/Problem17/JSsolution17.PNG");
    path = "Programs/ct_Ex17.html";
}
function p18Func() {
    problem("Devise an algoritm to receive numbers until a zero is eneterd or the number of positive numbers is greater than the doubled amount of negative numbers.", "images/Problem18/img_18.PNG", "images/Problem18/JSsolution18.PNG");
    path = "Programs/ct_Ex18.html";
}
function p19Func() {
    problem("Devise an algorithm to receive 8 integers and output if the number of negative values in the first four integers equals to the number of postive values in the last four integers.", "images/Problem19/img_19.PNG", "images/Problem19/JSsolution19.PNG");
    path = "Programs/ct_Ex19.html";
}
function p20Func() {
    problem("Devise an algorithm to receive an integer, n, and output all prime numbers less than n.", "images/Problem20/img_20.PNG", "images/Problem20/JSsolution20.PNG");
    path = "Programs/ct_Ex20.html";
}
function p21Func() {
    problem("Devise an algorithm to receive a positive number, n, and output all prime numbers that are smaller than n and have a digit 7.", "images/Problem21/img_21.PNG", "images/Problem21/JSsolution21.PNG");
    path = "Programs/ct_Ex21.html";
}


function zoomIn(a) {
    if(a == 1) {
        document.getElementById("flowchart").style.width = "200%";
    }
    if(a == 2) {
        document.getElementById("js").style.width = "200%";
    }
    if(a == 3) {
        document.getElementById("another").style.width = "200%";
    }
}
function zoomOut(a) {
    if(a == 1) {
        document.getElementById("flowchart").style.width = "100%";
    }
    if(a == 2) {
        document.getElementById("js").style.width = "100%";
    }
    if(a == 3) {
        document.getElementById("another").style.width = "100%";
    }
}


function p22Func() {
    problem("Devise an algorithm to show TAILS or HEADS randomly.", "images/Problem22/img_22.PNG", "images/Problem22/JSsolution22.PNG");
    path = "Programs/ct_Ex22.html";
}
function p23Func() {
    problem("Devise an algorithm to output a random number between 1 and n, where n is the number on a specific button(10,20,30,40).", "images/Problem23/img_23.jpg", "images/Problem23/JSsolution23.PNG");
    path = "Programs/ct_Ex23.html";
}
function p24Func() {
    problem("Devise an algoritm to output the sum from 1 to n, where n is the number on one of the buttons(10,20,30,40)", "images/Problem24/img_24.jpg", "images/Problem24/JSsolution24.PNG");
    path = "Programs/ct_Ex24.html";
}
function p25Func() {
    problem("Devise an algorithm to randomly output two rolls of a dice and alert the user if they got doubles.", "images/Problem25/img_25.jpg", "images/Problem25/JSsolution25.PNG");
    path = "Programs/ct_Ex25.html";
}
function p26Func() {
    problem("Devise an algorithm to output todays date, day of week, month and year.", "images/Problem26/img_26.jpg", "images/Problem26/JSsolution26.PNG");
    path = "Programs/ct_Ex26.html";
}
function p27Func() {
    problem("Devise an algorithm to decrement the counter on a bomb with button clicks and output 'BOOM!' when the counter is zero.", "images/Problem27/img_27.jpg", "images/Problem27/JSsolution27.PNG");
    path = "Programs/ct_Ex27.html";
}
function p28Func() {
    problem("Devise an algorithm to output every odd number less than n and divisible by 3.", "images/Problem28/img_28.png", "images/Problem28/JSsolution28.PNG");
    path = "Programs/ct_Ex28.html";
}
function p29Func() {
    problem("Devise an algorithm to output whether the number n is a power of 2 or not.", "images/Problem29/img_29.PNG", "images/Problem29/JSsolution29.PNG");
    path = "Programs/ct_Ex29.html";
}
function p30Func() {
    problem("Devise an algorithm to output whether the number n is a perfect square.", "images/Problem30/img_30.PNG", "images/Problem30/JSsolution30.PNG");
    path = "Programs/ct_Ex30.html";
}
function p31Func() {
    problem("Devise an algorithm to receive numbers until 0 is entered and output a maximum sum of digits out of all numbers.", "images/Problem31/img_31.jpg", "images/Problem31/JSsolution31.PNG");
    path = "Programs/ct_Ex31.html";
}
function p32Func() {
    problem("Devise an algorithm to receive numbers until 0 is entered and output number of divisors of every number.", "images/Problem32/img_32.jpg", "images/Problem32/JSsolution32.PNG");
    path = "Programs/ct_Ex32.html";
}
function p33Func() {
    problem("Devise an algorithm to output the box of n*n with '#'.", "images/Problem33/img_33.jpg", "images/Problem33/JSsolution33.PNG");
    path = "Programs/ct_Ex33.html";
}
function p34Func() {
    problem("Devise an algorithm to receive numbers until 0 is entered and output prime divisors of every number.", "images/Problem34/img_34.jpg", "images/Problem34/JSsolution34.PNG");
    path = "Programs/ct_Ex34.html";
}
function p35Func() {
    problem("Devise an algorithm to receive numbers until 0 is entered and output divisors that have digit 5 of every number.", "images/Problem35/img_35.jpg", "images/Problem35/JSsolution35.PNG");
    path = "Programs/ct_Ex35.html";
}

function run(){
    window.open(path, "_blank");
}
function checkUncheck1() {
    if (document.getElementById("check1").checked == true) {
        document.getElementById("flowchart").style.display = "inline";
    }
    else {
        document.getElementById("flowchart").style.display = "none";
    }
}
function checkUncheck2() {
    if (document.getElementById("check2").checked == true) {
        document.getElementById("js").style.display = "inline";
        document.getElementById("runButton").style.display = "inline";
    }
    else {
        document.getElementById("js").style.display = "none";
        document.getElementById("runButton").style.display = "none";
    }
}
function checkUncheck3() {
    if (document.getElementById("check3").checked == true) {
        document.getElementById("another").style.display = "inline";
    }
    else {
        document.getElementById("another").style.display = "none";
    }
}