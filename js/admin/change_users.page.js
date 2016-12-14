

$(document).ready(function(){
    var $usercontrol = $("#usercontrol");


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
                "<td>" + users.userId +"</td>" +
                "<td>" + users.username +"</td>" +
                "<td>" + users.phonenumber +"</td>" +
                "<td>" + users.address +"</td>" +
                "<td>" + users.email + "</td>" +
                "<td>" + transfer + "</td>" +
                "<td>" + mobilepay + "</td>" +
                "<td>" + cash + "</td>" +
                "<td>" + type + "</td>" +
                "<td><a class='btn mini blue-stripe' id='changeUser'>Ændre</a></td>"+
                "<td><a class='btn mini blue-stripe' onclick='removeuser(" + users.userId + ")' href='#'>Slet</a></td>" +

                "</tr>"
            )});

            $("#changeUser").on("click", function(){
              $('#changemodal').modal()
              $('#userid').val(users.userId)
              $('#username').val(users.username)
              $('#phonenumber').val(users.phonenumber)
              $('#address').val(users.address)
              $('#email').val(users.email)
              $('#transfer').val(users.transfer)
              $('#mobilepay').val(users.mobilepay)
              $('#cash').val(users.cash)

            });




        },
        error: function( users ) { alert(JSON.stringify(users)); }
    });
});


function changeuserform(){
  $.ajax({
      type: "POST",
      dataType: "json",
      xhrFields: { withCredentials: true },
      url: "https://localhost:8000/updateuseradmin",
      data: JSON.stringify({
        "id": parseInt($("#userid").val()),
        "username": $("#username").val(),
        "phonenumber" : parseInt($("#phonenumber").val()),
        "address": $("#address").val(),
        "email": $("#email").val(),
        "mobilepay" : parseInt($("#mobilepay").is(':checked') ? 1 : 0),
        "cash"  : parseInt($("#cash").is(':checked') ? 1 : 0),
        "transfer" : parseInt($("#transfer").is(':checked') ? 1 : 0)

  }),
  success: function( data ) {window.location.reload(false);//alert(JSON.stringify(data));
   },
  error: function( data ) { window.location.reload(false);
    alert(JSON.stringify(data)); }
  });
}


         function removeuser(adId) {
              $.ajax({
                  type: "POST",
                  dataType: "json",
                  xhrFields: {withCredentials: true},
                  url: "https://localhost:8000/deleteuseradmin",
                  data: JSON.stringify({
                      "id": adId
                  }),
                  success: function (data) {
                      window.location.reload(false);//alert(JSON.stringify(data));
                  },
                  error: function (data) {
                      window.location.reload(false);
                     // alert(JSON.stringify(data));
                  }
              });
          }
