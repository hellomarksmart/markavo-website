const client = require('@sendgrid/client');
client.setApiKey(process.env.SENDGRID_API_KEY);

export default function formHandler(req, res) {

  const request = {
    url: `https://api.sendgrid.com/v3/marketing/contacts`,
    method: 'PUT',
    body: {
      list_ids: [
        '6507832e-79d1-422a-af1a-f4321dff7881'
      ],
      "contacts": [
        {
          "email": `${req.body.mailerState.email}`,
        }
      ]
    }
  };

  client.request(request)
    .then(([response, body]) => {
      console.log(response.statusCode);
      console.log(response.body);
    })
    .catch(error => {
      console.error(error);
    });
};