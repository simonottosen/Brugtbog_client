

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
                "<td>" + users.username +"</td>" +
                "<td>" + users.title + "</td>" +
                "<td>" + users.edition +"</td>" +
                "<td>" + users.author + "</td>" +
                "</tr>"
            );
          })
        },
        error: function( users ) { alert(JSON.stringify(users)); }
    });
});
