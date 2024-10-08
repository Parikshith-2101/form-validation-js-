function validate()
{
document.getElementById("name-error").innerText ="";
document.getElementById('inputName').style.borderColor="";
var name = document.getElementById('inputName');
var num = document.getElementById('inputNumber');
var email = document.getElementById('inputEmail');
var pass = document.getElementById('inputPass');
var cpass = document.getElementById('inputCPass');
var error = document.getElementById("error");

    var namePattern =/^\d{10}$/;
     
    if (name=="") 
    {
	document.getElementById("name-error").innerText ="Name should'nt be blank";
	
	document.getElementById('inputName').style.borderColor="red";
    }
}


function noNum(event)
{
    var key=event.charCode;
	
	
	if(key>=48 && key<=57)
	{
		event.preventDefault();
	}
	else
	{
	}
}

