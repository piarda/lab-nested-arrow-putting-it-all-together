// Outer function will initialize the login feature.
function createLoginTracker(userInfo) {
  let attemptCount = 0;
  // Variable to keep track of the numer of login attempts.

  // Arrow function to hangle the login attempts.
  const attemptLogin = (passwordAttempt) => {
    attemptCount++;

    // Checks to see if the password attempts exceed 3 attempts.
    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }

    // Successful and failed logins depending on if password matches.
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else {
      return `Attempt ${attemptCount}: Login failed`;
    }
  };

  return attemptLogin;
  // Returns the inner function.
}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};