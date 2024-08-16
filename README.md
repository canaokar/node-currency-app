
# Currency Converter Project

This project is a simple currency converter application built using Node.js and Express. The application allows users to convert amounts between different currencies using the ExchangeRate-API. Complete the project by filling in the necessary code as indicated by the TODO comments.

## Project Structure

```
currency-converter/
├── public/
│   ├── index.html
│   └── style.css
├── .env
├── app.js
├── package.json
└── README.md
```

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
   ```

2. **Install Dependencies**

   Navigate to the project directory and install the required dependencies:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory of the project. This file will store your API key for the ExchangeRate-API.

   ```bash
   touch .env
   ```

   Open the `.env` file in a text editor and add the following line, replacing `your_exchange_rate_api_key` with your actual API key:

   ```plaintext
   API_KEY=your_exchange_rate_api_key
   ```

   You can obtain an API key by signing up on the [ExchangeRate-API](https://www.exchangerate-api.com/) website.

4. **Run the Server**

   Start the Node.js server:

   ```bash
   npm start
   ```

   The server should now be running on `http://localhost:3000`.

5. **Open the Application**

   Open your web browser and navigate to `http://localhost:3000` to access the currency converter interface.

## Project Tasks

To complete this project, follow the TODO comments in the code files. Below is an outline of what needs to be done:

### Backend (`app.js`)

1. **TODO 1**: Create a GET route `/api/convert` that accepts `from` and `to` query parameters.
2. **TODO 2**: Validate that the `from` and `to` parameters are provided.
3. **TODO 3**: Make a request to the ExchangeRate-API to fetch the conversion rate between the specified currencies.
4. **TODO 4**: Return the conversion rate in JSON format.
5. **TODO 5**: Handle any potential errors that might occur during the API request.

### Frontend (`public/index.html`)

1. **TODO 6**: Capture user input from the form (currency codes).
2. **TODO 7**: Make a GET request to the `/api/convert` route with the user-provided currency codes.
3. **TODO 8**: Display the conversion rate on the webpage.

## Testing the API with Postman

You can also test the API directly using Postman or any other API testing tool:

1. **Endpoint**: `GET http://localhost:3000/api/convert`
2. **Query Parameters**:
   - `from`: The currency code to convert from (e.g., `USD`).
   - `to`: The currency code to convert to (e.g., `EUR`).

   Example:

   ```
   http://localhost:3000/api/convert?from=USD&to=EUR
   ```

3. **Response**: The API will return a JSON object containing the conversion rate.

   Example:

   ```json
   {
     "from": "USD",
     "to": "EUR",
     "conversionRate": 0.85
   }
   ```

## Submitting Your Project

Once you have completed all the TODOs:

1. Ensure your code is clean and well-commented.
2. Push your changes to your GitHub repository.
3. Submit the repository link as instructed.

## Troubleshooting

If you encounter any issues, consider the following:

- Ensure all required dependencies are installed by running `npm install`.
- Double-check your `.env` file for the correct API key and format.
- Review the console output for any error messages and address them accordingly.

## License

This project is licensed under the GPL License.
