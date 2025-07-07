document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const errorMsg = document.getElementById("errorMsg");
    errorMsg.textContent = "";

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const phone = document.getElementById("phone").value;

    // Password Validation
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!passwordRegex.test(password)) {
      errorMsg.textContent =
        "Password must be 6-20 characters with at least one number, one uppercase, and one lowercase letter.";
      return;
    }

    if (password !== confirmPassword) {
      errorMsg.textContent = "Passwords do not match!";
      return;
    }

    // Phone Number Validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      errorMsg.textContent =
        "Phone number must be exactly 10 digits with no spaces or symbols.";
      return;
    }

    // Gender Validation
    if (
      !document.getElementById("male").checked &&
      !document.getElementById("female").checked
    ) {
      errorMsg.textContent = "Please select your gender.";
      return;
    }

    // If all validations pass
    alert("Welcome! Your registration is successful.");
  });
