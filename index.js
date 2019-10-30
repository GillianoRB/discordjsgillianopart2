const botconfig = require("./botconfig.json");
const YTDL = require("ytdl-core");;
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({ disableEveryone: true });
bot.commands = new Discord.Collection();
let purple = botconfig.purple;




fs.readdir("./commands/", (err, files) => {
	

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
    });
});

	



bot.on("ready", () => {
    

 
    console.log(`${bot.user.username} has started, with ${bot.users.size}  users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`); 
 
    bot.user.setActivity(`My prefix is /`, { type: "PLAYING" });
	
 
});

bot.on('guildMemberAdd', (guildMember) => {
  guildMember.guild.channels.get('639205000287092756').send('**' + guildMember.username + '**, has joined the server!')
  guildMember.addRole(guildMember.guild.roles.find(role => role.name === "Noob"));
});




bot.on("messageDelete", (messageDelete) => {

  let DeleteEmbed = new Discord.RichEmbed()
  .setTitle("**DELETED MESSAGE**")
  .setColor("#fc3c3c")
  .addField("Author", messageDelete.author.tag, true)
  .addField("Channel", messageDelete.channel, true)
  .addField("Message", messageDelete.content)
  .setFooter(`Message ID: ${messageDelete.id} | Author ID: ${messageDelete.author.id}`);

  let DeleteChannel = messageDelete.guild.channels.find(x => x.name === "logs");
  DeleteChannel.send(DeleteEmbed);
});



bot.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm");
  
  
  
  
  const swearWords = ["Chillergilly", "ChillerGilly", "Gilly", "Chiller", "chiller", "gilly"];
    if( swearWords.some(word => message.content.includes(word)) ) {
        message.delete();
        message.author.send('Hey! That word has been banned, please don\'t use it!');
    };
  
    
    


      
  
  

  if (message.content.startsWith("hi")) {
    message.channel.send(`Hey, ${message.author.username}`)
  };
  
  

  


    


      


  

  let prefix = botconfig.prefix;
  if(!message.content.startsWith(prefix)) return;
 

  


  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  


  

 

  if(cmd === `${prefix}time`){
    var today = new Date()
let Day = today.toString().split(" ")[0].concat("day");
let Month = today.toString().split(" ")[1]
let Year = today.toString().split(" ")[3]
message.channel.send(`\`${Day}\` \`${Month}\` \`${Year}\`\n\`Time of day:\` \`${today.toString().split(" ")[4]}\``)
  };
  

  

  if(cmd === `${prefix}botinfo`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt);

    return message.channel.send(botembed)
  };

  if(cmd === `${prefix}warn`){

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.got (args[0]));
    if(!rUser) return message.channel.send("Couldn't find user");
    let reason = args.join (" ").slice(22);
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No Can Do Pal!");
    if(rUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That Person Cant Be Report Server Owner/ Higher then my role!");

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Warned")
    .setColor("$15f153")
    .addField("Warned User", `${rUser} with ID: ${rUser.id}`)
    .addField("warned by", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", reason);

    let reportschannel = message.guild.channels.find("name", "logs");
    if(!reportschannel) return message.channel.send("Couldn't find logs channel.");

    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

    return;

  };

  if(cmd === `${prefix}help-mod`){
    let helpmodEmbed = new Discord.RichEmbed()
    .setDescription("Help Mod")
    .setColor("#f48c42")
    .addField("/report (user) (reason)", "reporting")
    .addField("/Lockdown (time: s, m, h)")
    .addField("/poll (question)")
    .addField("/ban (user)")
    .addField("/kick")
    .addField("/tempmute (user) (time)")
    .addField("/dm (user) (message)");

    message.channel.send(helpmodEmbed);
  };

  if(cmd === `${prefix}help-fun`){
    let helpmodEmbed = new Discord.RichEmbed()
    .setDescription("Help fun")
    .setColor("#f48c42")
    .addField("/avatar (user)", "avatar of user")
    .addField("/info (user)", "gives user info")
    .addField("/serverinfo", "gives guild info");

    message.channel.send(helpmodEmbed);
  };
	

  if(cmd === `${prefix}dm`){
    let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!dUser) return message.channel.send("Can't find user!")
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You can't you that command!")
    let dMessage = args.join(" ").slice(22);
    if(dMessage.length < 1) return message.reply('You must supply a message!')

    dUser.send(`${dMessage}`)

    message.author.send(`${message.author} You have sent your message to ${dUser}`);

 };


  

  if(cmd === `${prefix}help`){
    let helpEmbed = new Discord.RichEmbed()
    .setDescription("Help")
    .setColor("#f48c42")
    .addField("/help-mod", "only for mod")
    .addField("/help-fun", "for fun");

    message.channel.send(helpEmbed);
  };



  
  

  if(cmd === `${prefix}purge`){
  
    if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");
    if(!args[0]) return message.channel.send("oof");
    message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
  })
};


});

bot.on('error', err => {
    console.log(err);
});

bot.login(process.env.TOKEN);
