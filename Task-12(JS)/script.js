function capitalizeName() {
    const nameInput = document.getElementById('nameInput').value.trim();
    const resultElement = document.getElementById('result');

    if (nameInput === '') {
        resultElement.textContent = 'Please enter your name.';
        return;
    }

   
    const nameParts = nameInput.split(' ').map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase());

    
    const capitalizedName = nameParts.join(' ');

    resultElement.textContent = `Your capitalized name is: ${capitalizedName}`;
}
