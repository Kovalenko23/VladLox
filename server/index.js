const express = require('express');
const app = express();
const cors = require("cors");

const port = 8080;

const users = [
    {
        id: 2,
        name: "Vasya"
    }
]
app.use("/public", express.static("public"))
.use(cors())
.use(express.json());

app.get("/", (req, res) => res.send("Hello world😛"));
app.get("/users", (req, res) => res.send(users));
app.post("/users", (req, res) => {
    users.push(req.body);
    res.status(201).push(req.body)   
});
app.listen(port, () =>

   console.log("Server is running on http://localhost:8080")
);
