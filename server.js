var client = require('./client.js');
const axios = require("axios");


let memeURL = '';
async function getData (reddit, id, res) {
    const mainUrl = `https://reddit.com/r/dankmemes.json?limit=10`;
    await axios
    .get(mainUrl)
    .then((response) => {
        for (memeNumber = 0; memeNumber < 10; memeNumber++) {
            console.log(response.data["data"]["children"][memeNumber]["data"]["url_overridden_by_dest"]);
            memeURL = response.data["data"]["children"][memeNumber]["data"]["url_overridden_by_dest"];
            console.log(response.data["data"]["children"][memeNumber]["data"]["title"]);
            memeTitle = response.data["data"]["children"][memeNumber]["data"]["title"];
            client.index({  
                index: 'dankmemes',
                body: {
                    url: memeURL,
                    title: memeTitle
                }
            }, (err, resp, status) => {
                  console.log(resp);
            });
        }
    })
}

getData();

