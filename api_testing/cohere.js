const cohere = require('cohere-ai');
cohere.init('tqDPnl8QyMk4HmCHRRR2VL3ns94BecutsbQARYqx');

  const response = cohere.embed('small', {
    texts: ["hello", "goodbye"]
  }).then(resp => {
    console.log(resp.body)
});
