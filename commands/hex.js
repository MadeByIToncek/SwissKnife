const DiscordJS = require('discord.js')

function toHex(str) {
    var result = '';
    for (var i=0; i<str.length; i++) {
      result += str.charCodeAt(i).toString(16);
    }
    return result;
  }

  function embdedcreated(message, msg) {
    const attachment = new DiscordJS.MessageAttachment('custom.png', 'qrcode.png');
  
    const embed = new DiscordJS.MessageEmbed()
      .setTitle("Hexadecimální výstup:")
      .setDescription(msg)
      .setColor('#00ff00')
      message.channel.send({embed});
  }

module.exports = {
    category: 'Tools',
    init: () => {
      setTimeout(() => {  console.log('[IToncek] => Hexadecimalni modul nacten') }, 200);
    },
    callback: ({ message, args }) => {
        var result = toHex(args.join(" "))
        embdedcreated(message, result)
    }
}