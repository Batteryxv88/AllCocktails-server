const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const authRouter = require('./routes/cocktailRout')

app.use(cors());
app.use(express.json());
app.use('/auth', authRouter)
app.use('/', require('./routes/cocktailRout'));

const start = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://mvkovalyov:t2t6JifAQpkMjwmu@cluster0.kdp6x7v.mongodb.net/cocktails?retryWrites=true&w=majority'
    );
    app.listen(3001, () =>
      console.log('express server is running on port 3001')
    );
  } catch (e) {
    console.log(e);
  }
};

start();
