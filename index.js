function validation() {
    var user = document.getElementById("user").value
    var Password= document.getElementById("Password").value
    var Confirm_Password = document.getElementById("Confirm_Password").value
    var Mobile_number = document.getElementById("Mobile_number").value
    var Email = document.getElementById("Email").value
    if (user == "") {
        document.getElementById("name").innerHTML = "**Please fill the username field"
        return false
    }
    if (user.length<=3 || user.length>=20) {
        document.getElementById("name").innerHTML = "**user lenght must be between 2 and 20"
        return false
    }
    if (!isNaN(user)) {
        document.getElementById("name").innerHTML = "**only characters are allowed"
        return false
    }
    if (Password == "") {
        document.getElementById("Pass").innerHTML = "**Please fill the Password field"
        return false
    }
    if (Password.length<=9 || Password.length>=20) {
        document.getElementById("Pass").innerHTML = "**Password length must be between 5 and 20"
        return false
    }
    if (Confirm_Password == "") {
        document.getElementById("conf_Pass").innerHTML = "**Please fill the confirm Password"
        return false
    }
    if (Confirm_Password !== Password) {
        document.getElementById("conf_Pass").innerHTML = "**Please fill the Confirm_Password field"
        return false
    }
    if (Mobile_number == "") {
        document.getElementById("Mobile").innerHTML = "**Please fill the Mobile_number field"
        return false
    }
    if (isNaN(Mobile_number)) {
        document.getElementById("Mobile").innerHTML = "**user must write digital only"
        return false
    }
    if (Mobile_number.length!=10) {
        document.getElementById("Mobile").innerHTML = "**Mobile number must have 10 digitale only"
        return false
    }
    if (Email == "") {
        document.getElementById("email").innerHTML = "**Please fill the Email field"
        return false
        
    }
    if (Email.indexOf('@') <=0) {
        document.getElementById("email").innerHTML = "**@ invalide position"
        return false
        
    }
    if ((Email.charAt(Email.length-4)!='.') && (Email.charAt(Email.length-3)!='.')) {
        document.getElementById("email").innerHTML = "**.invalide position"
        return false
        
    }

}
