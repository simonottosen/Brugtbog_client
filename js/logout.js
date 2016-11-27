function logout() {

    $.ajax({
        type: "POST",
        dataType: "json",
        xhrFields: { withCredentials: true },
        url: "https://localhost:8000/logout",

        success: function(data) {
            alert(JSON.stringify(data));
        },
        error: function(data) {
            alert(JSON.stringify(data));
        }
    });
}
