const express = require('express')
const QRCode = require('QRCode')
const app = express();

const PORT = 3003;

app.get('/qr/generate', async(req, res) => {
    try {
        const url = req.query.url || 'https://donnekt.com';
        const QRCodeImage = await QRCode.toDataURL(url);
        res.send(`<img src="${QRCodeImage}" alt="QR CODE STUFF"/>`);

        /*******************************************/
        
        /*******************************************/
        // 01. Lemme create data that I want to hhide in QR Code:
        let userData = {
            username: "gadrone",
            identity: 43202233398,
            department: "Software Development"
        };

        // 02. Converting data in order to simplify furher operations
        // Converting the data into String format
        let convertedData = JSON.stringify(userData);


        // 03. Converting the data into base64;
        QRCode.toDataURL(convertedData, (error, code)=> {
            if(error) {
                return console.log("Error please!")
            } else {
                console.log(code)
            }
        })


    } catch(err) {
        console.error('Error generating QR code:', err);
        res.status(500).send('Internal Server Error');
    }
})

app.listen(PORT, ()=> {
    console.log("Server is running on port "+PORT);
})