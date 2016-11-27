

$(document).ready(function(){
    var $adsreservation = $("#adsshow");


    $.ajax({
        type: "GET",
        dataType: "json",
        xhrFields: { withCredentials: true },
        url: "https://localhost:8000/getads",

        success: function( ads ) {
          ads.forEach(function(ads){

if (ads.userTransfer == 0){
  var transfer = "Nej";
}
else{
  var transfer = "Ja";
}
if (ads.userMobilepay == 0){
  var mobilepay = "Nej";
}
else{
  var mobilepay = "Ja";
}
if (ads.userCash == 0){
  var cash = "Nej";
}
else{
  var cash = "Ja";
}
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
                "<td>" + transfer + "</td>" +
                "<td>" + mobilepay + "</td>" +
                "<td>" + cash + "</td>" +
                "</tr>"
            );
          })
        },
        error: function( ads ) { alert(JSON.stringify(data)); }
    });
});
