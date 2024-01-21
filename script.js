// psuedo code to make calcutor--->

// 1) access the buttons as an array 
// 2) accessing indivisual buttons of the array and adding the eventlisteners according to the conditions.
// 3) conditions will be if the text inside button is -->
//         (i)  (=)
//         (ii)  (AC)
//         (iii) keyboard_backspace
//         (iv) other 





// Accessing elements and declaring variables
const btns = document.querySelectorAll('button');
const textBar = document.querySelector("input");
let string = '';


//adding functionalities on buttons
btns.forEach((button) => {
    button.addEventListener('click', () => {

        if (button.innerText === '=') {
            string = eval(string);
        }
        else if (button.innerText === 'AC') {
            string = '';
        }
        else if (button.innerText === 'keyboard_backspace') {
            string = string.slice(0, string.length - 1)
        }
        else if (button.innerText === button.innerText) {
            string += button.innerText;
        }
        textBar.value = string;
    })
});
