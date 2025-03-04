const display = document.getElementById("inp");
const answer = document.getElementById("res")

function appendToDisplay(input){
    if (display.textContent === '0') {
        display.textContent = input;
    } else {
        display.textContent += input;
    }
}

function clearDisplay(){
    display.textContent=0;
    answer.textContent="";
}

function clearDisplayOne(){
    const currentContent = display.textContent;
    display.textContent = currentContent.slice(0, -1);
}

function calculate(){
    try {
        const expression = display.textContent
            .replace('×', '*')
            .replace('÷', '/');
        const result = eval(expression);
        answer.textContent = result;
    } catch (error) {
        answer.textContent = 'Error';
    }

}