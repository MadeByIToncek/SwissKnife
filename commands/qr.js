var qr = require('qr-image');
const DiscordJS = require('discord.js')

function coord2offset(x, y, size) {
  return (size + 1) * y + x + 1;
}

function customize(bitmap) {
  const size = bitmap.size;
  const data = bitmap.data;

  for (let x = 0; x < size; x++) {
      for (let y = 0; y < x; y++) {
          const offset = coord2offset(x, y, size);
          // If it's white change it's color
          if (data[offset]) {
              data[offset] = 255 - Math.abs(x - y);
          }
      }
  }
}

function sendimage(message) {
  const attachment = new DiscordJS.MessageAttachment('custom.png', 'qrcode.png');

  const embed = new DiscordJS.MessageEmbed()
    .setTitle('Tady je tvůj QRkód')
    .attachFiles(attachment)
    .setImage('attachment://qrcode.png');
    message.channel.send({embed});
}

module.exports = {
  category: 'Fun',
  minargs: 1,
  maxargs: 2,
  init: () => {
    setTimeout(() => {  console.log('[IToncek] => QRcode modul nacten') }, 50);
  },
  callback: ({ message, args }) => {
    console.log("[IToncek] => Někdo použil příkaz \"/qr " + args.join(" ") + "\"")
    qr.image(args.join(" "), {
      type: 'png',
    }).pipe(require('fs').createWriteStream('custom.png'))
    message.channel.startTyping();
    setTimeout(() => {  sendimage(message); }, 2000);
    message.channel.stopTyping();
  }
}