

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
            $usercontrol.append(
                "<tr>" +
                "<td>" + users.userid + "</td>" +
                "<td>" + users.username +"</td>" +
                "<td>" + users.phonenumber + "</td>" +
                "<td>" + users.address +"</td>" +
                "<td>" + users.email + "</td>" +
                "<td>" + users.mobilepay + "</td>" +
                "<td>" + users.cash + "</td>" +
                "<td>" + users.transfer + "</td>" +
                "<td>" + users.type + "</td>" +
                "</tr>"
            );
          })
        },
        error: function( users ) { alert(JSON.stringify(users)); }
    });
});
