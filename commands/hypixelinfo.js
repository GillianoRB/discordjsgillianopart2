const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
    
    let embed = new Discord.RichEmbed()
    .setColor("#4bf442")
    .addField("**hypixel** is a minecraft server based on many fun minigames.", "Gamemodes")
    .addField("Hypixel includes games such as Skywars, Bedwars and Build Battle. Hypixel has a lot of different communities, such as PvP, Building and roleplaying Hypixel also has different ranks and cosmetics.", "Shop")
    .addField("You can buy the ranks on store.hypixel.net where you can buy many more things than ranks. https://i.imgur.com/EEG244D.png", "Thanks For Your Time");

    message.channel.send(embed)
    }
    exports.help = {
      name: "hypixelinfo"
    }
