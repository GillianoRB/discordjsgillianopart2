module.exports.run = async(bot, message, args) => {

    message.delete();
     if (<message>.author.id === '<536702810759233557>') return message.channel.send("No can do pal!");
    let botmessage = args.join(" ");
    message.channel.send(botmessage);
  }
  
  module.exports.help = {
    name: "devsay"
  }
