

$(document).ready(function(){
    var $booksISBN = $("#booksISBN");


$.ajax({
    url: "https://momentify.eu.ngrok.io/api/books",
    method: "GET",
    headers: {
        filter: JSON.stringify({"include":"authors"})
    },
    dataTypes: "json",
    contentType: "application/json",
    success: function(books, status, xhr){

        function printAuthors(authors) {
            return authors.map(function (author){
                return author.firstName +" "+ author.lastName;
                }).join(", ");
        }

        books.forEach(function(book){
            $booksISBN.append(
                "<tr>" +
                "<td>"+ book.price +"</td>" +
                "<td>" + book.title + "</td>" +
                "<td>" + book.subtitle +"</td>" +
                "<td>" + printAuthors(book.authors) + "</td>" +
                "</tr>"
            );
        });




    },
    error: function (xhr, status, error){
        console.log(xhr,status, error)
    },

    });




})

