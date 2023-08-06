const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send('Hello world!');
});

baseRouter.post('/add', (req, res) => {
    res.json({ "result": req.body.first + req.body.second });
});


baseRouter.post('/subtract', (req, res) => {
<<<<<<< HEAD
    res.json({ "result": req.body.first - req.body.second });
=======
    res.json({  "result": req.body.first - req.body.second });
>>>>>>> eb6c92e0709e1c82eb28cb00581cf4ad27d01f04
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});