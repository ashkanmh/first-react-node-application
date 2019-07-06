const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
    const response = await axios.get('https://randomuser.me/api/?results=12');
    res.json({data: response.data.results});
})


app.listen(5000, () => {
    console.log('Listening...');
})