import dotenv from 'dotenv';
import twilio from 'twilio';
import { createTransport } from 'nodemailer';

dotenv.config();

// const TEST_MAIL = 'lucasetrigo@gmail.com';
const trasporter = createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: process.env.USER_MAILADMIN,
        // pass: process.env.PASS,
        pass: process.env.PASS_MAILADMIN,
    },
});

async function EnvioCorreo(mailOptions) {
    try {
        const info = await trasporter.sendMail(mailOptions);
        //console.log(info)
    } catch (error) {
        console.log(error);
    }
}

const accountSid = process.env.TWILIOID;
const authToken = process.env.TWILIOTOKEN;
const client = twilio(accountSid, authToken);

async function EnvioWhats(whatsOption) {
    try {
        const MensajeWhats = await client.messages.create(whatsOption);
        //console.log(info)
    } catch (error) {
        console.log(error);
    }
}
// const option = {
//     body:'Hola soy node.js',
//     to: 'whatsapp:+528126595434',
//     from: 'whatsapp:+14155238886',
// }
export default {
    EnvioCorreo,
    EnvioWhats,
};
