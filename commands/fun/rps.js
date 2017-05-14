const Commando = require('discord.js-commando');

class rpsCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'rps',
      aliases: ['rps'],
      group: 'fun',
      memberName: 'rps',
      description: 'Play rock-paper-scissors.',
      format: 'rock-paper-scissors',
      examples: ['rps rock', 'rps paper', 'rps scissors'],
    });
  }

  async run(message, args) {
    let choices = ["rock", "paper", "scissors"];
    var cpuChoice = choices[Math.floor(Math.random()*choices.length)];

    var outcome;
    if(!choices.includes(args)) {
      outcome = "invalid opponent- \""+args+".\"";
    }else if(cpuChoice === args) {
      outcome = cpuChoice+". Tie!";
    }else if(cpuChoice === "rock" && args === "scissors" || cpuChoice === "paper" && args == "rock" || cpuChoice == "scissors" && args == "paper") {
      outcome = cpuChoice+". I win!"
    }else {
      outcome = cpuChoice+". You win!"
    }
    message.reply(outcome);
  }
}

module.exports = rpsCommand;
