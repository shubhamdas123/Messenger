function login() {
    username = document.getElementById("usernameInput").value;
    if (username == "") {
        window.alert("Please enter a username!");
    } else {
        localStorage.setItem("Username", username);
        window.location = "page.html";
        document.getElementById("usernameInput").value = "";
    }
}

function home() {
    window.location = "index.html";
}