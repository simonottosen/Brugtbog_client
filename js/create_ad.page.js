

$(document).ready(function(){
    var $createad = $("#createad");

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


    $.ajax({
        type: "POST",
        dataType: "json",
        xhrFields: { withCredentials: true },
        url: "https://localhost:8000/createad",
        data: JSON.stringify({
          "price" : "500",
          "rating" : "5",
          "userid" : "1",
          "isbn" : "9780077164263",
          "deleted" : "0",
          "comment" : "test",
          "locked" : "0"
    }),
    success: function( data ) {//alert(JSON.stringify(data));
     },
    error: function( data ) { alert(JSON.stringify(data)); }
    });
});
