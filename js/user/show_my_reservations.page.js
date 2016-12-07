

$(document).ready(function() {
    var $adsreservation = $("#adsreservation");

    $.ajax({
        type: "GET",
        dataType: "json",
        xhrFields: {withCredentials: true},
        url: "https://localhost:8000/getmyreservations",

        success: function (ads) {
            ads.forEach(function (ads) {

                if (ads.userTransfer == 0) {
                    var transfer = "Nej";
                }
                else {
                    var transfer = "Ja";
                }
                if (ads.userMobilepay == 0) {
                    var mobilepay = "Nej";
                }
                else {
                    var mobilepay = "Ja";
                }
                if (ads.userCash == 0) {
                    var cash = "Nej";
                }
                else {
                    var cash = "Ja";
                }

                $adsreservation.append(
                    "<tr>" +
                    "<td>" + ads.adId + "</td>" +
                    "<td>" + ads.isbn + "</td>" +
                    "<td>" + ads.bookTitle + "</td>" +
                    "<td>" + ads.bookAuthor + "</td>" +
                    "<td>" + ads.bookEdition + "</td>" +
                    "<td>" + ads.rating + "/5" + "</td>" +
                    "<td>" + ads.price + "</td>" +
                    "<td>" + ads.userUsername + "</td>" +
                    "<td>" + transfer + "</td>" +
                    "<td>" + mobilepay + "</td>" +
                    "<td>" + cash + "</td>" +
                    "<td><a class='btn mini blue-stripe' onclick='deletereservation(" + ads.adId + ")' href='#'>Fjern reservation</a></td>" +
                    "</tr>"
                );
            })
        },

        error: function (data) {
            alert(JSON.stringify(data));
        }
    });


    function deletereservation(adId) {
        $.ajax({
            type: "POST",
            dataType: "json",
            xhrFields: {withCredentials: true},
            url: "https://localhost:8000/deletereservation",
            data: JSON.stringify({
                "id": adId,
            }),
            success: function (data) {//alert(JSON.stringify(data));
            },
            error: function (data) {
                alert(JSON.stringify(data));
            }
        });
    }
});
