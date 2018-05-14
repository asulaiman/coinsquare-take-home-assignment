import request from 'request';

export default {
  getTicker: () => {
    const corsProxyUrl = 'http://localhost:8081/';
    const bitfinexUrl = 'https://api.bitfinex.com/v1';
    return new Promise(resolve => {
      request.get(`${corsProxyUrl}${bitfinexUrl}/pubticker/BTCUSD`, function (error, response, body) {
        if (!error) {
          resolve(JSON.parse(body));
        } else {
          reject(error);
        }
      });
    });
  },
};
