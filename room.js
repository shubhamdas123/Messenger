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

currentRoom = localStorage.getItem("currentRoom");

function getData() {
    firebase.database().ref("/" + currentRoom).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childData != "purpose") {
                messageId = childKey;
                messageData = childData;
                userName = messageData['username'];
                msgName = messageData['message'];
                div = document.createElement("div");
                document.getElementById("output").appendChild(div);
                var lblUsername = document.createElement("h4");
                lblUsername.innerHTML = userName;
                var lblMsg = document.createElement("label");
                lblMsg.innerHTML = msgName;
                var hr = document.createElement("hr");
                if (lblUsername.innerHTML == "undefined" && lblMsg.innerHTML == "undefined") {

                } else {
                    div.appendChild(lblUsername);
                    div.appendChild(lblMsg);
                    div.appendChild(hr);
                }
            }
        });
    });
}

getData();

function home() {
    window.location = "page.html";
    localStorage.removeItem("currentRoom");
}

function getName() {
    username = localStorage.getItem("Username");
}

function sendMsg() {
    userMsg = document.getElementById("messageInput").value;
    dbRef = firebase.database().ref(currentRoom);
    dbRef.push({
        username: username,
        message: userMsg
    })
    document.getElementById("messageInput").value = "";
    getData();
}