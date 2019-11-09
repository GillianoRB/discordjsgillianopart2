module.exports.run = async(bot, message, args) => {

    message.delete();
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No can do pal!");
    let botmessage = args.join(" ");
    message.channel.send(botmessage);
  }
  
  module.exports.help = {
    name: "say"
  }
