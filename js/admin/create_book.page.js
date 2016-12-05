

$(document).ready(function(){
    var $createbook = $("#createbook");

});

function submitbookform() {
    $.ajax({
        type: "POST",
        dataType: "json",
        xhrFields: {withCredentials: true},
        url: "https://localhost:8000/createbook",
        data: JSON.stringify({
            "isbn" : parseInt($("#isbn").val()),
            "title": $("#title").val(),
            "edition": $("#edition").val(),
            "author": $("#author").val()


        }),
        success: function (data) {
            alert("Din bog er blevet oprettet.\n");
            document.location.href = "index_admin.html"


        },
        error: function (data) {
            alert("Der er desværre sket en fejl. Prøv igen.\n" + JSON.stringify(data));
        }

      });
    }
