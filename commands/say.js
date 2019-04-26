module.exports.run = async(bot, message, args) => {

    message.delete();
    if (message.author.id !== '244169411026485259' && message.author.id !== '201060604323168257') return;
    let botmessage = args.join(" ");
    message.channel.send(botmessage);
  }
  
  module.exports.help = {
    name: "say"
  }
