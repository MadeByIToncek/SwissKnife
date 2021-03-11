function convert(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
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
        message.channel.send(result)
    }
}