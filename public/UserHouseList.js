$(document).ready(function () {
    /*********************Display house list**********************************/
    //var userList = JSON.parse(sessionStorage.getItem('list'));
    var currentUser = sessionStorage.getItem('currentUser');
    var userData = [];
    var userHouseList = [];
    var userId = sessionStorage.getItem('id');
  
    $("#msg").text("Signed in as " + currentUser).addClass("modal-title");
   
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/users/" + userId, 
        dataType: 'json',

        success: function (userData) {
            // $("#results").append(html);
            userHouseList = userData.list;
            var index = 0;
            console.log(userData);
            //console.log(userData[List[0][description]]);
            console.log(userData[username])
                                 
            //console.log(userHouseList);
         // console.log(userData.List[0][description]);

            // $.each(userHouseList, function (index, e) {

            //     let col = $('<div></div>').addClass("col-sm");
            //     let img = $('<img />').attr({ 'src': e.imgUrl, 'width': "250px", 'height': "250px" });
            //     let card = $('<div></div>').addClass("card admincard-size");
            //     let itemId = $('<p></p>').addClass("card-text").text("ID: #" + index);
            //     let statusCard = $('<p></p>').addClass("card-text").text("Status: " + e.status);
            //     let priceCard = $('<p></p>').addClass("card-text").text("Price: " + e.price);
            //     let phoneCard = $('<p></p>').addClass("card-text").text("Phone: " + e.Phone);
            //     let cardBody = $('<div></div>').addClass("card-body");
            //     let descriptionCard = $('<h5></h5>').addClass("card-title").text(e.description);
            //     let delButton = $('<button ></button>').attr({ 'id': index }).addClass("btn btn-danger edit-del delBtn ").text("Delete")
            //     let editButton = $('<button></button>').attr({ 'id': index }).addClass("btn btn-primary edit-del editBtn ").text("Edit");

            //     cardBody.append(descriptionCard, phoneCard, statusCard, itemId);
            //     card.append(priceCard, cardBody);
            //     col.append(img, card, delButton, editButton);

            //     $('.target').append(col);
            // });
         
        /*************************NEW HOUSE LIST*****************************/
            
            $("#new-house").on("click", function () {
                var description = $("#description").val();
                var location = $("#location").val();
                var email = $("#email").val();
                var price = $("#price").val();
                var image = $("#image").val();
                event.preventDefault();

               // console.log(currentUser, description, location, email, price, image);
                
                
              
                $.ajax({
                    type: "PUT",
                    url: "http://localhost:3000/users/" + userId,
                    data: NewHouse,
                    contentType: 'application/x-www-form-urlencoded',
                    // dataType: "json",
                    success: function () {
                        console.log("success");
                    }
                });

            });
            



            

/**********************************DELETE AN ENTRY**********************/            
            $(document).on('click', '.delBtn', function () {
                let itemIndex = $(this).attr('itemId');
                let confirmDel = confirm("Are you sure you want to delete this item #" + itemIndex + "created by " + currentUser);
                if (confirmDel == true) {
                    userData.list = userHouseList.splice(itemIndex, 1); //remove the item and re-write into the overall list

                   console.log(userData);
                    $.ajax({
                        type: "PATCH",
                        url:"http://localhost:3000/users",
                        data: userData,
                        contentType: 'application/json',
                        dataType: "json",
                        success: function () {
                            window.location.reload();
                        }
                    });
                  

                    // window.location.reload();
                
                }
            });

            // $(document).on('click', '.editBtn', function () {
            //     let itemId = $(this).attr('id');
            //     let confirmEdit = confirm("Proceed to edit item #" + itemId);
            //     if (confirmEdit == true) {
            //         $.ajax({
            //             type: 'PATCH',
            //             url: 'http://localhost:3000/houseList/' + itemId,
            //             dataType: 'json',
            //             encode: true
            //         })
            //             .done(function (data) {
            //                 alert("Entry deleted successfully")
            //                 window.location.reload();
            //             });
            //     }
            // });
        }
    });
    $("#logout").on("click", function () {
        window.location.href = "index.html";
        sessionStorage.clear();
    });
});