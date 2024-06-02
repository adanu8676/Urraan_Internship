function convertHoursToSeconds() {
    const hoursInput = document.getElementById('hoursInput').value;
    const resultElement = document.getElementById('result');

    if (hoursInput === '' || hoursInput < 0) {
        resultElement.textContent = 'Please enter a valid number of hours.';
        return;
    }

    const hours = parseFloat(hoursInput);
    const secondsInHour = 3600; 
    const seconds = hours * secondsInHour;

    resultElement.textContent = `${hours} hours is equal to ${seconds} seconds.`;
}
