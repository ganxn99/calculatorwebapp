function getPrev(){
	return document.getElementById("preval").innerText;
}

alert(getPrev());
function printPrev(value){
    document.getElementById("preval").innerText = value; 
}

function getResult(){
	return document.getElementById("curval").innerText;
}

function printResult(num){
	if(num==""){
		document.getElementById("curval").innerText=num;
	}
	else{
		document.getElementById("curval").innerText=getFormattedNumber(num);
	}	
}

function dis(val){
     document.getElementById("preval").value+=val 
}

function cal() { 
    let x = document.getElementById("curval").value 
    let y = eval(x) 
    document.getElementById("preval").value = y 
    } 

function clr() { 
    document.getElementById("result").value = "" 
} 

