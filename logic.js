// Firebase

// variable to reference firebase

// variables to target HTML elements
var name = "";
var role = "";
var startDate = "";
var monthsWorked = 0;
var rate = 0;
var total = 0;
// create .on(“click”) event to trigger HTML elements
$("#submit-bid").on("click", function(){
    event.preventDefault();
<<<<<<< HEAD



    name = $("#data-employee-name").val().trim();
    role = $("#data-employee-role").val().trim();
    startDate = $("#data-employee-start").val().trim();
    monthsWorked = $("#data-employee-months").val().trim();
    rate = $("#data-employee-rate").val().trim();
    total = $("#data-employee-total").val().trim();




    database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        monthsWorked: monthsWorked,
        rate: rate,
        total: total
    });

=======
       // console.log() .on(“click”) event
    console.log(this);
    // use .push({}) tp push employee data to the database
    
   // console.log() the push method
>>>>>>> 30daedfccb5df9b5f70767a8502f79ea8edd2bad
});


// use .on(“child_added”) to retrieve initial employee data from the database

   // input the information retrieved into the table

// use momentJS method to calculate months worked 

// use momentJS method to calculate months billed

