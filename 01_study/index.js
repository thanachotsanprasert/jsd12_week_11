const express = require("express");

const app = express();

const port = 3010;

const jsd = [
    { name: "Em", jsd_number: 5, genmate: "F" },
    { name: "Card", jsd_number: 9, genmate: "F" },
    { name: "Lin", jsd_number: 13, genmate: "F" },
    { name: "Jay", jsd_number: 19, genmate: "F" },
    { name: "Toon", jsd_number: 38, genmate: "F" },
    { name: "Sign", jsd_number: 41, genmate: "F" },
    { name: "Ong", jsd_number: 42, genmate: "F" },
];

app.get("/", (req, res) => {
    res.send("Hello, Dude dude duck!");
});

app.get("/users", (req, res) => {
    // res.send(jsd);
    res.send(`<h1>Hello world </h1>, ${JSON.stringify(jsd)}`);
});

app.listen(port, () => {
    console.log("Server is running on: ", port, "😈🍑🥝🍅");
});
