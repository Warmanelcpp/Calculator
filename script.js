const display = document.getElementById("inp");
const answer = document.getElementById("res");
const numberKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operatorKeys = ['/', '+', '*', '-','.','×','÷'];
const clearKeys = ['Backspace', 'Delete', 'Escape'];
const enterKeys = ['Enter', '='];

function appendToDisplay(input){
    if (display.textContent === '0') {
        display.textContent = input;
    } else {
        display.textContent += input;
    }

    if (z!=0){
        display.textContent=input;
        z=0;
        answer.textContent="";
    }
}

function clearDisplay(){
    display.textContent=0;
    answer.textContent="";
}

function clearDisplayOne(){
    const currentContent = display.textContent;
    display.textContent = currentContent.slice(0, -1);
    if (display.textContent===''){
        display.textContent = 0;
        answer.textContent ='';
    }
}

function calculate(){
    z=0;
    try {
        const expression = display.textContent
            .replace('×', '*')
            .replace('÷', '/');
        const result = eval(expression);
        answer.textContent = result;
        z=1;
    } catch (error) {
        answer.textContent = 'Error';
    }

}

document.addEventListener('keydown', function(event) {
    const key=event.key;
    if (numberKeys.includes(key)){
        appendToDisplay(key);
    }

    if (operatorKeys.includes(key)) {
        const displayKey = key === '*' ? '×' : key === '/' ? '÷' : key;
        appendToDisplay(displayKey);
    }

    if (clearKeys.includes(key)){
        if(key==='Delete' || key==='Escape'){
            clearDisplay();
        }
        if (key==='Backspace'){
            clearDisplayOne();
        }
    }

    if (enterKeys.includes(key)){
        calculate();
    }
});