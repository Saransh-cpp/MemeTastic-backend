var client = require('./client.js');

client.indices.create({  
    index: 'dankmemes'
  },function(err,resp,status) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("create",resp);
    }
  });