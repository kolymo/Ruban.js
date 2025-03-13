// Sanitize Input String (Letters and Numbers Only)
export function sanis(inputString) {
    return inputString.replace(/[^a-zA-Z0-9]/g, "");
}

// Sanitize Input Letters Only
export function sanil(inputString) {
    return inputString.replace(/[^a-zA-Z]/g, "");
}

// Sanitize Input Numbers Only
export function sanin(inputString) {
    return inputString.replace(/[^0-9]/g, "");
}

// Extend String prototype with the custom sanitization methods
String.prototype.sanis = function () {
    return this.replace(/[^a-zA-Z0-9]/g, "");
};

String.prototype.sanil = function () {
    return this.replace(/[^a-zA-Z]/g, "");
};

String.prototype.sanin = function () {
    return this.replace(/[^0-9]/g, "");
};
