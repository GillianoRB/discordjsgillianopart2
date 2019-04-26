exports.run = (client, message) => {
    message.channel.send('Pinging...').then(sent => {
        sent.edit(`:heartbeat: ${sent.createdTimestamp - message.createdTimestamp}ms`);
    })
  .catch(e => logger.error(e));
};
module.exports.help = {
    name: 'ping'
};
