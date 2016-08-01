// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Login
function  checkPassword(type,username,password){

	if(type==0){
		alert("Please select User Type")
		return 0;
	}

   	//for parent login
    if(type==1){
    	         var uPattern=/^[A-Z]+$/;
		    	 if(uPattern.test(username)==false){alert("Invalid ID number.\n Please enter a valid family name\n\n Must be all capital letters")}
                 var pPattern=/[a-z]+(@gmail.com|@yahoo.com)/;
                 if(pPattern.test(password)==false){alert("Invalid Password\nPlease enter a valid e-mail address.")}	
                 	else alert("Succes!")
               }

    //for teacher login
    else if(type==2){
                 var uPattern=/^\d\d\d-\d\d-\d\d\d\D/;
                 if(uPattern.test(username)==false){alert("Invalid ID number.\nPlease enter your ID number using this format is NNN-NN-NNNL")}
                 var pPattern=/^[a|A-z|Z]+$/;   
                 if(pPattern.test(password)==false){alert("Invalid Password.\nAll letters, atleast 5 characters")}
                 	else alert("Succes!")
               }

    //for student login           
  	else if(type==3){
                var uPattern=/^[\d\d\d\d]+[-]+(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|NOV|DEC)+[-]+[0-3]+[0-9]+[-]+[\d\d]+$/;
                if(uPattern.test(username)==false){alert("Invalid ID number.\n Please enter your ID number using the YYYY-MMM-DD-NN")}

                if((password.length>=5)&&(password.length<=8)){
               	 if(password.search(/[0-9]/)<0){alert("Your password must have atleast one digit!")}
                 if(password.search(/[a|A-z|Z]/)<0){alert("Your password must have atleast one letter!")}
               }
               else{alert("Invalid password.\n Password must be 5-8 characters in length combination of letters and digits .")}
               }
  			   }

//Styles
function myStyle1()
			{
				myStyle1 = document.getElementById('style');
				style.href = "css/2014-024676_SERRANO_RODYARDVAN_stylel_1_project4.css";
			}
function myStyle2()
			{
				myStyle2 = document.getElementById('style');
				style.href = "css/2014-024676_SERRANO_RODYARDVAN_stylel_2_project4.css";
			}
function myStyle3()
			{
				myStyle3 = document.getElementById('style');
				style.href = "css/2014-024676_SERRANO_RODYARDVAN_stylel_3_project4.css";
			}