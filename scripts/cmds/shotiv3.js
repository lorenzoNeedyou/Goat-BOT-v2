const axios = require('axios');
const request = require('request');
const fs = require("fs");

module.exports = {
  config: {
    name: "shotiv3",
    aliases: ["shoti3"],
    version: "1.0",
    author: "kshitiz",
    countDown: 20,
    role: 0,
    shortDescription: "shotiv3",
    longDescription: "you need shoti broo",
    category: "fun",
    guide: "{pn} shoti3",
  },
  onStart: async function ({ api, event }) {
    axios.get('https://shoti-server-v2.onrender.com/api/v1/get$shoti-1htm21smbsf687j282g').then(res => {
      let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
      let callback = function () {
        api.sendMessage({
          body: `YOUR SHOTI VIDEO REQUEST IS DONE MY SENPAI`,
          attachment: fs.createReadStream(__dirname + `/cache/codm.${ext}`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/codm.${ext}`), event.messageID);
      };

      request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/codm.${ext}`)).on("close", callback);
    }).catch(err => {
      api.sendMessage("[ shoti ]\nApi error status: 200\nContact the owner to fix immediately", event.threadID, event.messageID);
      api.setMessageReaction("❌", event.messageID, (err) => {}, true);
    });
  }
};
