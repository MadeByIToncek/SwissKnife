function toHex(str) {
    var result = '';
    for (var i=0; i<str.length; i++) {
      result += str.charCodeAt(i).toString(16);
    }
    return result;
  }

module.exports = {
    category: 'Tools',
    minargs: 1,
    maxargs: 2,
    init: () => {
      setTimeout(() => {  console.log('[IToncek] => Hexadecimalni modul nacten') }, 200);
    },
    callback: ({ message, args }) => {
        var result = toHex(args.join(" "))
        message.channel.send(result)
    }
}