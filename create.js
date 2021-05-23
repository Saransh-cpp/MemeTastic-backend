var client = require('./client.js');

client.indices.create({  
    index: 'dankmemes'
  }, (err, resp, status) =>{
    if(err) {
      console.log(err);
    }
});