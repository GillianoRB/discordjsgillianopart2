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
 
    bot.user.setActivity(`You`, { type: "WATCHING" });
	
 
});

bot.on('guildMemberAdd', member => {
  member.guild.channels.get('524038952647131146').send('**' + member.user.username + '**, has joined the server!'); 
});

bot.on('guildMemberRemove', member => {
  member.guild.channels.get('524038952647131146').send('**' + member.user.username + '**, has left the server');
  //
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
  if(message.channel.type === "dm") {
    let embed = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle("Direct Message To The Bot")
    .addField(`Sent By:`,`<@${message.author.id}>`)
    .setColor("RANDOM")
    .setThumbnail(message.author.displayAvatarURL)
    .addField(`Message: `,message.content)
    .setFooter(`DM Bot Messages | DM Logs`)
   
    bot.users.get("244169411026485259").send(embed)
    bot.users.get("565729165370851330").send(embed)
  
  }
  
  
  const swearWords = ["fuck", "Fuck","wtf", "motherfucker", "fucker"];
    if( swearWords.some(word => message.content.includes(word)) ) {
        message.delete();
        message.author.send('Hey! That word has been banned, please don\'t use it!');
    };
  
    
    


      
  
  if (message.content.startsWith("m!awesome")) {
    message.author.send(`FUCK YOU FOR SAYING AWESOME YOU AWESOME BITCH LASAGNA, sub to pewdiepie`)
    message.delete();
  };
	
  


  if (message.content.startsWith("hey")) {
    message.channel.send(`Hey, ${message.author.username}`)
  }

  if (message.content.startsWith("hello")) {
    message.channel.send(`Hey, ${message.author.username}`)
  }

  if (message.content.startsWith("hi")) {
    message.channel.send(`Hey, ${message.author.username}`)
  };
  
  

  if (message.content.startsWith("m!math1")) {
    message.channel.send("10+10=?, 4 options: 20, 30, 0, 4");
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
    console.log(collector)
    collector.on('collect', message => {
        if (message.content == "20") {
            message.channel.send("Good Job");
        } else if (message.content == "30") {
            message.channel.send("Well You tried...");
        } else if (message.content == "0") {
            message.channel.send("Well You tried...");
        } else if (message.content == "4") {
            message.channel.send("Well you tried...")
        }
      })
    };



    if (message.content.startsWith("m!math3")) {
      message.channel.send("100-10=?, 4 options: 90, 235, 0, 14");
      const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
      console.log(collector)
      collector.on('collect', message => {
          if (message.content == "90") {
              message.channel.send("Good Job");
          } else if (message.content == "235") {
              message.channel.send("Well You tried...");
          } else if (message.content == "0") {
              message.channel.send("Well You tried...");
          } else if (message.content == "14") {
              message.channel.send("Well you tried...")
          }
        })
      };

      if (message.content.startsWith("m!math4")) {
        message.channel.send("1284uwqsdjahwr8u4214-4218487sa2=?, 4 options: -40, 210, 1, 0");
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        console.log(collector)
        collector.on('collect', message => {
            if (message.content == "-40") {
                message.channel.send("Good Job");
            } else if (message.content == "210") {
                message.channel.send("Well You tried...");
            } else if (message.content == "1") {
                message.channel.send("Well You tried...");
            } else if (message.content == "0") {
                message.channel.send("Well you tried...")
            }
          })
        };
	


   

        if (message.content.startsWith("m!math5")) {
          message.channel.send("666-666=?, 4 options: 0, -0, 10, 244");
          const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
          console.log(collector)
          collector.on('collect', message => {
              if (message.content == "0") {
                  message.channel.send("Good Job");
              } else if (message.content == "-0") {
                  message.channel.send("Well You tried...");
              } else if (message.content == "10") {
                  message.channel.send("Well You tried...");
              } else if (message.content == "244") {
                  message.channel.send("Well you tried...")
              }
            })
          };

          if (message.content.startsWith("m!math6")) {
            message.channel.send("X-3=?, 4 options: 7, 10, 50, 42");
            const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
            console.log(collector)
            collector.on('collect', message => {
                if (message.content == "7") {
                    message.channel.send("Good Job");
                } else if (message.content == "10") {
                    message.channel.send("Well You tried...");
                } else if (message.content == "50") {
                    message.channel.send("Well You tried...");
                } else if (message.content == "42") {
                    message.channel.send("Well you tried...")
                }
              })
            };

            if (message.content.startsWith("m!math7")) {
              message.channel.send("VII-7=?, 4 options: 124, 30512, 0, 42");
              const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
              console.log(collector)
              collector.on('collect', message => {
                  if (message.content == "0") {
                      message.channel.send("Good Job");
                  } else if (message.content == "124") {
                      message.channel.send("Well You tried...");
                  } else if (message.content == "30512") {
                      message.channel.send("Well You tried...");
                  } else if (message.content == "42") {
                      message.channel.send("Well you tried...")
                  }
                })
              };

              if (message.content.startsWith("m!math8")) {
                message.channel.send("90-10+10-10+50-32=?, 4 options: 130, 230, 5, 412");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
                console.log(collector)
                collector.on('collect', message => {
                    if (message.content == "130")  {
                        message.channel.send("Good Job");
                    } else if (message.content == "230") {
                        message.channel.send("Well You tried...");
                    } else if (message.content == "5") {
                        message.channel.send("Well You tried...");
                    } else if (message.content == "412") {
                        message.channel.send("Well you tried...")
                    }
                  })
                };

                if (message.content.startsWith("m!math9")) {
                  message.channel.send("X-100=?, 4 options: -90, -30, -0, 124");
                  const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
                  console.log(collector)
                  collector.on('collect', message => {
                      if (message.content == "-90") {
                          message.channel.send("Good Job");
                      } else if (message.content == "-30") {
                          message.channel.send("Well You tried...");
                      } else if (message.content == "-0") {
                          message.channel.send("Well You tried...");
                      } else if (message.content == "124") {
                          message.channel.send("Well you tried...")
                      }
                    })
                  };
	   
	         
		

              

    if (message.content.startsWith("m!math2")) {
      message.channel.send("1294÷125=?, 4 options: 10.352, 301, 12.354, 205");
      const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
      console.log(collector)
      collector.on('collect', message => {
          if (message.content == "205") {
              message.channel.send("Well You tried...");
          } else if (message.content == "301") {
              message.channel.send("Well You tried...");
          } else if (message.content == "10.352") {
              message.channel.send("Great Job");
          } else if (message.content == "12.352") {
              message.channel.send("Well you tried...")
          }
        })
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

  if(cmd === `${prefix}report`){

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.got (args[0]));
    if(!rUser) return message.channel.send("Couldn't find user");
    let reason = args.join (" ").slice(22);
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No Can Do Pal!");
    if(rUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That Person Cant Be Report Server Owner/ Higher then my role!");

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("$15f153")
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported by", `${message.author} with ID: ${message.author.id}`)
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
    .addField("m!report (user) (reason)", "reporting")
    .addField("m!Lockdown (time: s, m, h)")
    .addField("m!poll (question)")
    .addField("m!mute (user)")
    .addField("m!addrole (user) (role name)")
    .addField("m!removerole (user) (role name)");

    message.channel.send(helpmodEmbed);
  };

  if(cmd === `${prefix}help-fun`){
    let helpmodEmbed = new Discord.RichEmbed()
    .setDescription("Help fun")
    .setColor("#f48c42")
    .addField("m!avatar (user)", "avatar of user")
    .addField("m!rps", "rock paper scissor")
    .addField("m!roast (user)")
    .addField("m!slap (user)", "clap")
    .addField("m!kiss (user)", "kisses user")
    .addField("m!hug (user)", "hugs user")
    .addField("m!coinflip", "flips coin")
    .addField("m!google (something)", "searches at google")
    .addField("m!ratewaifu (user)", "rates user ")
    .addField("m!info (user)", "gives user info")
    .addField("m!dadjoke")
    .addField("m!8ball (question)")
    .addField("m!bingo")
    .addField("m!serverinfo (user)", "gives guild info");

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


  if(cmd === `${prefix}help-math`){
    let helpmodEmbed = new Discord.RichEmbed()
    .setDescription("Help math")
    .setColor("#f48c42")
    .addField("m!math1", "math 1 = easy")
    .addField("m!math2", "math 2 = medium")
    .addField("m!math3", "math 3 = hard")
    .addField("m!math4", "math 4 = very hard")
    .addField("m!math5", "math 5 = most hard")
    .addField("m!math6", "math 6 = good luck about this 1")
    .addField("m!math7", "math 7 = well gg ")
    .addField("m!math8", "math 8 = ULTRA HARD")
    .addField("m!math9", "math 9 = medium hard");

    message.channel.send(helpmodEmbed);
  };

  if(cmd === `${prefix}help`){
    let helpEmbed = new Discord.RichEmbed()
    .setDescription("Help")
    .setColor("#f48c42")
    .addField("m!help-mod", "only for mod")
    .addField("m!help-fun", "for fun")
    .addField("m!help-math", "for maths");

    message.channel.send(helpEmbed);
  };



  
  

  if(cmd === `${prefix}clear`){
  
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
