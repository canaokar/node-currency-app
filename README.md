# Node Currency Converter App

This project is a simple currency converter application built using Node.js and Express. The application allows users to convert amounts between different currencies using the ExchangeRate-API. Complete the project by filling in the necessary code as indicated by the TODO comments.

## Project Structure

currency-converter/
├── public/
│ ├── index.html
│ └── style.css
├── .env
├── app.js
├── package.json
└── README.md

### Files Overview

- **`app.js`**: The main server file where you'll implement the backend logic.
- **`public/index.html`**: The frontend file where you'll create the interface for the currency converter.
- **`public/style.css`**: Basic CSS file to style the frontend.
- **`.env`**: File to store environment variables such as the API key.
- **`package.json`**: Contains metadata about the project and dependencies.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) (v6.x or higher)

## Setup Instructions

1. **Clone the Repository**

   First, clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   cd currency-converter

2. **Install Dependencies**

Navigate to the project directory and install the required dependencies:

```bash
npm install
Set Up Environment Variable
Create a .env file in the root directory of the project. This file will store your API key for the ExchangeRate-API.

bash
Copy code
touch .env
Open the .env file in a text editor and add the following line, replacing your_exchange_rate_api_key with your actual API key:

plaintext
Copy code
API_KEY=your_exchange_rate_api_key
You can obtain an API key by signing up on the ExchangeRate-API website.

Run the Server

Start the Node.js server:

bash
Copy code
npm start
The server should now be running on http://localhost:3000.

Open the Application

Open your web browser and navigate to http://localhost:3000 to access the currency converter interface.
