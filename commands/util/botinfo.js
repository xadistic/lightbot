const stripIndents = require('common-tags').stripIndents;
const commando = require('discord.js-commando');

module.exports = class UserInfoCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'botinfo',
			aliases: ['botinfo', 'bot-info'],
			group: 'util',
			memberName: 'botinfo',
			description: 'Gets information about me.',
			examples: ['j.botinfo'],
			guildOnly: true,

		});
	}

	async run(msg, args) {
            let bot = msg.client.user;
		return msg.channel.sendMessage("", {embed: {
  color: 3447003,
  author: {
    name: bot.username + "'s"+ ' info',
    icon_url:  bot.avatarURL
  },
      fields: [
    {
      name: 'Avatar URL',
      value:  bot.displayAvatarURL
    },
    {
      name: 'Bot (duh)',
      value:  bot.bot
    },
    {
      name: 'Owner',
      value:  bot.client
    },
    {
      name: 'Created at',
      value:  bot.createdTimestamp
    },
    {
      name: 'Discriminator',
      value:  bot.discriminator
    },
    {
      name: 'Prescence',
      value:  bot.presence
    },
    {
      name: 'Username',
      value:  bot.username
    },
    ],
  }});
    }
}
