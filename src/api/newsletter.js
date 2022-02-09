const client = require('@sendgrid/client');
client.setApiKey(process.env.SENDGRID_API_KEY);

// export default (req, res) => {
//   res.status(200).json({ name: 'John Doe' })
// }

const data = {
  "contacts": [
    {
      "email": `${req.body.mailerState.email}`,
    }
  ]
};

const request = {
  url: `marketing/contacts/newsletter`,
  method: 'POST',
  body: data
}

client.request(request)
  .then(([response, body]) => {
    console.log(response.statusCode);
    console.log(response.body);
  })
  .catch(error => {
    console.error(error);
  });