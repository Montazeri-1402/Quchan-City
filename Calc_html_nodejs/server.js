// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/calculate', (req, res) => {
    try {
        const num1 = parseFloat(req.body.num1);
        const num2 = parseFloat(req.body.num2);
        const operation = req.body.operation;

        if (isNaN(num1) || isNaN(num2) || !operation) {
            throw new Error('Invalid input values');
        }

        let result;

        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                result = num1 / num2;
                break;
            default:
                throw new Error('Invalid operation');
        }

        if (!isNaN(result)) {
            res.send({ result });
        } else {
            throw new Error('Invalid calculation result');
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(400).send({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
