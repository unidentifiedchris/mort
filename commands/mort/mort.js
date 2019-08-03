const commando = require('discord.js-commando')

class MortCommand  extends commando.Command {
  constuctor(client) {
    super(client, {
      name: 'mort',
      group: 'mort',
      memberName: 'mort',
      description: 'sends a picture of mort, the goddess of beauty'
      
    });
  }
  
  async run(message,args){
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
      ]
    message.cannel.send('mort', {
      file: random_mort[Math.floor(Math.random() * random_mort.length)]
    });
  }
}

module.exports = MortCommand
