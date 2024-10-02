const express = require('express')
const QRcode = require('qrcode')
const app = express();

const PORT = 3003;

app.get('/qr/generate', async(req, res) => {
    try {
        const url = req.query.url || 'https://donnekt.com';
        const qrCodeImage = await QRcode.toDataURL(url);
        res.send(`<img src="${qrCodeImage}" alt="QR CODE STUFF"/>`)
    } catch(err) {
        console.error('Error generating QR code:', err);
        res.status(500).send('Internal Server Error');
    }
})

app.listen(PORT, ()=> {
    console.log("Server is running on port "+PORT);
})