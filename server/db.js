const mongoose = require("mongoose");
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            // useCreateIndex: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect(
           `mongodb+srv://${dbUsername}:${dbPassword}@cluster0.zk9ei.mongodb.net/${dbName}?retryWrites=true&w=majority`,
            connectionParams
        );
        console.log("Connected to database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};