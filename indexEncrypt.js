const ethUtil = require('ethereumjs-util');
const sigUtil = require('@metamask/eth-sig-util');

const encryptedMessage = ethUtil.bufferToHex(
    Buffer.from(
        JSON.stringify(
            sigUtil.encrypt({
                publicKey: "caLC5HV02VNCs3qtf9Ct61UlnjWnDGDfy3/IZ1Xy+XA=",
                data: 'Message from wallet',
                version: 'x25519-xsalsa20-poly1305',
            })
        ),
        'utf8'
    )
);

console.log(encryptedMessage)
