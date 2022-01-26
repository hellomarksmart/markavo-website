import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://uspto-trademark.p.rapidapi.com/v1',
  headers: {
      'content-type':'application/octet-stream',
      'x-rapidapi-host': 'uspto-trademark.p.rapidapi.com',
      'x-rapidapi-key': 'ca1f7a7097mshf6fe1392046155ap13d466jsna1dbf48de3ec'
  },
});

export default {
  getData: (keyword) =>
  instance({
      'method':'GET',
      'url': `/trademarkSearch/${keyword}/active`,
      'params': {
        "per_page":15
      }
  })
}