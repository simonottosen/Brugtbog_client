

$(document).ready(function(){
    var $createuser = $("#createuser");


});
function submituserform(){
  $.ajax({
      type: "POST",
      dataType: "json",
      xhrFields: { withCredentials: true },
      url: "https://localhost:8000/createuser",
      data: JSON.stringify({
        "username" : $("#username").val(),
        "password" : $("#password").val(),
        "phonenumber" : parseInt($("#phonenumber").val()),
        "address" : $("#address").val(),
        "email" : $("#email").val(),
        "cash"  : parseInt($("#cash").is(':checked') ? 1 : 0),
        "mobilepay" : parseInt($("#mobilepay").is(':checked') ? 1 : 0),
        "transfer" : parseInt($("#transfer").is(':checked') ? 1 : 0)

  }),
  success: function( data ) {
    alert("Din bruger er blevet oprettet. Du bliver nu sendt til forsiden.");
    document.location.href = "index.html"


   },
  error: function( data ) { alert("Prøv venligst igen med et andet brugernavn."); }
  });
}
