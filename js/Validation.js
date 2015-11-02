function submitForm(){
	
	var zip = document.getElementById("zipcode").value;
	var cuisine = document.getElementById("cuisine").value;
	var name = document.getElementById("name").value;	
	var userDidInputData = validateMandatoryUserData(zip, cuisine, name);
	if(userDidInputData) {
		
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				var dataExistZip = validateZip(xhttp, zip);
				var dataExistName = validateName(xhttp, name);
				if(dataExistZip && dataExistName) {
					window.location = "display.html?zipcode="+zip+"&cuisine="+cuisine+"&name="+name;
					document.myform.method = "GET";
				}
			}
		}
		xhttp.open("GET", "restaurants.xml", true);
		xhttp.send();
	} else {
		alert("Enter atleast one field.");
		//show error
	}
		
}

function validateMandatoryUserData(zip, cuisine, name) {
	if(cuisine!='' || zip!='' || name!='') {
		return true;
	}
	return false;
	
}
function validateZip(xml, zip) {
	if(zip != '') {
		var xmlDoc = xml.responseXML;
		var restaurant = xmlDoc.getElementsByTagName("restaurant");
		for (var i = 0; i < restaurant.length; i++) {
			if (restaurant[i].getElementsByTagName("Zip")[0].childNodes[0].nodeValue == zip) {
				return true;
			}
		}
		var ziplabelObject = document.getElementById("ziplabel");
		ziplabelObject.style.display="block";		
		return false;
	} 
	return true;
}

function validateName(xml,name) {
	if(name != '') {
		var xmlDoc = xml.responseXML;
		var restaurant = xmlDoc.getElementsByTagName("restaurant");
		for (var i=0; i<restaurant.length; i++)
		{
			if (restaurant[i].getElementsByTagName("Name")[0].childNodes[0].nodeValue.toUpperCase() == name.toUpperCase())
			{
				return true;
			}
			
		}
		var namelabelObject = document.getElementById("namelabel");
		namelabelObject.style.display="block";
		return false;
	}
	return true;
}



