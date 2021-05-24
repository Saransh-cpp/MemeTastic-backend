var client = require('./client.js');
const axios = require("axios");


let memeURL = '';
async function getData () {
    const mainUrl = `https://reddit.com/r/dankmemes.json?limit=100`;
    await axios
    .get(mainUrl)
    .then((response) => {
        client.deleteByQuery({
            index: "dankmemes",            
            body: {
                query: {
                    match_all: {}
                }
            }
        },  (err, resp) => {
            console.log(resp);
        });
        for (memeNumber = 0; memeNumber < 100; memeNumber++) {
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

