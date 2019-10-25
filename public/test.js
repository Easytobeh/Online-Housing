$(document).ready(function () {
    $("#btn").on("click", function () {

      
        var Obj = {
            
            "username": "mark",
            "password": "m123",
            "list": [
                {

                    "imgUrl": "images/apartment/2.jpeg",
                    "description": "1-Room Mini-flat",
                    "location": "66,Pedro Road, Somolu",
                    "price": "₦450,000",
                    "Agent": "rapheal.benitez@adronhomes.com",
                    "status": "Available",
                    "Phone": "08101234567"
                }
            ]

        }
    
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/users",
            data: Obj,
            contentType: 'application/x-www-form-urlencoded',
            dataType: "json",
            success: function () {
                console.log("success");
            }
        });
    });
    
});