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
        // checks if the last string is a mathematical operator
        switch (lastValue) {
            case 'x':
            case '-':
            case '+':
            case '/':
            case '%':
                // check if the last string is equal to the button clicked
                if (lastValue === value) {
                    return;
                }

                // checks if the clicked value is a mathematical operator
                switch (value) {
                    case 'AC':
                        input.value = '';
                        break;
                    case 'x':
                    case '-':
                    case '+':
                    case '/':
                    case '%':
                        // if it is a mathematical operator, replace the last string with that value
                        input.value = input.value.slice(0, -1) + value;
                        break;
                }
                break;
            default:
                // if the last string is not a mathematical operator, add the button clicked
                switch (value) {
                    case 'AC':
                        input.value = '';
                        break;
                    case 'x':
                    case '-':
                    case '+':
                    case '/':
                    case '%':
                        input.value += value;
                        break;
                }
        }


    }

    if (tipe === 'value') {

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

    return;
}

