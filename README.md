# Guvi Contact Form Submission (TypeScript)

This project simulates a contact form submission using TypeScript and MockAPI. The form includes validation and error handling, and the data is sent to a mock REST API endpoint. The project is fully responsive, working on both desktop and mobile devices.

## Features
- Form fields: Name, Email, Contact Number, Subject, and Message.
- Validation for required fields and proper email format.
- Submission via HTTP POST to MockAPI.
- Success and error handling with appropriate feedback messages.
- Fully responsive for both desktop and mobile devices.

## Deployed Link
You can view the live project here: (https://guvi-contact-form.netlify.app/)  <!-- Replace # with the actual URL -->

### Success Message (Desktop Version)
![Desktop Success](./assets/desktop-success.png)

### Success Message (Mobile Version)
![Mobile Success](./assets/mobile-success.png)

### MockAPI Results
Here’s the data submitted to the MockAPI:

![MockAPI Results](./assets/mockapi-results.png)

## How It Works
1. Fill out the form fields (Name, Email, Contact Number, Subject, and Message).
2. Upon clicking the **Send** button, the form data is validated.
3. If the validation passes, the form data is sent to the MockAPI endpoint using the HTTP POST method.
4. A success message ("Form Submitted Successfully") is displayed upon successful submission.
5. If the API call fails, an error message ("Submission Failed") is shown.

## Technologies Used
- TypeScript
- HTML, CSS (for styling and responsiveness)
- MockAPI (for simulating backend API calls)
- Responsive Design (Mobile and Desktop)

## How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/guvi-contact-form-ts.git
