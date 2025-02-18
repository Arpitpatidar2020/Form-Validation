# Form-Validation

## Overview

This project demonstrates a simple login form with client-side validation using **HTML, CSS, and JavaScript**. The form validates the username and password fields before submission, ensuring that the username meets a minimum length requirement and the password is not empty.

<a href="https://ap-form-validation.netlify.app/" target="_blank">**Visit Now** 🚀</a>

## Technologies Used

- **HTML**: Structure of the form
- **CSS**: Styling and responsive design
- **JavaScript**: Form validation logic

## Features

- Validates username:
  - Must not be empty
  - Must be at least 3 characters long
- Validates password:
  - Must not be empty
- Error messages displayed below the respective input fields
- Responsive design for different screen sizes

## Code Explanation

### HTML (`index.html`)

- Contains a simple form with:
  - `input` fields for username and password
  - Error message placeholders (`<p>` elements with `id="userError"` and `id="passError"`)
  - A submit button that triggers validation before submission

### CSS (`Form.css`)

- Provides a centered form design with a blue background
- Makes the form responsive using media queries
- Styles error messages in red

### JavaScript (`Form.js`)

- `validateForm()` function:
  - Checks if fields are empty
  - Ensures the username has at least 3 characters
  - Displays error messages if validation fails
  - Prevents form submission if validation does not pass

## Demo

To test the form:
- Enter a username shorter than 3 characters → **Displays an error**
- Leave the password empty → **Displays an error**
- Enter valid input → **Form submits successfully**

## License

This project is open-source and free to use.



