

$(document).ready(function(){
    var $createad = $("#createad");
/*
    $.ajax({
        type: "POST",
        dataType: "json",
        xhrFields: { withCredentials: true },
        url: "https://localhost:8000/login",
        data: JSON.stringify({
            "username" : "test",
            "password" : "1234"
        }),

        success: function( data ) {//alert(JSON.stringify(data));
         },
        error: function( data ) { alert(JSON.stringify(data)); }
    });

*/
function submitadform(){
    $.ajax({
        type: "POST",
        dataType: "json",
        xhrFields: { withCredentials: true },
        url: "https://localhost:8000/createad",
        data: JSON.stringify({
          "userid" : 1,
          "isbn" : $("#isbn").val(),
          "rating" : $("#rating").val(),
          "comment" : $("#comment").val(),
          "price" : $("#price").val()


    }),
    success: function( data ) {
      alert("Din annonce er blevet oprettet.\n" + JSON.stringify(data));
      document.location.href = "index_user.html"


     },
    error: function( data ) { alert("Der er desværre sket en fejl. Prøv igen.\n" + JSON.stringify(data)); }

    });
  }});
