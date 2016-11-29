

    function change(){
      $.ajax({
          type: "POST",
          dataType: "json",
          xhrFields: { withCredentials: true },
          url: "https://localhost:8000/updatead",
          data: JSON.stringify({
            "adId": $("#adId").val(),
            "isbn": $("#isbn").val(),
            "bookTitle": $("#bookTitle").val(),
            "bookAuthor": $("#bookAuthor").val()
            "bookEdition": $("#bookEdition").val(),
            "rating": $("#rating").val(),
            "price": $("#price").val(),
            "userUsername": $("#userUsername").val()
            "transfer": $("#transfer").val(),
            "mobilepay": $("#mobilepay").val(),
            "cash": $("#cash").val()

      }),
      success: function( data ) {//alert(JSON.stringify(data));
       },
      error: function( data ) { alert(JSON.stringify(data)); }
      });


}}
