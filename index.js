const commando = require('discord.js-commando')
const Discord = require('discord.js')
const bot = new  commando.Client({
  commandPrefix: ':3'
 });

bot.on('ready', function(){
	console.log('mort is god');
	bot.user.setActivity(`half life 2`, {
type: "STREAMING",
url: "https://www.twitch.tv/callmecarsonlive"})
    .catch(console.error);
});
 
bot.on('message', function(message){
  if(message.content == 'mort'){
    const random_mort = [
      'https://cdn.discordapp.com/attachments/607005011582517268/607018072259428354/catbruh.jpg',
      'https://cdn.discordapp.com/attachments/607005011582517268/607018362698203136/image0.jpg',
      'https://cdn.discordapp.com/attachments/607005011582517268/607018425931399171/mort.png',
      'https://cdn.discordapp.com/attachments/607005011582517268/607018454767108111/morts_truth.png',
      'https://cdn.discordapp.com/attachments/607005011582517268/607018485750693929/morts_departure.png',
      'https://cdn.discordapp.com/attachments/603000331055530007/605112126792531970/unknown.png',
      'https://cdn.discordapp.com/attachments/603000331055530007/605061292914507779/unknown.png',
      'https://cdn.discordapp.com/attachments/603000331055530007/604917681061363713/mortWW2bruh.png',
      'https://cdn.discordapp.com/attachments/603000331055530007/604637660556034048/mortprivatejet.png',
      'https://cdn.discordapp.com/attachments/603000331055530007/603810563574726666/unknown.png',
	    'https://cdn.discordapp.com/attachments/603000331055530007/607062024530165780/unknown.png',
	    'https://cdn.discordapp.com/attachments/603000331055530007/606815553197309952/image0.jpg',
	    'https://cdn.discordapp.com/attachments/603000331055530007/606815373689356298/image0.jpg',
	    
      ]
    message.channel.send('god', {
      file: random_mort[Math.floor(Math.random() * random_mort.length)]
    });
  }
});

bot.on('guildMemberAdd', function(member)
{
	member.send("mort https://cdn.discordapp.com/attachments/603000331055530007/603810563574726666/unknown.png")
}); 
 
bot.login('NjA3MDMyMzk5ODMzODU4MDU5.XUTtaA.VjpTkuCS7H_Z6ChwyqFAC-5d0mQ')
 
