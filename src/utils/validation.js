

export const checkPasswordValidation = (password) => {
    if (password.length<8 &&  password.length>20) return "Your password must contain between 8 and 20 characters.";

    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);
    
    if (!hasLowerCase || !hasUpperCase || !hasNumber || !hasSpecialChar) {
        let message = "Your password must contain";

        if (!hasLowerCase) {
            message += " Lowercase letter,";
        }
        if (!hasUpperCase) {
            message += " Uppercase letter,";
        }
        if (!hasNumber) {
            message += " Number,";
        }
        if (!hasSpecialChar) {
            message += " Special Character,";
        }    

        // Remove the last comma and return the message
        message = message.replace(/,$/, "");
        return message;
    } else {
        return null;
    }
}

export const checkEmailValidation = (email) => {
    const emailRegex = /^[a-z](?!.*?[^\na-z0-9._%+-]$)[a-z0-9._%+-]{3,}@[a-z0-9.-]+\.[a-z]{2,}$/.test(email);
    // console.log("email"+emailRegex);
    if(emailRegex===false) return "Invalid Email Address"
    return null;
}

export const checkFullNameValidation = (fullName) => {
    if (!fullName.trim().includes(' ')) return "Full Name must contain both first and last names";
    if (fullName.length > 50) return "Full Name exceeds maximum length";
    return null;
}