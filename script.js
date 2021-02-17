// function getPrev(){
// 	return document.getElementById("preval").innerText;
// }

// alert(getPrev());

// function printPrev(value){
//     document.getElementById("preval").innerText = value; 
// }

// printPrev(99+9+8);

function display(num){
    document.getElementById("curval").value+=num 
}

function solve() 
{ 
    let x = document.getElementById("result").value 
    let y = eval(x) 
    document.getElementById("result").value = y 
} 

function clr() 
{ 
    document.getElementById("result").value = "" 
} 