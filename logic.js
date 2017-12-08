// Firebase
var config = {
    apiKey: "AIzaSyCSfeQbnHeBIGzR2DTEaNcRM59cb8eErE4",
    authDomain: "codersbay-18996.firebaseapp.com",
    databaseURL: "https://codersbay-18996.firebaseio.com",
    projectId: "codersbay-18996",
    storageBucket: "codersbay-18996.appspot.com",
    messagingSenderId: "282897436340"
  };
  firebase.initializeApp(config);
// variable to reference firebase
var database = firebase.database();
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



    name = $("#data-employee-name").val();
    role = $("#data-employee-role").val();
    startDate = $("#data-employee-start").val();
    monthsWorked = $("#data-employee-months").val();
    rate = $("#data-employee-rate").val();
    total = $("#data-employee-total").val();




    database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        monthsWorked: monthsWorked,
        rate: rate,
        total: total
    });

});


// use .on(“child_added”) to retrieve initial employee data from the database

   // input the information retrieved into the table

// use momentJS method to calculate months worked 

// use momentJS method to calculate months billed

