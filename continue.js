const firebaseConfig = {
    apiKey: "AIzaSyBYD5WH999_UxiTLbpc5JAVSL8Z3fruupc",
    authDomain: "messenger-de6a8.firebaseapp.com",
    databaseURL: "https://messenger-de6a8-default-rtdb.firebaseio.com",
    projectId: "messenger-de6a8",
    storageBucket: "messenger-de6a8.appspot.com",
    messagingSenderId: "879230617247",
    appId: "1:879230617247:web:e8a794ac52e56bccc544aa"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function check() {
    roomName = localStorage.getItem("currentRoom")
    firebase.database().ref("/").on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            existingRoom = childKey;
            if (existingRoom == roomName) {
                document.getElementById("statement").innerHTML = "This room already exists!";
            }
        })
    })
}

check();

dbRef = firebase.database().ref("/");

function yes() {
    roomName = localStorage.getItem("currentRoom");
    dbRef.child(roomName).update({
        purpose: "addingRoom"
    })
    window.location = "room.html";
    document.getElementById("statement").innerHTML = ""
}

function no() {
    window.location = "page.html";
}