$(document).ready(function() {
 $('#signin').click(function(){
   // alert("signup clicked " + $('#username').val() + " " + $('#password').val());
   
    $.ajax({
      type: "POST",
      dataType: "JSON",
      url: "/text.php", //Relative or absolute path to response.php file
       data:{
                amount: "99",
                firstName: "Andres",
                lastName: "Osorio",
                email: "kpcna@hotmail.com"
            },
      success: function(data) 	
      { 
        alert("Form submitted successfully.\nReturned json: " + data["json"]);
      },
  error: function(xhr, errorType, exception) {
     var errorMessage = exception || xhr.statusText; //If exception null, then default to xhr.statusText  
  
     alert( "There was an error creating your contact: " + errorMessage );  
       } 
    });
 });
});
