const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let user = message.mentions.members.first();
    if (!user) return;
    let issuer = message.author;
    let reason = args.slice(1).join(" ") || "Please provide a reason";
    let date = new Date();
    let url = message.author.displayAvatarURL || message.author.defaultAvatarURL;
    let reportChannel = message.guild.channels.find(x => x.name === 'reported-user');
    const embed = new Discord.RichEmbed()
        .setAuthor(`${message.member.displayName} Reported`, message.author.avatarURL)
        .setColor("RANDOM")
        .addField("Reported user:", user.toString())
        .addField("Reported by:", issuer)
        .addField("Reason:", reason)
        .addField("Reported In:", message.channel.toString())
        .addField("Reported on:", message.createdAt)
        .setFooter(`ID: ${user.id}`)
        .setTimestamp([date])
        .setThumbnail(`${user.user.displayAvatarURL}`)
    message.channel.send(embed).then(m => m.delete(10000));
    reportChannel.send(embed);
}
module.exports.help = {
    name: "report",
};

