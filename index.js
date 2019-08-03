const commando = require('discord.js-commando')
const Discord = require('discord.js')
const bot = new  commando.Client({
  commandPrefix: 'mort:'
 });
 
 const TOKEN = 'NjA3MDE3OTgyMzQ2MDAyNDU2.XUTf7A.wMllNe-3uh9hO2alvyG4NWF8r_4'
 
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');
 
 bot.on('ready', function(){
  console.log('mort is god');
  bot.user.setActivity(`mort`, type: "WATCHING");
  .catch(console.error);
  });
 
bot.on('guildMemberAdd', function(member)
{
	member.send("mort https://cdn.discordapp.com/attachments/603000331055530007/603810563574726666/unknown.png")
}); 
 
bot.login(TOKEN)
 
