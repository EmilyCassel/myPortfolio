const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Serve static files from client build
if (process.env.NODE_ENV === 'production') {
    const clientPath = path.resolve(__dirname, '../client/dist');
    app.use(express.static(clientPath));

    app.get('*', (req, res) => {
        res.sendFile(path.join(clientPath, 'index.html'));
    });
}

// Email sending route
app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
        console.error('GMAIL_USER or GMAIL_PASS not set in environment variables');
        return res.status(500).send('Server configuration error');
    }

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
    });

    let mailOptions = {
        from: email,
        to: 'emilycassel77@gmail.com',
        subject: `Message from ${name}`,
        text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Message sent: ' + info.response);
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3014;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
