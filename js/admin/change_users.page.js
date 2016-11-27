

$(document).ready(function(){
    var $usercontrol = $("#usercontrol");

    $.ajax({
        type: "POST",
        dataType: "json",
        xhrFields: { withCredentials: true },
        url: "https://localhost:8000/login",
        data: JSON.stringify({
            "username" : "test",
            "password" : "1234"
        }),

        success: function( data ) {//alert(JSON.stringify(data));
         },
        error: function( data ) { alert(JSON.stringify(data)); }
    });


    $.ajax({
        type: "GET",
        dataType: "json",
        xhrFields: { withCredentials: true },
        url: "https://localhost:8000/getusers",

        success: function( users ) {
          users.forEach(function(users){
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

            $usercontrol.append(
                "<tr>" +
                "<td>" + users.userid + "</td>" +
                "<td>" + users.username +"</td>" +
                "<td>" + users.phonenumber + "</td>" +
                "<td>" + users.address +"</td>" +
                "<td>" + users.email + "</td>" +
                "<td>" + transfer + "</td>" +
                "<td>" + mobilepay + "</td>" +
                "<td>" + cash + "</td>" +
                "<td>" + type + "</td>" +
                "<td><a class='btn mini blue-stripe' onclick='change()' href='#'>Ændre</a></td>" +
                "<td><a class='btn mini blue-stripe' onclick='delete()' href='#'>Slet</a></td>" +

                "</tr>"
            );
          })
        },
        error: function( users ) { alert(JSON.stringify(users)); }
    });
});
