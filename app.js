const resultElement = document.getElementById('result');
const inputPlus = document.getElementById('plus');
const inputMinus = document.getElementById('minus');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

inputPlus.onclick = function () {
    resultElement.textContent =  Number(input1.value) + Number(input2.value);
}

inputMinus.onclick = function () {
    resultElement.textContent = Number(input1.value) - Number(input2.value);
}
