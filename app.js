//imports
const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

//connecting with DB
mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.hsipf.mongodb.net/<dbname>?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set("useCreateIndex", true); //stop deprecation warning

mongoose.connection.on("connected", () => {
    console.log("MongoDB connected")
});

//import routes
const articlesRoutes = require("./api/routes/articles");
const userRoutes = require("./api/routes/users");

app.use(morgan("dev")); //middleware logger 

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

//Routes
app.use("/articles", articlesRoutes);
app.use("/users", userRoutes);


app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;
