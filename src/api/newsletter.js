const client = require('@sendgrid/client');
client.setApiKey(process.env.SENDGRID_API_KEY);

export default function formHandler(req, res) {
  console.log("are ya working now?");

  const data = {
    "contacts": [
      {
        "email": `${req.body.mailerState.email}`,
      }
    ]
  };

  const request = {
    url: `/v3/marketing/contacts`,
    method: 'PUT',
    body: data
  }

  client.request(request)
    .then(([response, body]) => {
      console.log(response.statusCode);
      console.log(response.body);
      console.log("are ya working now? 3");
    })
    .catch(error => {
      console.error(error);
      console.log("are ya working now? 4");
    });
};