

$(document).ready(function(){
    var $adsreservation = $("#adsreservation");


    $.ajax({
        type: "GET",
        dataType: "json",
        xhrFields: { withCredentials: true },
        url: "https://localhost:8000/getads",

        success: function( ads ) {
          ads.forEach(function(ads){

            $adsreservation.append(
                "<tr>" +
                "<td>" + ads.adId +"</td>" +
                "<td>" + ads.isbn + "</td>" +
                "<td>" + ads.bookTitle + "</td>" +
                "<td>" + ads.bookAuthor +"</td>" +
                "<td>" + ads.bookEdition + "</td>" +
                "<td>" + ads.rating + "/5" + "</td>" +
                "<td>" + ads.price + "</td>" +
                "<td>" + ads.userUsername + "</td>" +



                "<td><a class='btn mini blue-stripe' onclick='lock(" + ads.adId + ")' href='#'>Reserver</a></td>" +
                "</tr>"
            );
          })
        },
        error: function( ads ) { alert(JSON.stringify(data)); }
    });
});

function lock(adId){
  $.ajax({
      type: "POST",
      dataType: "json",
      xhrFields: { withCredentials: true },
      url: "https://localhost:8000/reservead",
      data: JSON.stringify({
        "id" : adId
  }),
  success: function( data ) {window.location.reload(false);
   },
  error: function( data ) { window.location.reload(false);  }
  });
}
