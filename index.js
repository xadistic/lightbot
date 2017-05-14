const commando = require('discord.js-commando')
const bot = new commando.Client();
const winston = require('winston');

function pluck(array) {
  return array.map(function(item) { return item["name"]; });

}

function hasRole(mem, role) {
  if(pluck(mem.roles).includes(role)){
    return true;
  } else {
      return false;
  }
}

bot.on('ready', () => {
  bot.user.setGame('with myself');
  console.log('Bot is online!');
})
bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('fun');
bot.registry.registerGroup('moderation');
bot.registry.registerGroup('util');
bot.registry.registerGroup('search');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");




bot.login('INSERT_BOT_TOKEN_HERE');
