const stripIndents = require('common-tags').stripIndents;
const commando = require('discord.js-commando');
function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}
class flipCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'coinflip',
			aliases: ['flip', 'coinflip'],
			group: 'fun',
			memberName: 'flip',
			description: 'Flips a coin.',
			examples: ['!coinflip'],
			guildOnly: true,

		});
	}

	async run(msg, args) {
        function inttostring(int){
  if(int ===1){
  msg.channel.sendMessage("", {embed: {
  color: 3447003,
  author: {
    name: '*flips coin*'
  },
  description: 'HEADS!',
  }});
    }
    if(int === 2){
   msg.channel.sendMessage("", {embed: {
  color: 3447003,
  author: {
    name: '*flips coin*'
  },
  description: 'TAILS!',
  }});
    }
}
       inttostring(randomInt(0,3));
    }
    }
module.exports = flipCommand;
