module.exports.run = async(bot, message, args) => {
    if (args.length < 2) return /* error message */;

    // Careful using this; if just an announcement is provided
    // and it mentions a channel, that channel will be used.
    let channel = message.mentions.channels.first();
    if (!channel) return /* error message */;
  
    let announcement = args.slice(1).join(" ");
  
    channel.send(announcement)
      .catch(console.error);
  }

  module.exports.help = {
    name: "ann"
  }
