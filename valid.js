function is_username_valid(username) {
    if (username.length < 5 || username.length > 9) {
        return false;
    } else {
        if (username.match(/(\W|_)/) || username.match(/(\d+)/) || username.match(/([A-Z])/)) {
            return false;
        } else {
            return true;
        }
    }
}

function is_password_valid(password) {
    if (password.length < 8) {
        return false;
    } else {
        if (password.match(/(\W|_)/) && password.match(/(\d+)/) && password.match(/([A-Z])/)) {
            return true;
        } else {
            return false;
        }
    }
}

console.log("Is The Username Valid? " + is_username_valid("asdasd")); // true
// console.log("Is The Username Valid? " + is_username_valid("asdasdasdasd"));
console.log("Is The Password Valid? " + is_password_valid("Makanbang2000_")); // true
// console.log("Is The Password Valid? " + is_password_valid("makanbang")); // false
