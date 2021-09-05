const mongoose = require('mongoose')
mongoose
    .connect('mongodb+srv://andresp:root1@cluster1.0make.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then((db) => console.log('DB is connected'))
    .catch(err => console.log(err));
    