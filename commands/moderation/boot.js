const stripIndents = require('common-tags').stripIndents;
const commando = require('discord.js-commando');

class bootCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'boot',
			aliases: ['boot', 'kick'],
			group: 'moderation',
			memberName: 'boot',
			description: 'Boots a user.',
			examples: ['!Boot @illumin8'],
			guildOnly: true,

			args: [
				{
					key: 'member',
					label: 'user',
					prompt: 'What user would you like to ban?',
					type: 'member'
				},
				{
					key: 'reason',
					label: 'reason',
					prompt: 'Provide your reason.',
					type: 'string'
				},
			]

		});
	}

	async run(msg, args) {
		const member = args.member;
		const user = member.user;
		let modlog = msg.guild.channels.find('name', 'mod-log');
		if (!modlog) return msg.reply("I cannot find a mod-log channel.");
if (msg.member.hasPermissions(['KICK_MEMBERS'])) {
    if (member.bannable){
    msg.guild.member(msg.mentions.users.first()).kick();

    msg.channel.sendMessage("", {
      embed: {

        color: 3447003,
        author: {
          name: msg.mentions.users.first().username + ' got booted.',
          icon_url: msg.mentions.users.first().avatarURL
        },

      }
    });
    return msg.client.channels.get(modlog.id).sendMessage("", {
      embed: {
        color: 3447003,
        author: {
          name: msg.mentions.users.first().username + ' got booted.',
          icon_url: msg.mentions.users.first().avatarURL
        },
        fields: [
			{
            name: 'Action',
            value: 'Boot 👢'
          },
          {
            name: 'User',
            value: msg.mentions.users.first().username
          },
          {
            name: 'Moderator',
            value: msg.author.username
          },
		  {
            name: 'Reason',
            value: args.reason
          },
        ]
      }
	});
	}
}}
	}
module.exports = bootCommand
