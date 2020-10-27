const Discord = require("discord.js")
const fs = require("fs")
const client = new Discord.Client()
const config = require("./config.json")


 client.on('guildMemberAdd', member => {
     let channel = member.guild.channels.find('name', 'welcome');
     let memberavatar = member.user.avatarURL
         if (!channel) return;
         let embed = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setThumbnail(memberavatar)
         .addField('Welcome', `${member}`)
         .addField(':family_mwgb: | Actually there is ', `${member.guild.memberCount} people`)
         .addField("Name", `<@` + `${member.id}` + `>`, true)
         .addField('Server', `${member.guild.name}`, true )
         .setFooter(`**${member.guild.name}**`)
         .setTimestamp()
   
         channel.sendEmbed(embed);
     });
 
     client.on('guildMemberRemove', member => {
         let channel = member.guild.channels.find('name', 'welcome');
         let memberavatar = member.user.avatarURL
           if (!channel) return;
           let embed = new Discord.RichEmbed()
           .setColor('RANDOM')
           .setThumbnail(memberavatar)
           .addField('Name:', `${member}`)
           .addField('Has left the server', ';(')
           .addField('Bye Bye :(', 'see you!')
           .addField('There is now', `${member.guild.memberCount}` + "people")
           .setFooter(`**${member.guild.name}`)
           .setTimestamp()
         
           channel.sendEmbed(embed);
         });




client.on('ready', () => {
   client.user.setPresence({
        game: {
            name: config.status,
            type: "WATCHING"
        }
   })

   console.log(`You can invite this bot to your server with this link: https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`)
   console.log(`You can invite this bot to your server with this link: https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`)
   console.log(`You can invite this bot to your server with this link: https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`)
   console.log(`You can invite this bot to your server with this link: https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`)
   console.log(`You can invite this bot to your server with this link: https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`)

});

client.on("message", message => {
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;
      
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
      
    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
        console.error(err);
    }
});

client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));

client.login("NzQzNjMzMTcxNDYzMDEyNDU0.XzXgXA.gg7sciS3Be7h3BZ8hzP3H8E95Ig");
