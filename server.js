var client = require('./client.js');
const axios = require("axios");


let memeURL = '';
async function getData () {
    // ==================================IMPORTANT==================================================
    // =The subreddit has been changed to "memes" from "dankmemes" to avoid offensive/NSFW content.=
    // =You will find the index still named dankmemes because the name won't effect the content.   =
    // =All the memes stored in the "dankmemes" index are being pulled from the "memes" subreddit  =
    // =to abide by the rules of Hackathon.                                                        =
    // =============================================================================================
    const mainUrl = `https://reddit.com/r/memes.json?limit=100`;
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

