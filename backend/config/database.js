const mongoose = require('mongoose');

const connectDatabase = () => {

    //  mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true}).then
    mongoose.connect(process.env.DB_URI).then((data) => {

        console.log(`mongodb connect successfully: ${data.connection.host}`)

    }).catch((error) => {
        console.log(error);
    });
}

module.exports = connectDatabase;