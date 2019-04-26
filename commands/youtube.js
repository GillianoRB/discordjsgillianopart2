const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {



    let youtube = args.slice(0).join('+');

        let link = `https://www.youtube.com/results?search_query=` + youtube;
        if(!youtube)return message.reply(`Please enter a word `)
        if(!link)return message.reply("Console error")
        let embed = new Discord.RichEmbed()
 
         
     .setColor("RED")
         
          .setTimestamp()
        
          .addField('Action:', 'Searching on youtube')

          .addField("Word:", `${args.slice(0).join(' ')}`)

          .addField('Link:', `${link}`)
         
          .setFooter("You're avatar", message.author.avatarURL);
          
              message.channel.send(embed);
              message.author.send(`You have searched for ${link} in ${ message.guild.name}`);

        
    
}



module.exports.help = {
    name: "youtube"
}