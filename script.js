document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const dobInput = document.getElementById('dob');

    function validateName() {
        const name = nameInput.value.trim();
        const regex = /^[A-Za-z\s]{3,}$/;
        if (regex.test(name)) {
            nameInput.classList.add('border-green-500');
            nameInput.classList.remove('border-red-500');
            document.getElementById('nameError').classList.add('hidden');
            return true;
        } else {
            nameInput.classList.add('border-red-500');
            nameInput.classList.remove('border-green-500');
            document.getElementById('nameError').textContent = 'Invalid name. Please enter at least 3 alphabetic characters.';
            document.getElementById('nameError').classList.remove('hidden');
            return false;
        }
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (regex.test(email)) {
            emailInput.classList.add('border-green-500');
            emailInput.classList.remove('border-red-500');
            document.getElementById('emailError').classList.add('hidden');
            return true;
        } else {
            emailInput.classList.add('border-red-500');
            emailInput.classList.remove('border-green-500');
            document.getElementById('emailError').textContent = 'Please enter a valid email address.';
            document.getElementById('emailError').classList.remove('hidden');
            return false;
        }
    }

    function validatePassword() {
        const password = passwordInput.value.trim();
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (regex.test(password)) {
            passwordInput.classList.add('border-green-500');
            passwordInput.classList.remove('border-red-500');
            document.getElementById('passwordError').classList.add('hidden');
            return true;
        } else {
            passwordInput.classList.add('border-red-500');
            passwordInput.classList.remove('border-green-500');
            document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long and contain both letters and numbers.';
            document.getElementById('passwordError').classList.remove('hidden');
            return false;
        }
    }

    function validateConfirmPassword() {
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        if (password === confirmPassword) {
            confirmPasswordInput.classList.add('border-green-500');
            confirmPasswordInput.classList.remove('border-red-500');
            document.getElementById('confirmPasswordError').classList.add('hidden');
            return true;
        } else {
            confirmPasswordInput.classList.add('border-red-500');
            confirmPasswordInput.classList.remove('border-green-500');
            document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
            document.getElementById('confirmPasswordError').classList.remove('hidden');
            return false;
        }
    }

    function validateDOB() {
        const dob = new Date(dobInput.value);
        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();
        const monthDifference = today.getMonth() - dob.getMonth();
        const dayDifference = today.getDate() - dob.getDate();

        if (
            age > 18 || 
            (age === 18 && (monthDifference > 0 || (monthDifference === 0 && dayDifference >= 0)))
        ) {
            dobInput.classList.add('border-green-500');
            dobInput.classList.remove('border-red-500');
            document.getElementById('dobError').classList.add('hidden');
            return true;
        } else {
            dobInput.classList.add('border-red-500');
            dobInput.classList.remove('border-green-500');
            document.getElementById('dobError').textContent = 'You must be at least 18 years old.';
            document.getElementById('dobError').classList.remove('hidden');
            return false;
        }
    }

    function validateForm() {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        const isDOBValid = validateDOB();

        return isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isDOBValid;
    }

    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
    confirmPasswordInput.addEventListener('input', validateConfirmPassword);
    dobInput.addEventListener('input', validateDOB);

    form.addEventListener('submit', function(event) {
        if (!validateForm()) {
            event.preventDefault(); 
        }
    });
});
