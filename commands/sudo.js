const Discord = require('discord.js');

exports.run = async (bot, message, args, ops) => {

    message.delete();
    
    const embed = new Discord.RichEmbed()
        .setColor("#ffffff") //To change color do .setcolor("#fffff")
        .setFooter('^^^^^^^^^^')
        .setDescription(args.join(' '))
        .setTitle(`${message.author.username} Said`);

        let msg = await message.channel.send(embed)
}

module.exports.help = {
    name: "sudo"
  }
