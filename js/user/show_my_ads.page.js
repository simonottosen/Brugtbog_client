

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

if (ads.locked == 1) {
    $adsreservation.append(
        "<tr>" +
        "<td>" + ads.adId + "</td>" +
        "<td>" + ads.isbn + "</td>" +
        "<td>" + ads.rating + "/5" + "</td>" +
        "<td>" + ads.price + "</td>" +
        "<td>" + locked + "</td>" +
        "<td><a class='btn mini blue-stripe unlockBtn' onclick='unlock(" + ads.adId + ")' href='#'>Lås op</a></td>" +
        "<td><a class='btn mini blue-stripe' onclick='removead(" + ads.adId + ")' href='#'>Slet</a></td>" +
        "</tr>"
    );

}
else{
    $adsreservation.append(
        "<tr>" +
        "<td>" + ads.adId + "</td>" +
        "<td>" + ads.isbn + "</td>" +
        "<td>" + ads.rating + "/5" + "</td>" +
        "<td>" + ads.price + "</td>" +
        "<td>" + locked + "</td>" +
        "<td><a></a></td>" +
        "<td><a class='btn mini blue-stripe' onclick='removead(" + ads.adId + ")' href='#'>Slet</a></td>" +
        //"<td><a class='btn mini blue-stripe' href='#' data-toggle='modal' data-target='#changemodal'>Ændre</a></td>" +
//,(" + ads.isbn + "),(" + ads.rating + ")
        "</tr>"
    );

}


          })
        },
        error: function( ads ) {  }
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

      }
