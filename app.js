// Import Packages
/**
 * const <OBJECT_NAME> = require('<PACKAGE_NAME');
 */

const app = express();
const port = process.env.PORT || 3000;

// Additional Task 1 - Serve static files from the "public" directory


// TODO 1: Create a route to handle GET requests for currency conversion
// This route should accept `from` and `to` query parameters and return the conversion rate.


// TODO 1 Ends

app.get('/api/convert', async (req, res) => {
    // Extract 'from' and 'to' currency codes from the query parameters
    

    // TODO 2: Validate that both `from` and `to` parameters are provided.
    // If not, respond with a 400 status and an error message.


    // TODO 2 Ends
    try {
        // TODO 3: Make an API request to ExchangeRate-API to get the conversion rate
        const apiKey = process.env.API_KEY;
        const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}`;

        const response = await axios.get(url);
        const conversionRate = response.data.conversion_rate;

        // TODO 4: Respond with the conversion rate in JSON format
        res.json({ from, to, conversionRate });
    } catch (error) {
        // TODO 5: Handle any errors that occur during the API request
        res.status(500).json({ error: 'Error fetching conversion rate, please try again.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
