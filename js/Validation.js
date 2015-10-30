


function submitForm(){
	
	var zip = document.getElementById("zipcode").value;
	var cuisine = document.getElementById("cuisine").value;
	var name = document.getElementById("name").value;	
	window.location = "display.html?zipcode="+zip+"&cuisine="+cuisine+"&name="+name;
	document.myform.method = "GET";	
}





