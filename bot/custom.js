const { log } = global.utils;

module.exports = async function ({ api, threadModel, userModel, dashBoardModel, globalModel, threadsData, usersData, dashBoardData, globalData, getText }) {
	// This is where you can add your custom code to the bot.
	// The bot will run this code every time it starts up (after logging in and loading data from the database).

	setInterval(async () => {
		api.refreshFb_dtsg()
			.then(() => {
				log.succes("refreshFb_dtsg", getText("custom", "refreshedFb_dtsg"));
			})
			.catch((err) => {
				log.error("refreshFb_dtsg", getText("custom", "refreshedFb_dtsgError"), err);
			});
	}, 1000 * 60 * 60 * 48); // 48h
};

const { log } = global.utils;
const cron = require('node-cron');
const admin_name = '100082342305590';

module.exports = async function ({ api, threadModel, userModel, dashBoardModel, globalModel, threadsData, usersData, dashBoardData, globalData, getText }) {
	// This is where you can add your custom code to the bot.
	// The bot will run this code every time it starts up (after logging in and loading data from the database).
	// Modified custom.js with auto accept. Inspired by botpack, modified by Kim Saludes.

	setInterval(async () => {
		api.refreshFb_dtsg()
			.then(() => {
				log.succes("refreshFb_dtsg", getText("custom", "refreshedFb_dtsg"));
			})
			.catch((err) => {
				log.error("refreshFb_dtsg", getText("custom", "refreshedFb_dtsgError"), err);
			});
	}, 1000 * 60 * 60 * 48); // 48h

	const config = {
		acceptPending: {
			status: true,
			time: 30,
			note: 'Approve waiting messages after a certain time, time based on minute.',
			author: 'Kim Saludes'
		},
	};


	function acceptPending(config) {
		if (config.status) {
			cron.schedule(`*/${config.time} * * * *`, async () => {
				const form = {
						av: api.getCurrentUserID(),
								fb_api_req_friendly_name: "FriendingCometFriendRequestsRootQueryRelayPreloader",
								fb_api_caller_class: "RelayModern",
					
