function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if (name === "" || email === "" || phone === "") {
        alert("Please fill all required fields");
        return false;
    }

    window.location.href = "thankyou.html";
    return false;
}