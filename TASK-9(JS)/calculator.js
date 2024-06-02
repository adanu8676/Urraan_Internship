function convertAgeToDays() {
    const ageInput = document.getElementById('ageInput').value;
    const resultElement = document.getElementById('result');

    if (ageInput === '' || ageInput < 0) {
        resultElement.textContent = 'Please enter a valid age.';
        return;
    }

    const age = parseFloat(ageInput);
    const daysInYear = 365;
    const daysLived = age * daysInYear;

    resultElement.textContent = `Your age is ${Math.round(daysLived)} days.`;
}
