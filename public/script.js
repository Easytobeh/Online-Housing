$(document).ready(function () {

    //*************USERS SIGN IN**********************
   
    $("#login").on("click", function (event) {
        event.preventDefault();

        let listArray = [];
        let user_name = $("#user").val();
        let pass = $("#password").val();
        user_name = user_name.toLowerCase();
        var foundUser = false;


        $.ajax({
            type: "GET",
            url: "http://localhost:3000/users",
            cache: false,
            dataType: 'json',
            success: function (data) {
                console.log("users" + data);
              
                $.each(data, function (i, UserObj) {
                    if (UserObj.username == user_name) //user exists
                    {
                        if (UserObj.password == pass) {
                            //listArray = UserObj.list;
                            sessionStorage.setItem('id', UserObj.id);
                            sessionStorage.setItem('currentUser', user_name);
                            foundUser = true;   
                        }
                        else {
                            alert("Username or password incorrect");
                        }
                    }
                    else { //user doesn't exist
                        return;
                    }
                });

                if (foundUser) {
                   window.location.href = "UserHouseList.html";    
                }
                foundUser = false;
                user_name = "";
                pass = "";
            },
            error: function () {
                alert("Error fetching data");
            }
        });
    });/**********************End user Signin******************************** */

/***********************  SIGN UP    ********************** */
    $("#new-user").on("click", function () {
        alert("You clicked");
    });

});






