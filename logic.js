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



    name = $(".data-employee-name").val();
    role = $(".data-employee-role").val();
    startDate = $(".data-employee-start").val();
    monthsWorked = $(".data-employee-months").val();
    rate = $(".data-employee-rate").val();
    total = $(".data-employee-total").val();




    database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        monthsWorked: monthsWorked,
        rate: rate,
        total: total,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

});


// use .on(“child_added”) to retrieve initial employee data from the database
database.ref().on("child_added", function(childSnapshot){

    

    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().role);
    console.log(childSnapshot.val().startDate);
    console.log(childSnapshot.val().monthsWorked);
    console.log(childSnapshot.val().rate);
    console.log(childSnapshot.val().total);
    




}, function(errorObject){

    console.log("Ya dun fucked up: " + errorObject.code);
});

database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot){

    $(".data-employee-name").text(snapshot.val().name);
    $(".data-employee-role").text(snapshot.val().role);
    $(".data-employee-start").text(snapshot.val().startDate);
    $(".data-employee-months").text(snapshot.val().monthsWorked);
    $(".data-employee-rate").text(snapshot.val().rate);
    $(".data-employee-total").text(snapshot.val().total);
});

   // input the information retrieved into the table

// use momentJS method to calculate months worked 

// use momentJS method to calculate months billed

