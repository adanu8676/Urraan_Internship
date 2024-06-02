document.querySelector('form').addEventListener('submit', function(event) {
    let isValid = true;
    let errorMessage = '';

    // Validate Name
    const nameField = document.querySelector('input[placeholder="Name"]');
    const name = nameField.value.trim();
    if (name === '' || !/^[A-Z]/.test(name)) {
        isValid = false;
        errorMessage += 'Name is required and must start with a capital letter.\n';
    }

    // Validate Email
    const emailField = document.querySelector('input[placeholder="Email Address"]');
    const email = emailField.value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        errorMessage += 'Please enter a valid email address.\n';
    }

    // Validate Organization
    const organizationField = document.querySelector('input[placeholder="Organization"]');
    const organization = organizationField.value.trim();
    if (organization === '' || !/^[A-Z]/.test(organization)) {
        isValid = false;
        errorMessage += 'Organization is required and must start with a capital letter.\n';
    }

    // Validate Text Areas for each checked checkbox
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            const textarea = document.querySelectorAll('textarea')[index];
            const details = textarea.value.trim();
            if (details === '' || !/^[A-Z]/.test(details)) {
                isValid = false;
                errorMessage += `Description & Results for ${checkbox.nextElementSibling.innerText} is required and must start with a capital letter.\n`;
            } else if (details.length > 150) {
                isValid = false;
                errorMessage += `Description & Results for ${checkbox.nextElementSibling.innerText} exceeds 150 words.\n`;
            }
        }
    });

    // If the form is not valid, prevent submission and show an alert
    if (!isValid) {
        event.preventDefault();
        alert(errorMessage);
    }
});
