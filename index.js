const express = require('express');
const invoice = require('./routes/invoices');
const cors = require('cors'); // Import the 'cors' package

// Middlewares
const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Routes
app.use('/invoices', invoice);

// comments

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
