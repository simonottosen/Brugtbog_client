

$(document).ready(function(){
    var $booksreservation = $("#booksreservation");

    $.ajax({
        type: "POST",
        dataType: "json",
        xhrFields: { withCredentials: true },
        url: "https://localhost:8000/login",
        data: JSON.stringify({
            "username" : "simon",
            "password" : "ottosen"
        }),

        success: function( data ) {//alert(JSON.stringify(data));
         },
        error: function( data ) { alert(JSON.stringify(data)); }
    });


    $.ajax({
        type: "GET",
        dataType: "json",
        xhrFields: { withCredentials: true },
        url: "https://localhost:8000/getads",

        success: function( books ) {
          books.forEach(function(books){
            $booksreservation.append(
                "<tr>" +
                "<td>" + books.isbn +"</td>" +
                "<td>" + books.title + "</td>" +
                "<td>" + books.edition +"</td>" +
                "<td>" + books.author + "</td>" +
                "<td><a class='btn mini blue-stripe' onclick='addres()' href='#'>Reserver</a></td>" +
                "</tr>"
            );
          })
        },
        error: function( books ) { alert(JSON.stringify(data)); }
    });
});

function addres(data){
  console.log ("hej");
  $.ajax({
      type: "POST",
      dataType: "json",
      xhrFields: { withCredentials: true },
      url: "https://localhost:8000/reservead",
      data: JSON.stringify({

  }),
  success: function( data ) {//alert(JSON.stringify(data));
   },
  error: function( data ) { alert(JSON.stringify(data)); }
  });
}
