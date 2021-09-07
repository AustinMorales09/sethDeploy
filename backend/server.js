const express = require('express');
const path = require('path');
// const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const buildPath = path.join(__dirname, 'build');
app.use(express.static(buildPath));

// app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URL;


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true  }
)
.then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
})
.catch((err) => console.log(err));


const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

const productsRouter = require('./routes/products');

app.use('/menu', productsRouter);





