const stripIndents = require('common-tags').stripIndents;
const commando = require('discord.js-commando');

class warnCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'warn',
			aliases: ['warn'],
			group: 'moderation',
			memberName: 'warn',
			description: 'Warns a user.',
			examples: ['!warn @illumin8'],
			guildOnly: true,

			args: [
				{
					key: 'member',
					label: 'user',
					prompt: 'Who are you warning?',
					type: 'member'
				},
                {
					key: 'reason',
					label: 'reason',
					prompt: 'Provide a reason.',
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
    if (1 === 1) {


    msg.channel.sendMessage("", {
      embed: {

        color: 3447003,
        author: {
          name: msg.mentions.users.first().username + ' is getting warned!.',
          icon_url: msg.mentions.users.first().avatarURL
        },
        description: msg.mentions.users.first().username + ', stop  ' + args.reason + ' as it might get you booted or BANNED.'
      }
    });
    return msg.client.channels.get(modlog.id).sendMessage("", {
      embed: {
        color: 3447003,
        author: {
          name: msg.mentions.users.first().username + ' got warned.',
          icon_url: msg.mentions.users.first().avatarURL
        },
        fields: [
			{
            name: 'Action',
            value: 'Warn ⚠'
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

module.exports = warnCommand;
