$(document).ready(function () {

    //*************USERS SIGN IN**********************
    $("#login").on("click", function () {

        let user_name = $("#user").val();
        let pass = $("#password").val();
        console.log("username: " + user_name);
        user_name = user_name.toLowerCase();

        $.ajax({
            type: "GET",
            url: "http://localhost:3000/users",
            cache: true,
            dataType: 'json',
            success: function (data) {
                $.each(data, function (index, UserObj) {
                    if (UserObj.username == user_name) {
                        if (UserObj.password == pass)

                            console.log(pass);

                    }
                });


            },
            error: function () {
                alert("Error fetching data");
            }
        })
    });


});





