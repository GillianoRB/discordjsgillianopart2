const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

    let user = message.mentions.users.first() || message.author;
    
    let embed = new Discord.RichEmbed()
    .setColor("#4bf442")
    .setTimestamp()
    .addField("Top 10 hypixel guild", "The Foundation")
    .addField("Level 32", "Rawr")
    .addField("Level 31", "The Bloodlust")
    .addField("Level 31", "Rebel")
    .addField("Level 31", "RuGaming")
    .addField("Level 29", "Raid")
    .addField("Level 29", "Bravo")
    .addField("Level 29", "Blue Crew")
    .addField("Level 28", "Elation")
    .addField("Level 27", "Friendly Riot")
    .addField("We will also be editing checking the top 10 daily to see if anythings changed", "Thanks for reading");

    message.channel.send(embed)
    }
    exports.help = {
      name: "hpguildtop10"
    }