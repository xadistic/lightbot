const { Command } = require('discord.js-commando');

module.exports = class CleanCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'clear',
			group: 'moderation',
			memberName: 'clear',
			description: 'Deletes messages.',
			details: `Deletes messages. Here is a list of filters:
				__invites:__ Messages containing an invite
				__user @user:__ Messages sent by @user
				__bots:__ Messages sent by bots
				__you:__ Messages sent by Commando
				__uploads:__ Messages containing an attachment
				__links:__ Messages containing a link`,
			guildOnly: true,
			throttling: {
				usages: 2,
				duration: 3
			},

			args: [
				{
					key: 'limit',
					prompt: 'how many messages would you like to delete?\n',
					type: 'integer',
					max: 100
				},
				{
					key: 'filter',
					prompt: 'what filter would you like to apply?\n',
					type: 'string',
					default: '',
					parse: str => str.toLowerCase()
				},
				{
					key: 'member',
					prompt: 'whose messages would you like to delete?\n',
					type: 'member',
					default: ''
				}
			]
		});
	}

	hasPermission(msg) {
		return this.client.isOwner(msg.author) || msg.member.permissions.has('MANAGE_MESSAGES');
	}

	async run(msg, args) { // eslint-disable-line consistent-return
		const { filter, limit } = args;
		let messageFilter;

		if (filter) {
			if (filter === 'invite') {
				messageFilter = message => message.content.search(/(discord\.gg\/.+|discordapp\.com\/invite\/.+)/i)
				!== -1;
			} else if (filter === 'user') {
				if (args.member) {
					const member = args.member;
					const user = member.user;
					messageFilter = message => message.author.id === user.id;
				} else {
					return msg.channel.send(`${msg.author}, you have to mention someone.`);
				}
			} else if (filter === 'bots') {
				messageFilter = message => message.author.bot;
			} else if (filter === 'you') {
				messageFilter = message => message.author.id === this.client.user.id;
			} else if (filter === 'upload') {
				messageFilter = message => message.attachments.size !== 0;
			} else if (filter === 'links') {
				messageFilter = message => message.content.search(/https?:\/\/[^ \/\.]+\.[^ \/\.]+/) !== -1; // eslint-disable-line
			} else {
				return msg.channel.send(`${msg.author}, this is not a valid filter. \`help clean\` for all available filters.`);
			}

		
		const messages = await msg.channel.fetchMessages({ limit: limit + 1 }).catch(err => null);
			const messagesToDelete = messages.filter(messageFilter);
			msg.channel.bulkDelete(messagesToDelete.array().reverse()).catch(err => null);
		}

		const messagesToDelete = await msg.channel.fetchMessages({ limit: limit + 1 }).catch(err => null);
		msg.channel.bulkDelete(messagesToDelete.array().reverse()).catch(err => null);
	}
};

