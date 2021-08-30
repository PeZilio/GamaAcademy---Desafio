const express = require ("express");
const mongoose = require("mongoose");
const swaggerUI = require("swagger-ui-express");
const swaggerDocs = require("./swagger.jason");
const routes = require ("./routes");
const app = express();

mongoose.connect("mongodb+srv://PenelopeZilio:<Pipo29pipo*>@cluster0.bb4qp.mongodb.net/Candidatos?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    UseCreateIndex: true,
});

app.use(express.json());
app.use ("/docs", swaggerUI.serve, swaggerUI.setup (swaggerDocs));
app.use (routes);
app.listen("5000", () =>{
    console.log ("rodando na porta 500");
});

