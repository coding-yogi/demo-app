require('dotenv').config(); // read .env files
const express = require('express');
const currency = require('./currency.js')

const app = express();
const port = process.env.PORT || 3000;

// Set public folder as root
app.use(express.static('public'));

// Allow front-end access to node_modules folder
app.use('/scripts', express.static(`${__dirname}/node_modules/`));

// Fetch Latest Currency Rates
app.post('/api/currency/:country', async (req, res) => {
    console.log("received call");
    
    try {
      const data = currency(req.params.country);
      res.setHeader('Content-Type', 'application/json');
      res.send(data);
    } catch (error) {
        res.sendStatus(404); 
    }
});


app.listen(port, () => {
  console.log('listening on %d', port);
});
