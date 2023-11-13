let currentInput = '';
let currentOutput = 0;
let currentOperator = '+';

function init(){
    currentInput = '';
    currentOutput = 0;
    currentOperator = '+';
}

function appendNumber(number) {
    const formulaInput = document.getElementById("formula");
    if (formulaInput.value == '計算結果如下'){
        const resultInput = document.getElementById("result");
        formulaInput.value = '';
        resultInput.value = '';
        init()
    }
    if (formulaInput.value == '請輸入'){
        formulaInput.value = '';
    }
    formulaInput.value += number;
    currentInput += number;
}

function clearInput(){
    const formulaInput = document.getElementById("formula");
    const resultInput = document.getElementById("result");
    formulaInput.value = '請輸入';
    resultInput.value = '答案';
    init();
}

function appendNumber0(number){
    const formulaInput = document.getElementById("formula");
    if (formulaInput.value == '計算結果如下'){
        const resultInput = document.getElementById("result");
        formulaInput.value = '';
        resultInput.value = '';
        init()
    }
    if (formulaInput.value != '請輸入' & formulaInput.value != ''){
        formulaInput.value += number;
        currentInput += number;
    } 
}

function appendNumberSpot(){
    const formulaInput = document.getElementById("formula");
    if (formulaInput.value == '計算結果如下'){
        const resultInput = document.getElementById("result");
        formulaInput.value = '';
        resultInput.value = '';
        init()
    }
    if (formulaInput.value != '請輸入' & formulaInput.value != '' & !formulaInput.value.includes(".")){
        formulaInput.value += '.';
        currentInput += '.';
    }
}


function calculate(operator){
    const formulaInput = document.getElementById("formula");
    const resultInput = document.getElementById("result");

    if (formulaInput.value != '請輸入'){
        // 算式最後一個不是運算子才做計算
        if (!/[\!\%\+\-\*\/]/.test(formulaInput.value.charAt(formulaInput.value.length - 1))){
            if (currentOperator == '+'){
                currentOutput += +currentInput;
            }
            else if (currentOperator == '-'){
                currentOutput -= +currentInput;
            }
            else if (currentOperator == '*'){
                currentOutput *= +currentInput;
            }
            else if (currentOperator == '/'){
                currentOutput /= +currentInput;
            }
            else if (currentOperator == '%'){
                currentOutput %= +currentInput;
            }
            else if (operator == '!'){
                currentOutput = factorial(currentInput)
            }
        }
        resultInput.value = currentOutput;
        currentInput = '';
        currentOperator = operator;
        formulaInput.value = currentOutput + operator;        
    }
}

function equal(){
    const formulaInput = document.getElementById("formula");
    if (formulaInput.value != '請輸入'){
        calculate('+');
        formulaInput.value = '計算結果如下';
        currentOperator = '+';
    }
    
}

function minus(){
    const formulaInput = document.getElementById("formula");
    if (!/[\+\-\*\/]/.test(formulaInput.value.charAt(formulaInput.value.length - 1))){
        formulaInput.value = formulaInput.value.slice(0, -1);
        currentInput = currentInput.slice(0,-1);
    }
    

}

function gotoEngineer(){
    window.location.href = 'engineer.html';
}

function factorial(X){
    result = 1;
    while (X >= 1){
        result = result * X;
        X = X - 1;
    }
      
    return result;
}