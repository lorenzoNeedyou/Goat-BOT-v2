module.exports = {
config {
	name: "18+",
	version: "1.0.0",
	role: 0,
	credits: "Strawhat Luffy",
	description: "18+ command",
	commandCategory: "nsfw",
	usages: "anhnude",
	cooldowns: 2
guide{
vi: "{pn}"
}
},

onStart: async function ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://tuandz.herokuapp.com/images/nude').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/nobra.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/nobra.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/nobra.${ext}`)).on("close", callback);
			})
    }
