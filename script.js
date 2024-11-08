function validateForm() {
    const form = document.forms["paymentForm"];
    const name = form["name"].value;
    const gender = form["Gender"].value;
    const email = form["email"].value;
    const pincode = form["Pincode"].value;
    const cardType = form["card_type"].value;
    const cardNumber = form["card_number"].value;
    const expDate = form["exp_date"].value;
    const cvv = form["cvv"].value;

    if (!name || !gender || !email || !pincode|| !cardType || !cardNumber || !expDate || !cvv ) {
        alert("Please fill all required fields.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (pincode.length !== 6) {
        alert("Pincode should be 6 digits long.");
        return false;
    }

    if (cardNumber.length < 16) {
        alert("Card number should be at least 16 digits long.");
        return false;
    }

    if (cvv.length !== 3) {
        alert("CVV should be 3 digits long.");
        return false;
    }

    return true;
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}
