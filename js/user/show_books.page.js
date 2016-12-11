

$(document).ready(function(){
    var $booksISBN = $("#booksISBN");



    $.ajax({
        type: "GET",
        dataType: "json",
        xhrFields: { withCredentials: true },
        url: "https://localhost:8000/getbooks",

        success: function( books ) {
          books.forEach(function(books){
            $booksISBN.append(
                "<tr>" +
                "<td>" + books.isbn +"</td>" +
                "<td>" + books.title + "</td>" +
                "<td>" + books.edition +"</td>" +
                "<td>" + books.author + "</td>" +
                "</tr>"
            );
          })
        },
        error: function( books ) { alert(JSON.stringify(data)); }
    });
});
