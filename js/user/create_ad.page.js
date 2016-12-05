

$(document).ready(function(){
    var $createad = $("#createad");
});
function submitadform(){
    $.ajax({
        type: "POST",
        dataType: "json",
        xhrFields: { withCredentials: true },
        url: "https://localhost:8000/createad",
        data: JSON.stringify({
          "isbn" : parseInt($("#isbn").val()),
          "rating" : parseInt($("#rating").val()),
          "comment" : $("#comment").val(),
          "price" : parseInt($("#price").val())


    }),
    success: function( data ) {
      alert("Din annonce er blevet oprettet.\n");
      document.location.href = "index_user.html"


     },
    error: function( data ) { alert("Der er desværre sket en fejl. Prøv igen.\n" + JSON.stringify(data)); }

    });
  }
