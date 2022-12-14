
const greet = function (greeting, userName) { return `${greeting} ${userName}!`; }

export const greetInTelugu = function (userName) { return greet("Namaskaram", userName); }
export const greetInHindi = function (userName) { return greet("Namaskar", userName); }
export const greetInTamil = function (userName) { return greet("Vanakkam", userName); }
export const greetInEnglish = function (userName) { return greet("Hello", userName); }
