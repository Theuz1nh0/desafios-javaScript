const keyboardInput = document.querySelector('#result')

keyboardInput.addEventListener('keypress', value => {
    const inputLength = keyboardInput.value.length
    const lastValue = keyboardInput.value[inputLength - 1]

    switch (value.key) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            break;
        case '-':
        case '+':
        case '/':
        case '%':
        case '*':
            let keyValue = value.key === '*' ? 'x' : value.key

            if (value.key === '*') {
                calcular('action', 'x')
                value.preventDefault()
            }

            switch (lastValue) {
                case '-':
                case '+':
                case '/':
                case '%':
                case 'x':
                    if (lastValue === keyValue) {
                        value.preventDefault()
                    } else {
                        keyboardInput.value = keyboardInput.value.slice(0, -1);

                        if (value.key === '*') {
                            calcular('action', 'x')
                            value.preventDefault()
                        }
                    }
                    break;
            }
            break;
        default:
            value.preventDefault()
    }
})



function calcular(tipe, value) {
    const input = document.querySelector('#result')
    const inputLength = input.value.length;
    const lastValue = input.value[inputLength - 1]


    if (tipe === 'action') {
        const clear = value === 'AC';
        const operators = value === 'x' || value === '-' || value === '+' || value === '/' || value === '%';
        const lastOperator = lastValue === 'x' || lastValue === '-' || lastValue === '+' || lastValue === '/' || lastValue === '%';
        const sameValue = lastValue === value;
        const calcResult = value === '=';

        switch (true) {
            // checks if the last string is a mathematical operator
            case lastOperator:
                switch (true) {
                    // if same math operator, focus on input and return without change the input value
                    case sameValue:
                        input.focus();
                        break;

                    // clear the input
                    case clear:
                        input.value = '';
                        break;

                    // if it is a mathematical operator, replace the last string with that value
                    case operators:
                        input.value = input.value.slice(0, -1) + value;
                        break;
                }
                break;

            // clear the input
            case clear:
                input.value = '';
                break;

            // add a operator
            case operators:
                input.value += value;
                break;

            // calc the expression result
            case calcResult:
                // make a copy of input value to change some operators
                // stores the values ​​that need to be modified in an array
                // executes the mathExp function and returns its value to the copyInput variable
                let copyInput = input.value;
                const toTransform = ['%', 'x'];
                copyInput = mathExp(copyInput, toTransform);

                // transform the string expression into a JS expression and resolve it
                let result = eval(copyInput);
                result = result % 1 === 0 ? result : result.toFixed(2);

                input.value = result;
                break;
        }

    }

    if (tipe === 'value') {

        // checks if the button pressed is a number and adds the value to the input
        switch (value) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                input.value += value;
                break
        }
    }

    // to keep focus on input
    input.focus();
    return;
}

// change some operators to a validated JS operator
function mathExp(value, arrayOperators) {
    arrayOperators.forEach(e => {
        const re = RegExp(e, 'gi')

        switch (e) {
            case '%':
                value = value.replace(re, `/100*`);
                break;
            case 'x':
                value = value.replace(re, '*');
                break;
        }
    });

    return value;
}
