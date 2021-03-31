let user = prompt("Who is there?", 'user');
if (user == null) {
    alert('Canceled')
} else if (user != 'Admin') {
    alert("I don't know you.")
} else {
    let password = prompt("What is the password?", '1234')
    if (password == 4654) {
        alert("Access granted")
    } else if (password != 4654) {
        alert("Incorrect password")
    } else {
        alert("Canceled")
    }
}
