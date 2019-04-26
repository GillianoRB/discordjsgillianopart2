const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (!message.channel.name.startsWith('🎫ticket-')) return message.channel.send('You are not in a ticket channel!');
    let reason = args[0] | 'Ticket Closed!'
    message.channel.delete(args[0])
}

module.exports.help = {
  name: "close"
}
