const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

    let user = message.mentions.users.first() || message.author;
    
    let embed = new Discord.RichEmbed()
    .setColor("#4bf442")
    .setTimestamp()
    .addField("Hypixel xp", "XP")
    .addField("In Hypixel you gain Hypixel XP. Hypixel XP can give you a certain amount of levels in game, you can check your Hypixel Level in the main lobby or game lobbies in your experience bar.", "multipliers")
    .addField("You also unlock multipliers. Multipliers increases your amount of coins in game, you can check your multiplier by viewing your Hypixel Leveling, located in your profile (The Head in the lobby!)", "Thanks for reading")

    message.channel.send(embed)
    }
    exports.help = {
      name: "hypixelxp"
    }