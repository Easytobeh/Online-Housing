$(document).ready(function () {
    /*********************Display house list**********************************/
    //var userList = JSON.parse(sessionStorage.getItem('list'));
    var currentUser = sessionStorage.getItem('currentUser');
    var index = sessionStorage.getItem('index');
    //console.log(index, currentUser);
    $("#msg").text("House Listings by " + currentUser);
   
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/users",
        dataType: 'json',

        success: function (e) {
            // $("#results").append(html);
            let data = (e[index].list);
            console.log(data);

            data.forEach(e => {

                let col = $('<div></div>').addClass("col-sm");
                let img = $('<img />').attr({ 'src': e.imgUrl, 'width': "250px", 'height': "250px" });
                let card = $('<div></div>').addClass("card admincard-size");
                let id = $('<p></p>').addClass("card-text").text("ID: #" + e.id);
                let statusCard = $('<p></p>').addClass("card-text").text("Status: " + e.status);
                let priceCard = $('<p></p>').addClass("card-text").text("Price: " + e.price);
                let phoneCard = $('<p></p>').addClass("card-text").text("Phone: " + e.Phone);
                let cardBody = $('<div></div>').addClass("card-body");
                let descriptionCard = $('<h5></h5>').addClass("card-title").text(e.description);
                let delButton = $('<button ></button>').attr({ 'id': e.id }).addClass("btn btn-danger edit-del delBtn ").text("Delete")
                let editButton = $('<button></button>').attr({ 'id': e.id }).addClass("btn btn-primary edit-del editBtn ").text("Edit");

                cardBody.append(descriptionCard, phoneCard, statusCard, id)
                card.append(priceCard, cardBody)
                col.append(img, card, delButton, editButton)

                $('.target').append(col)

            })
            $(document).on('click', '.delBtn', function () {
                let itemId = $(this).attr('id');
                let confirmDel = confirm("Are you sure you want to delete this item #" + itemId);
                if (confirmDel == true) {
                    $.ajax({
                        type: 'DELETE',
                        url: 'http://localhost:3000/users/' + itemId,
                        dataType: 'json',
                        encode: true
                    })
                        .done(function (data) {
                            alert("Entry deleted successfully")
                            window.location.reload();
                        });
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
});