const express = require('express');
require('dotenv').config();
const app = express();
const cors=require('cors');
const port = process.env.PORT;
const route=require('./src/routes/routes');

app.use(cors({
  origin: '*'
}));
app.use(express.json());
app.use('/',route);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));