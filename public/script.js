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

/***********************  NEW USER SIGN UP    ********************** */
    $("#new-user").on("click", function () {
        var newUsername = $("#new-username").val();
        var newPassword = $("#new-userpassword").val();
        var confirmPass = $("#new-userpassword2").val();
        event.preventDefault();

        if (newPassword == confirmPass) {
            var NewUser = {
                "username": newUsername,
                "password": newPassword
            };
            
            $.ajax({
                type: "POST",
                url: "http://localhost:3000/users",
                data: NewUser,
                contentType: 'application/x-www-form-urlencoded',
                dataType: "json",
                success: function () {
                    alert(newUsername + " has been successfully added");
                },
                error: function () {
                    alert("There was error saving data");
                    window.location.href = "index.html";
                }
            });
        }
        
        else {
            alert("password do not match");
        }
    });

});


