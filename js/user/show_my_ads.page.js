

$(document).ready(function(){
    var $adsreservation = $("#adsreservation");


    $.ajax({
        type: "GET",
        dataType: "json",
        xhrFields: { withCredentials: true },
        url: "https://localhost:8000/getmyads",

        success: function( ads ) {
          ads.forEach(function(ads){

            if (ads.locked == 0){
              var locked = "Nej";
            }
            else{
              var locked = "Ja";
}
            $adsreservation.append(
                "<tr>" +
                "<td>" + ads.adId +"</td>" +
                "<td>" + ads.isbn + "</td>" +
                "<td>" + ads.rating + "/5" + "</td>" +
                "<td>" + ads.price + "</td>" +
                "<td>" + locked + "</td>" +

                "<td><a class='btn mini blue-stripe unlockBtn' onclick='unlock(" + ads.adId + ")' href='#'>Lås op</a></td>" +
                "<td><a class='btn mini blue-stripe' onclick='removead(" + ads.adId + ")' href='#'>Slet</a></td>" +
                "<td><a class='btn mini blue-stripe' href='#' data-toggle='modal' data-target='#changemodal'>Ændre</a></td>" +
                "</tr>"
            );



          })
        },
        error: function( ads ) { alert(JSON.stringify(data)); }
    });
});

function unlock(adId){
console.log(adId);
  $.ajax({
      type: "POST",
      dataType: "json",
      xhrFields: { withCredentials: true },
      url: "https://localhost:8000/unlockad",
      data: JSON.stringify({
        "id" : adId
  }),
  success: function( data ) {window.location.reload(false);
    //alert(JSON.stringify(data));
   },
  error: function( data ) {window.location.reload(false);
    // alert(JSON.stringify(data));
  }
  });
}

  function removead(adId) {
      $.ajax({
          type: "POST",
          dataType: "json",
          xhrFields: {withCredentials: true},
          url: "https://localhost:8000/deletead",
          data: JSON.stringify({
              "id": adId
          }),
          success: function (data) {
              window.location.reload(false);
              //alert(JSON.stringify(data));
          },
          error: function (data) {
              window.location.reload(false);
              //alert(JSON.stringify(data));
          }
      });
      function submitadform(adId) {
          $.ajax({
              type: "POST",
              dataType: "json",
              xhrFields: {withCredentials: true},
              url: "https://localhost:8000/updatead",
              data: JSON.stringify({
                  "adid": adId,
                  "isbn": $("#isbn").val(),
                  "bookTitle": $("#bookTitle").val(),
                  "bookAuthor": $("#bookAuthor").val(),
                  "bookEdition": $("#bookEdition").val(),
                  "rating": $("#rating").val(),
                  "price": $("#price").val(),
                  "userUsername": $("#userUsername").val(),
                  "transfer": $("#transfer").val(),
                  "mobilepay": $("#mobilepay").val(),
                  "cash": $("#cash").val()

              }),
              success: function (data) {//alert(JSON.stringify(data));
              },
              error: function (data) {
                  alert(JSON.stringify(data));
              }
          });


      }
  }
