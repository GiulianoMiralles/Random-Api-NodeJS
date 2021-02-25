const express = require('express');
const app = express();

app.get('/', () => {
    res.send('index page');
});

app.get('/random/:firstNumber/:secondNumber', (req, res) => {
    const min = parseInt(req.params.firstNumber);                   // I save the first parameter of the url in a constant and convert them from string to number
    const max = parseInt(req.params.secondNumber);                  // I save the second parameter of the url in a constant and convert them from string to number

    if (isNaN(min) || isNaN(max)) {                                 //Here I make a conditional where if I can not convert the variable to number I return a 404 error
        res.status(404);
        res.json({ "Error": "Bad request" })
        return
    }
    const result = Math.floor(Math.random() * (max - min) + min); //Operation to calculate a random number and eliminate decimals

    res.json({ "randomNumber": result });


});


app.listen(3000, () => {
    console.log('server on port 3000')
});
