const stripIndents = require('common-tags').stripIndents;
const commando = require('discord.js-commando');



class banCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'permban',
			aliases: ['ban', 'perma'],
			group: 'moderation',
			memberName: 'bermapan',
			description: 'Bans a user.',
			examples: ['permban @illumin8'],
			guildOnly: true,

			args: [
				{
					key: 'member',
					label: 'user',
					prompt: 'What user would you like to Ban?',
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
  let modlog = msg.guild.channels.find('name', 'mod-log');
  const member = args.member;
  const user = member.user;
  if (!modlog) return msg.reply("I cannot find a mod-log channel.");
  if (msg.member.hasPermissions(['BAN_MEMBERS'])) {
    if (member.bannable){
    msg.guild.member(msg.mentions.users.first()).ban();

    msg.channel.sendMessage("", {
      embed: {

        color: 3447003,
        author: {
          name: msg.mentions.users.first().username + ' got banned.',
          icon_url: msg.mentions.users.first().avatarURL
        },

      }
    });
    return msg.client.channels.get(modlog.id).sendMessage("", {
      embed: {
        color: 3447003,
        author: {
          name: msg.mentions.users.first().username + ' got banned. 🚫💯',
          icon_url: msg.mentions.users.first().avatarURL
        },
        fields: [{
            name: 'Action',
            value: 'Ban'
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
}
if(!member.bannable){
    return msg.reply("Unable to ban user, please give permissions.");
}
}


}

module.exports = banCommand;
