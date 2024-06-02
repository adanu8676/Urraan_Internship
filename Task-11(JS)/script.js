function findNextInArray() {
    const arrayInput = document.getElementById('arrayInput').value;
    const targetInput = document.getElementById('targetInputArray').value;
    const resultElement = document.getElementById('resultArray');

    if (arrayInput === '' || targetInput === '') {
        resultElement.textContent = 'Please enter both the array and the target number.';
        return;
    }

    const array = arrayInput.split(',').map(Number);
    const target = parseFloat(targetInput);
    const targetIndex = array.indexOf(target);

    if (targetIndex === -1) {
        resultElement.textContent = `The number ${target} is not in the array.`;
        return;
    }

    if (targetIndex < array.length - 1) {
        const nextNumber = array[targetIndex + 1];
        resultElement.textContent = `The number next to ${target} is ${nextNumber}.`;
    } else {
        resultElement.textContent = `${target} is the last number in the array, so there is no next number.`;
    }
}

function findNextNumber() {
    const singleInput = document.getElementById('singleInput').value;
    const resultElement = document.getElementById('resultSingle');

    if (singleInput === '') {
        resultElement.textContent = 'Please enter a number.';
        return;
    }

    const number = parseFloat(singleInput);
    const nextNumber = number + 1;

    resultElement.textContent = `The next number after ${number} is ${nextNumber}.`;
}
