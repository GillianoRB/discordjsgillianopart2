const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

    let user = message.mentions.users.first() || message.author;
    
    let embed = new Discord.RichEmbed()
    .setColor("#4bf442")
    .setTimestamp()
    .addField("Hypixel includes many achievements, there is achievements in EVERY gamemode except for PTL lobby games! Hypixel has AP or Achievement Points, where you gain Hypixel XP and cosmetics for completing achievements!", "Thanks For Reading");

    message.channel.send(embed)
    }
    exports.help = {
      name: "hpachievements"
    }
