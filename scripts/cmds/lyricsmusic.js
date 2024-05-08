const fs = require("fs-extra");
const ytdl = require("@neoxr/ytdl-core");
const yts = require("yt-search");
const axios = require('axios');
const tinyurl = require('tinyurl');

module.exports = {
	config: {
		name: "lyricsmusic",
		version: "1.0",
		aliases: ["lm"],
		author: "KShitiz",
		countDown: 5,
		role: 0,
		category: "media",
	},

	onStart: async function ({ api, event, message }) {
		try {
			let song;
			let lyrics;

			if (event.type === "message_reply" && ["audio", "video"].includes(event.messageReply.attachments[0].type)) {
				const attachmentUrl = event.messageReply.attachments[0].url;
				const urls = await tinyurl.shorten(attachmentUrl) || args.join(' ');
				const response = await axios.get(`https://www.api.vyturex.com/songr?url=${urls}`);// api credit jarif

				if (response.data && response.data.title) {
					song = response.data.title;
					lyrics = await getLyrics(song);
				} else {
					return message.reply("Error: Song information not found.");
				}
			} else {
				const input = event.body;
				const text = input.substring(12);
				const data = input.split(" ");

				if (data.length < 2) {
					return message.reply("Please include music title");
