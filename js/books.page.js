

$(document).ready(function(){
    var $booksISBN = $("#booksISBN");

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
        type: "GET",
        dataType: "json",
        xhrFields: { withCredentials: true },
        url: "https://localhost:8000/getbooks",

        success: function( data ) {
          data.forEach(function(data){
            $booksISBN.append(
                "<tr>" +
                "<td>" + data.isbn +"</td>" +
                "<td>" + data.title + "</td>" +
                "<td>" + data.edition +"</td>" +
                "<td>" + data.author + "</td>" +
                "</tr>"
            );
          })
        },
        error: function( data ) { alert(JSON.stringify(data)); }
    });
});
