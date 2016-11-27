

$(document).ready(function(){
    var $getuser = $("#getuser");


    $.ajax({
        type: "GET",
        dataType: "json",
        xhrFields: { withCredentials: true },
        url: "https://localhost:8000/getuser",

        success: function( users ) {
          if (users.transfer == 0){
            var transfer = "Nej";
          }
          else{
            var transfer = "Ja";
          }
          if (users.mobilepay == 0){
            var mobilepay = "Nej";
          }
          else{
            var mobilepay = "Ja";
          }
          if (users.cash == 0){
            var cash = "Nej";
          }
          else{
            var cash = "Ja";
          }
          if (users.type == 0){
            var type = "Bruger";
          }
          else{
            var type = "Admin";
          }

            $getuser.append(
                "<tr>" +
                "<td>" + users.userId +"</td>" +
                "<td>" + users.username +"</td>" +
                "<td>" + users.phonenumber +"</td>" +
                "<td>" + users.address +"</td>" +
                "<td>" + users.email + "</td>" +
                "<td>" + transfer + "</td>" +
                "<td>" + mobilepay + "</td>" +
                "<td>" + cash + "</td>" +
                "<td>" + type + "</td>" +

                "</tr>"
            );
        },
        error: function( users ) { alert(JSON.stringify(data)); }
    });
});
