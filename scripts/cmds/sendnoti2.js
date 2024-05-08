const axios = require("axios");
const { createReadStream, unlinkSync } = require("fs");
const { resolve } = require("path");

module.exports = {
	config: {
		name: "sendnoti2",
		version: "1.4",
		author: "cliff",
		countDown: 5,
		role: 2,
		shortDescription: {
			vi: "Tạo và gửi thông báo đến các nhóm",
			en: "Create and send notification to groups",
		},
		longDescription: {
			vi: "Tạo và gửi thông báo đến các nhóm do bạn quản lý",
			en: "Create and send notification to groups that you manage",
		},
		category: "box chat",
	},

	onStart: async function ({ api, event, args }) {
		if (this.config.author !== "cliff") {
			return api.sendMessage(
				`[ 𝗔𝗡𝗧𝗜 𝗖𝗛𝗔𝗡𝗚𝗘 𝗖𝗥𝗘𝗗𝗜𝗧𝗦 ]
				𝗔𝗗𝗠𝗜𝗡 𝗠𝗘𝗦𝗦𝗔𝗚𝗘: 
				ᴄʜᴀɴɢᴇ ᴄʀᴇᴅɪᴛs ᴘᴀ ᴀᴋᴏ sᴀʏᴏ ᴍᴀɢ ᴘʀᴀᴄᴛɪᴄᴇ ᴋᴀ😝 
				𝗠𝗘𝗠𝗕𝗘𝗥 𝗠𝗘𝗦𝗦𝗔𝗚𝗘:
				𝚃𝚑𝚒𝚜 𝚋𝚘𝚝 𝚌𝚛𝚎𝚊𝚝𝚘𝚛 𝚒𝚜 𝚊 𝚌𝚑𝚊𝚗𝚐𝚎 𝚌𝚛𝚎𝚍𝚒𝚝𝚘𝚛 𝚔𝚊𝚢𝚊 𝚋𝚎 𝚊𝚠𝚊𝚛𝚎 𝚗𝚎𝚡𝚝 𝚝𝚒𝚖𝚎.
				𝗢𝗪𝗡𝗘𝗥 𝗢𝗙 𝗧𝗛𝗜𝗦 𝗖𝗢𝗠𝗠𝗔𝗡𝗗: 
https://www.facebook.com/100082342305590`,
				event.threadID,
				event.messageID
			);
		}

		const threadList = await api.getThreadList(100, null, ["INBOX"]);
		let sentCount = 0;
		const custom = args.join(" ");

		async function sendMessage(thread) {
			try {
				await api.sendMessage(
					`✱:｡✧𝗔𝗡𝗡𝗢𝗨𝗡𝗖𝗘𝗠𝗘𝗡𝗧✧｡:✱
━━━━━━━━━━━━━━━━━━━
👤  | 𝗡𝗔𝗠𝗘: LORENZO シ︎
