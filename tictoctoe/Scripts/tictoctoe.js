$(document).ready(function () {
    var userObj = {};
    var dynamicID = Math.floor(Math.random() * 1000 + 1);
    var chat = $.connection.chatHub;

    chat.client.exception = function (msg) {
        alert(msg);
    }

    chat.client.useIndex = function (id, name) {
        $("#"+id).text(name);
        $("#information").append("<li>" + name + " used index of " + id + "</li>");
        $("#turn").text(name);
    }

    $.connection.hub.start().done(function () {
        var selector = ".division"
        $(selector).click(function () {
            var id = $(this).attr("class");
            switch(id){
                case "division":
                    var userID = $("#userID").val();
                    var index = $(this).attr("id");
                    if ($("#turn").text() != userID || $("#turn").text() == "") {
                        if ($(this)[0].innerText == "") {
                            userObj[index] = userID;
                            $("#" + index).text(userID);
                            if (userID != "") {
                                chat.server.send(index, userID);
                            } else {
                                alert("Please Create User Details")
                            }
                            break;
                        } else {
                            alert("Already this index used by " + $(this)[0].innerText);
                        }
                    } else {
                        alert("This is not your turn");
                    }
                    
            }
        });

        $("#btnUserName").click(function () {
            var userID = $("#txtUserID").val();
            if (userID == "") {
                alert("Please Enter User Name");
            } else {
                $("#txtUserID").attr("disabled", "disabled");
                $("#userID").val(userID);
            }
        })
    });
})