/*$(document).ready(function(){
    var $logout = $("#logout");*/
function logout(){
    $.ajax({
        type: "POST",
        dataType: "json",
        xhrFields: { withCredentials: true },
        url: "https://localhost:8000/logout",

        success: function(data) {
            alert(JSON.stringify(data));
            document.location.href = "/Brugtbog_client/html/guest/index.html";
        },
        error: function(data) {
            alert(JSON.stringify(data));
        }
    });
};
