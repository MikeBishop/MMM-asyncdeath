/* Magic Mirror
 * Node Helper: MMM-asyncdeath
 *
 * By Mike Bishop
 * MIT Licensed.
 */

const NodeHelper = require("node_helper");

module.exports = NodeHelper.create({

	start: /*async*/ function () {
		this.asyncStart()
	},

	// Comment this out and uncomment the other start method to break
	start: function () {
		console.log("Synchronous start-up -- all is well");
	},

	// start: async function () {
	// 	console.log("About to break by using await");
	// 	await this.delay(2000);
	// },

	delay: function(ms) {
		return new Promise(resolve => {
			setTimeout(resolve, ms);
		});
	},
});
