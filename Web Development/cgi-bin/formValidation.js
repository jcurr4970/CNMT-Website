// Set current date
function setDate(){
 var d = new Date();
 document.getElementById('date').value=d.toDateString();
}



function validateForm () {
var name = document.getElementById("name").value;

// name validation
if(name.length < 6){
	alert('Name must be at least 6 letters');
	return false;
}
}