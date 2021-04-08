const DiscordJS = require('discord.js')

function convert(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
}

function embdedcreated(message, msg) {
    const attachment = new DiscordJS.MessageAttachment('custom.png', 'qrcode.png');
  
    const embed = new DiscordJS.MessageEmbed()
      .setDescription(msg)
      .setColor('#00ff00')
      message.channel.send({embed});
  }

module.exports = {
    category: 'Tools',
    minargs: 1,
    maxargs: 2,
    init: () => {
      setTimeout(() => {  console.log('[IToncek] => Binarni modul nacten') }, 150);
    },
    callback: ({ message, args }) => {
        var result = convert(args.join(" "))
        embdedcreated(message, result)
    }
}