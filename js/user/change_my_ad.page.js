

    function change(){
      $.ajax({
          type: "POST",
          dataType: "json",
          xhrFields: { withCredentials: true },
          url: "https://localhost:8000/updatead",
          data: JSON.stringify({
            "adId": $("#adId").val(),
            "isbn" : parseInt($("#isbn").val()),
            "rating" : parseInt($("#rating").val()),
            "comment" : $("#comment").val(),
            "price" : parseInt($("#price").val())

      }),
      success: function( data ) {alert(JSON.stringify(data));
       },
      error: function( data ) { alert(JSON.stringify(data)); }
      });


}}
