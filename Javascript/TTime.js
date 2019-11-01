var firebaseConfig = {
    apiKey: "AIzaSyBUvc57y2c4gC8ZpzJQv3Q4PjNcrYRh804",
    authDomain: "test-project-89273.firebaseapp.com",
    databaseURL: "https://test-project-89273.firebaseio.com",
    projectId: "test-project-89273",
    storageBucket: "test-project-89273.appspot.com",
    messagingSenderId: "703956088604",
    appId: "1:703956088604:web:e520d827050971b8d22cd9"
};
console.log("hello world");
firebase.initializeApp(firebaseConfig);

let database = firebase.database();

//variable holders for user input
let name = "";
let destination = "";
let frequency = 0;
let firstTrainTime = "";

//eventHandler
$("#train-submit").on("click", function (event) {
    event.preventDefault();

    name = $("#nameTrain").val().trim();
    destination = $("#whereTo").val().trim();
    frequency = $("#timeFreak").val().trim();
    firstTrainTime = $("#military").val().trim();
    //takes user input and sends to the database lable as the varibles blow
    let newTrainAdd = {
        name: name,
        destination: destination,
        frequency: frequency,
        firstTrainTime: firstTrainTime,
    };
    database.ref().push(newTrainAdd);
    console.log(newTrainAdd.name)
    //will clear text boxes
    $("#nameTrain").val("");
    $("#whereTo").val("");
    $("#timeFreak").val("");
    $("#military").val("");

    //will alert that a new train was added 
    alert("New Train Added");
});
//creates an event when train is added to the database, it will copy the input information and put it in the html specified area.
database.ref().on("child_added", function(theChildInfo) {
    console.log(theChildInfo.val());

    let name = theChildInfo.val().name;
    let destination = theChildInfo.val().destination;
    let frequency = theChildInfo.val().frequency;
    let firstTrainTime = theChildInfo.val().firstTrainTime;

    let firstTimeInput = moment(firstTrainTime, "HH:mm").subtract(1, "years");
    
    let currentTime = moment();
    let diffTime = moment().diff(moment(firstTimeInput), "minutes");
    let remainder = diffTime % frequency;
    let minutesAway = frequency - remainder;
    let nextArrival = moment().add(minutesAway, "minutes");

    let addRow = $("<tr>").append(
        $("<td>").text(name),
        $("<td>").text(destination),
        $("<td>").text(frequency),
        $("<td>").text(nextArrival),
        $("<td>").text(minutesAway),
    );

    addRow.appendTo("#trainMade");
});



