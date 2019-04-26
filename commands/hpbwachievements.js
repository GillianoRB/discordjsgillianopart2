const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

    let user = message.mentions.users.first() || message.author;
    
    let embed = new Discord.RichEmbed()
    .setColor("#4bf442")
    .setTimestamp()
    .addField("There are bedwars achievements. These are the list of the BedWars achievements!", "Alchemist")
    .addField("Buy 10 Potions In A Game.", "Already Over??")
    .addField("Win a game within 10 minutes.", "Bomber")
    .addField("Use 5 TnTs in a game of BedWars.", "Builder")
    .addField("Place over 200 blocks in a game of BedWars.", "Cutting It Close!")
    .addField("Win a game with less than 30 seconds before Bed Destruction.", "Diamond Hoarder")
    .addField("Collect at least 50 diamonds in a game of BedWars.", "Distraction")
    .addField("Get a kill while having your Glyph active.", "Dragon Slayer")
    .addField("Kill a Ender Dragon", "Emerald Hoarder")
    .addField("Collect at least 25 emeralds in a game of BedWars.", "First Blood")
    .addField("Be the first to kill an enemy.", "Geared Up!")
    .addField("Purchase Diamond Armour and a Diamond Sword.", "Getting The Job Done Better")
    .addField("Destroy all beds in a single game.", "Getting The Job Done")
    .addField("Destroy half the beds in a single game.", "Golem’s Rose")
    .addField("Kill 5 enemy golems in a single game.", "Great Lord Of Fire!")
    .addField("Have 10 fireballs in your inventory at a time.", "I Don’t Need A Bed")
    .addField("Survive 10 minutes without a bed..", "Iron Punch")
    .addField("Get a kill with an Iron Golem.", "It’s Dark Down")
    .addField("Fall into the void.", "Like a Ninja")
    .addField("Use a Magic Milk to make a trap not activate.", "Merciless")
    .addField("Final Kill 5 enemies in a game..", "Minefield")
    .addField("Have 3 traps activated at once.", "Thanks For Reading")


    message.channel.send(embed)
    }
    exports.help = {
      name: "hpbwachievements"
    }
