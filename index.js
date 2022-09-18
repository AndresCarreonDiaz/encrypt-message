const express = require('express')
const app = express()
const ethUtil = require('ethereumjs-util');
const sigUtil = require('@metamask/eth-sig-util');
const cors = require("cors")

const PORT = 8080

app.use(express.json(), cors({
    origin: "*"
}))

app.listen(
    PORT,
    () => console.log(`it is alive on http://localhost:${PORT}`)
)

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'blue',
        size: 'large'
    })
})

app.post('/encrypt', (req, res) => {

    const {pubKey} = req.body;
    const {message} = req.body

    const encryptedMessage = ethUtil.bufferToHex(
        Buffer.from(
            JSON.stringify(
                sigUtil.encrypt({
                    // publicKey: "caLC5HV02VNCs3qtf9Ct61UlnjWnDGDfy3/IZ1Xy+XA=",
                    publicKey:pubKey,
                    // data: 'Message from wallet',
                    data: message,
                    version: 'x25519-xsalsa20-poly1305',
                })
            ),
            'utf8'
        )
    );
    res.status(200).send({
        encMessage: encryptedMessage
    }
    )
})
