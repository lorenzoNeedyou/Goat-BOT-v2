const fs = require('fs');
const path = require('path');
const { drive, getStreamFromURL } = global.utils;


const hotDataFilePath = path.join(__dirname, 'vdo.json');


function readHotData() {
	try {
		const data = fs.readFileSync(hotDataFilePath, 'utf8');
		return JSON.parse(data) || [];
	} catch (error) {
		return [];
	}
}


function writeHotData(data) {
	fs.writeFileSync(hotDataFilePath, JSON.stringify(data), 'utf8');
}

module.exports = {
	config: {
		name: 'hot',
		version: '1.0',
		author: 'Kshitiz',
		role: 0,
		shortDescription: {
			en: 'Manage videos'
		},
		longDescription: {
			en: 'Add and send t videos'
		},
		category: 'custom',
		guide: {
			en: '   {pn} add: Reply to a video to add it to the video collection'
				+ '\n   {pn} send: Send a random video from the video collection'
		}
	},

	onStart: async function ({ args, message, event }) {

		const hotData = readHotData();

		switch (args[0]) {
			case 'add': {
				if (event.messageReply && event.messageReply.attachments && event.messageReply.attachments.length > 0) {
					const videoAttachment = event.messageReply.attachments.find(attachment => attachment.type === 'video');

					if (!videoAttachment) {
						return message.reply('Reply to a video to add it to the video collection.');
					}


					const fileName = `hot_${Date.now()}.mp4`;
