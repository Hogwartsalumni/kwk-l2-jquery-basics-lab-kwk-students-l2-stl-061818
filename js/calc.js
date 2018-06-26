// set some variables so we can shortcut them for later use
let num1 = $('#number1').val();  // grabs number 1
let num2 = $('#number2').val();  // grabs number 2
let operator = $('#operation').val();  // grabs the operator

//when the equals is clicked, set new variables and then send to the validate function
$('#equals').on('click', function() {
    num1 = $('#number1').val();
    num2 = $('#number2').val();
    operator = $('#operation').val();
    validate();
});

// validate function lives here
// number need to be numbers
// operation should be + - *
// check for user input, specifically numbers are not empty
// operator is not empty
function validate() {
    if (num1 === '' || num2 === '') {
        $('#result').html('Input BOTH numbers.');
    } else if (isNaN(num1) || isNaN(num2)) {
        $('#result').html('Sorry, one of those is not a valid number.');
    } else if (operator === '') {
        $('#result').html('Sorry, that is not a valid operator!');
    } else if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
        doMath();
    } else {
        $('#result').html("Sorry, one of those is not a valid number");
    }
}

//assuming the validation is true, run the calculator

function doMath() {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    switch (operator) {
        case '+': 
        $('#result').html((num1 + num2).toFixed(2));
        break;
        case '-':
        $('#result').html((num1 - num2).toFixed(2));
        break;
        case '*':
        $('#result').html((num1 * num2).toFixed(2));
        break;
        case '/':
        $('#result').html((num1 / num2).toFixed(2));
        break;
    }
}