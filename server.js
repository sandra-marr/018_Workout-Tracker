const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const PORT= process.env.PORT || 3000; 

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/dbWorkout', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

app.use(require('./routes/api.js'));
app.use(require('./routes/homeRoutes.js'));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });

