export function validateName(name) {
    return rangeChars(name);
}

export function validateEmail(email) {
    return (new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)).test(email);
}

export function validateSubject(subject) {
    return rangeChars(subject);
}

export function validateMessage(message) {
    return rangeChars(message, 5, 5000);
}

function rangeChars(text, min = 2, max = 100) {
    return (text.length >= min && text.length <= max);
}