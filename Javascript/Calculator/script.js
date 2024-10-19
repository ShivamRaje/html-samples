// Get the textarea input where values and results are displayed
const display = document.getElementById('valuesinput');

// Get all the buttons
const buttons = document.querySelectorAll('.buttonclass button, .operation button');

// Variables to store the current input, previous input, and selected operator
let currentInput = '';
let previousInput = '';
let operator = null;

// Function to update the display
function updateDisplay(value) {
    display.value = value;
}

// Function to handle number input
function handleNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

// Function to handle operator input
function handleOperator(op) {
    if (currentInput === '' && previousInput === '') return; // Prevent operator without a number

    if (operator) {
        calculate(); // If operator already exists, calculate before adding a new one
    }

    operator = op;
    previousInput = currentInput;
    currentInput = ''; // Reset current input for the next number
    updateDisplay(previousInput + ' ' + operator); // Display the previous number and operator
}

// Function to handle calculation
function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(curr)) return; // Prevent calculation if inputs are not valid numbers

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operator = null;
    previousInput = '';
    updateDisplay(currentInput); // Show the result
}

// Function to handle equals button
function handleEquals() {
    if (operator === null || currentInput === '') return; // Prevent equals without an operator or current input
    calculate();
}

// Function to clear the display (for 'AC' button)
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = null;
    updateDisplay('');
}

// Add event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', function () {
        const value = this.textContent;

        if (!isNaN(value)) {
            handleNumber(value); // If the button is a number
        } else if (['+', '-', '*', '/'].includes(value)) {
            handleOperator(value); // If the button is an operator
        } else if (value === '=') {
            handleEquals(); // If the button is the equals sign
        } else if (value === 'AC') {
            clearDisplay(); // Clear all inputs when AC button is pressed
        }
    });
});
