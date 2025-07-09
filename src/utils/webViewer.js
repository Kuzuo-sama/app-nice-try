const mineflayerViewer = require('prismarine-viewer').mineflayer;
const bot = require('../../index');
const port = process.env.PORT || require('../../config.json').webviewer_port;


bot.once('spawn', () => {
	mineflayerViewer(bot, { port: port, firstPerson: false });
});

