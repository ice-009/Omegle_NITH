const Sib= require('sib-api-v3-sdk')
require('dotenv').config()
const client= Sib.ApiClient.instance
const apiKey = client.authentications['api-key']
apiKey.apiKey = process.env.API_KEY

const tranEmailApi = new Sib.TransactionalEmailsApi()
const sender = {
    email: '21bma009@nith.ac.in',
    name: 'Armaan',
}
const receivers = [
    {
        email: 'armaanshukla0609@gmail.com'
    },
]
tranEmailApi
    .sendTransacEmail({
        sender,
        to: receivers,
        subject: 'Subscribe to Cules Coding to become a developer',
        textContent: `
        Cules Coding will teach you how to become {{params.role}} a developer.
        `,
        htmlContent: `
        <h1>Cules Coding</h1>
        <a href="https://cules-coding.vercel.app/">Visit</a>
                `,
        params: {
            role: 'Frontend',
        },
    })
    .then(console.log)
    .catch(console.log)