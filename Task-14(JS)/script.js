function calculateBMI() {
    const weight = parseFloat(document.getElementById('weightInput').value);
    const height = parseFloat(document.getElementById('heightInput').value);
    const resultElement = document.getElementById('result');

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultElement.textContent = 'Please enter valid weight and height.';
        return;
    }

    
    const heightInMeters = height / 100;

    
    const bmi = weight / (heightInMeters * heightInMeters);

   
    resultElement.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
}
