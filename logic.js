// Firebase

// variable to reference firebase

// variables to target HTML elements
var name = "";
var role = "";
var startDate = "";
var monthsWorked = 0;
var rate = 0;
var total = 0;
<<<<<<< HEAD
// create .on(“click”) event to trigger HTML elements
$("#submit-bid").on("click", function(){
    event.preventDefault();
       // console.log() .on(“click”) event
    console.log(this);
    // use .push({}) tp push employee data to the database
    database.ref().push({

    })
=======

// create .on(“click”) event to trigger HTML elements
$("#submit-bid").on("click", function () {
    event.preventDefault();








    database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        monthsWorked: monthsWorked,
        rate: rate,
        total: total
    });

});

   // console.log() .on(“click”) event

// use .push({}) tp push employee data to the database

>>>>>>> 9ae77c4295091695ed369c19bed293f2d7aa5c12
   // console.log() the push method
});


// use .on(“child_added”) to retrieve initial employee data from the database

   // input the information retrieved into the table

// use momentJS method to calculate months worked 

// use momentJS method to calculate months billed

