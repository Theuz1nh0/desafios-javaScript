const currNumber = document.getElementById("currNumber")
const buttons = document.querySelectorAll("input")
let num = Number(currNumber.innerHTML)

// function to add events to buttons
function main() {
    currNumber.textContent = getOnCache()
    num = getOnCache();

    // loop through the array and add functions for each button
    buttons.forEach((value) => {
        value.addEventListener("click", () => {
            // get the current target button ID
            let currentTarget = event.currentTarget.getAttribute("id");

            // checks which button was clicked and adds its functions
            switch (currentTarget) {
                case 'btDecrease':
                    num--;
                    break;
                case 'btIncrease':
                    num++;
                    break;
                case 'btReset':
                    num = 0;
                    break;
                default:
                    break;
            }

            currNumber.textContent = num;
            setOnCache(num)
        })
    })
}

// stores the last number in the browser cache
function setOnCache(value) {
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem("lastNumber", value)
    }
}

// get the last number from browser cache
function getOnCache() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.getItem("lastNumber")) {
            return localStorage.getItem("lastNumber")
        }
    }

    return 0;
}

main();