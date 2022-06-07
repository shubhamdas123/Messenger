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

function home() {
    localStorage.removeItem("Username");
    window.location = "index.html";
}

function getName() {
    username = localStorage.getItem("Username");
    document.getElementById("usernameWelcome").innerHTML = "Welcome " + username + "!";
}

function createRoom() {
    if (document.getElementById("roomNameInput").value == "") {
        window.alert("Please enter a room name");
    } else {
        roomName = document.getElementById('roomNameInput').value;
        localStorage.setItem('currentRoom', roomName);
        window.location = "continue.html";
    }
}

function enterRoom() {
    roomName = document.getElementById('roomNameInput').value;
    localStorage.setItem('currentRoom', roomName);
    window.location = "room.html";
}