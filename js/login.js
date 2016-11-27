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
        },
        error: function(data) {
            alert(JSON.stringify(data));
        }
    });
}
