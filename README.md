# Selenium Form Testing Project

## Overview
This project demonstrates automated form testing using Selenium WebDriver with Node.js. It tests form submission functionality on Selenium's demo web form page and captures a screenshot of the test execution.

## Prerequisites
- Node.js (v14 or higher)
- Firefox browser
- npm or yarn package manager

## Installation
1. Clone the repository:
```bash
git clone <repository-url>
cd form-test
```

2. Install dependencies:
```bash
npm install selenium-webdriver
```

## Project Structure
```
form-test/
├── formTest.js         # Main test script
├── test-execution.png  # Screenshot of test execution
└── README.md          # Project documentation
```

## Test Details
The test script (`formTest.js`) performs the following operations:
- Launches Firefox browser using Selenium WebDriver
- Navigates to Selenium's demo form page
- Fills out form fields:
  - Text input: "John Doe"
  - Password field: "password123"
  - Textarea: "This is a test message"
- Submits the form
- Verifies success message
- Captures screenshot on successful submission
- Handles errors and cleanup

## Running the Test
Execute the test script using Node.js:
```bash
node formTest.js
```

### Expected Output
- ✅ Success message when form submission is successful
- ❌ Error message if test fails
- 📸 Screenshot saved as "test-execution.png"

## Error Handling
The script includes comprehensive error handling:
- Timeout handling for element detection
- Try-catch block for error management
- Proper driver cleanup in finally block

## Screenshots
Test execution screenshots are saved in the root directory as `test-execution.png`. These provide visual verification of successful form submission.

## Dependencies
- selenium-webdriver: ^4.x.x
- Firefox WebDriver
