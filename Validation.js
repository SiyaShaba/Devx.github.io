const showData = () => {
    const data = {
        "fName": document.getElementById('fName').value,
        "cont": document.getElementById('cont').value,
        "email": document.getElementById('em').value,
        "message": document.getElementById('msg').value
    }
    if (data.fName.includes(' ')) {
        console.log(data)
    } else {
        alert('Enter your name and surname please.')
    }
    const contNum = parseInt(data.cont)
    if (typeof contNum === 'number') {
        console.log(true)
    } else {
        alert('Please input your contact number in the form of a string.')
    }
    if (ValidateEmailAddress(data.email)) {
        console.log(true)
    } else {
        alert('Please enter your email address')
    }
}

function ValidateEmailAddress(emailString) {
    // check for @ sign
    var atSymbol = emailString.indexOf("@");
    if (atSymbol < 1) return false;

    var dot = emailString.indexOf(".");
    if (dot <= atSymbol + 2) return false;

    // check that the dot is not at the end
    if (dot === emailString.length - 1) return false;

    return true;
}