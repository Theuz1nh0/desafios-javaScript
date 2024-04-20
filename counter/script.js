const currNumber = document.getElementById("currNumber")
const buttons = document.querySelectorAll("input")
let num = Number(currNumber.innerHTML)

buttons.forEach((value, index) => {
    value.addEventListener("click", () => {
        switch (index) {
            case 0:
                num--;
                break;
            case 1:
                num = 0;
                break;
            case 2:
                num++
                break;
            default:
                break;
        }
        currNumber.textContent = num
    })


})