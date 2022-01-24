import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://uspto-trademark.p.rapidapi.com/v1',
  headers: {
      'content-type':'application/octet-stream',
      'x-rapidapi-host': `${process.env.RAPIDAPI_HOST}`,
      'x-rapidapi-key': `${process.env.RAPIDAPI_KEY}`
  },
});

export default {
  getData: (keyword) =>
  instance({
      'method':'GET',
      'url': `/trademarkSearch/${keyword}/active`
  })
}