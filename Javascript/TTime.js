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
    $("#train-submit").on("click", function(event) {
        event.preventDefault();

        name = $("#nameTrain").val().trim();
        destination = $("#whereTo").val().trim();
        frequency = $("#timeFreak").val().trim();
        firstTrainTime = $("#military").val().trim();

        database.ref().push({
            name: nameT,
            destination: destinationT,
            frequency: frequencyT,
            firstTrainTime: firstTrainTimeT,
            dataAdded: firebase.database.ServerValue.TIMESTAMP


        });

    });

    console.log("hello world");
