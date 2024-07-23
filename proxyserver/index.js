const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());

app.get('/api/venues', async (req, res) => {
  try {
    const response = await axios.get('https://coinmap.org/api/v1/venues/');
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Proxy server is running on http://localhost:${port}`);
});
