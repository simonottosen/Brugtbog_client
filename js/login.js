function login() {
    var username = $("#username").val();
    var password = $("#password").val();

    $.ajax({
        type: "POST",
        dataType: "json",
        xhrFields: { withCredentials: true },
        url: "https://localhost:8000/login",
        data: JSON.stringify({
            "username" : username,
            "password" : password
        }),
        success: function(data) {
            alert(JSON.stringify(data));

            if(data.type == 0){document.location.href = "/Brugtbog_client/html/user/index_user.html"}
            if(data.type == 1){document.location.href = "/Brugtbog_client/html/admin/index_admin.html"}

        },
        error: function(data) {
            alert(JSON.stringify(data));
        }
    });
}
