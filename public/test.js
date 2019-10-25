$(document).ready(function () {
    $("#btn").on("click", function () {
        event.preventDefault();
      
        var Obj = {
            
            'username': username,
            "password": password,
            "list": [
                {                   
                    "imgUrl": "img/apartment/7.jpeg",
                    "description": "Block of 3 Bedrooms Apartment",
                    "location": "KM 12, Muhammad Buhari Express Way, Lagos",
                    "price": "₦4,000,000/annum/apartment",
                    "Agent": "seriki@adronhomes.com",
                    "status": "Available",
                    "Phone": "06061234567"
                }
            ]

        }
    
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/users/1",
            data: Obj,
            ContentType: "application/json",
            success: function () {
                console.log("success");
            }
        });
    });
    
});