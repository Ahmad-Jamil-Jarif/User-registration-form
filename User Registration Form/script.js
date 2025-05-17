 const form = document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('registrationForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      let valid = true;

      const fields = [
        { id: 'fullName', errorId: 'fullNameError', validate: val => val.trim() !== '' },
        { id: 'email', errorId: 'emailError', validate: val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) },
        { id: 'password', errorId: 'passwordError', validate: val => val !== '' },
        { id: 'dob', errorId: 'dobError', validate: val => val !== '' },
        { id: 'phone', errorId: 'phoneError', validate: val => /^\d{11}$/.test(val) },
        { id: 'country', errorId: 'countryError', validate: val => val !== '' }
      ];

      fields.forEach(field => {
        const input = document.getElementById(field.id);
        const error = document.getElementById(field.errorId);
        if (!field.validate(input.value)) {
          error.style.display = 'block';
          valid = false;
        } else {
          error.style.display = 'none';
        }
      });

      const password = document.getElementById('password');
      const confirmPassword = document.getElementById('confirmPassword');
      const confirmPasswordError = document.getElementById('confirmPasswordError');
      if (confirmPassword.value !== password.value || confirmPassword.value === '') {
        confirmPasswordError.style.display = 'block';
        valid = false;
      } else {
        confirmPasswordError.style.display = 'none';
      }

      const gender = document.querySelector('input[name="gender"]:checked');
      const genderError = document.getElementById('genderError');
      if (!gender) {
        genderError.style.display = 'block';
        valid = false;
      } else {
        genderError.style.display = 'none';
      }

      const terms = document.getElementById('terms');
      const termsError = document.getElementById('termsError');
      if (!terms.checked) {
        termsError.style.display = 'block';
        valid = false;
      } else {
        termsError.style.display = 'none';
      }

      if (valid) {
        const spinner = document.getElementById('spinner');
        spinner.style.display = 'block';
        setTimeout(() => {
          spinner.style.display = 'none';
          const successMessage = document.getElementById('successMessage');
          successMessage.style.display = 'block';
          form.reset();
        }, 2000);
      }
    });
  } else {
    console.error('Form element not found');
  }
})
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};