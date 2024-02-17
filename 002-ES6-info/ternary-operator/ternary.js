// JS Ternary Operator
// JavaScript'te üçlü operatör, koşullu ifadeler yazmanın kısa ve öz bir yoludur. Genellikle basit if-else ifadeleri için bir kısayol olarak kullanılır. Üçlü operatörün sözdizimi şöyledir:

// condition ? expressionIsTrue : expressionIsFalse

let myAge = 25;
const isProperlyAge = (myAge > 18) ? "Welcome!" : "Good Bye!";

console.log(isProperlyAge);

// Üçlü işleç, bir koşula bağlı olarak iki değer arasında seçim yapmanız gerektiğinde kompakt kod yazmak için kullanışlıdır. Ancak, kodun okunabilirliğini korumak için mantıklı bir şekilde kullanılması önemlidir.

// Bir başka örnek:
function renderApp() {
    return console.log("Welcome, Samet.");
}

function renderLogin() {
    return console.log("Please log in.")
}

let authenticated = true;
authenticated ? renderApp() : renderLogin();