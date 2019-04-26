const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

    let user = message.mentions.users.first() || message.author;
    
    let embed = new Discord.RichEmbed()
    .setColor("#4bf442")
    .setTimestamp()
    .addField("Hypixel has many quests, by completing quests you get Hypixel XP (If you want to know more about Hypixel XP do !hypixelxp) You also gain a specific amount of coins in that specific game you are playing.", "Thanks For Reading");

    message.channel.send(embed)
    }
    exports.help = {
      name: "hpquests"
    }