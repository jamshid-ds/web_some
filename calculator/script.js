let currentResult = '';

function appendNumber(number) {
   currentResult += number;
   document.getElementById('result').value = currentResult;
}

function operate(operator) {
   if (currentResult.endsWith('+') || currentResult.endsWith('-') || currentResult.endsWith('*') || currentResult.endsWith('/')) {
      currentResult = currentResult.slice(0, -1);
   }
   currentResult += operator;
   document.getElementById('result').value = currentResult;
}

function calculateResult() {
   if (currentResult.endsWith('+') || currentResult.endsWith('-') || currentResult.endsWith('*') || currentResult.endsWith('/')) {
      currentResult = currentResult.slice(0, -1);
   }
   const result = eval(currentResult);
   document.getElementById('result').value = result;
   currentResult = result;
}

function clearResult() {
   currentResult = '';
   document.getElementById('result').value = currentResult;
}

function backspace() {
   currentResult = currentResult.slice(0, -1);
   document.getElementById('result').value = currentResult;
}