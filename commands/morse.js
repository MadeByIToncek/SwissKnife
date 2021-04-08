const DiscordJS = require('discord.js')

function convert(args) {
    console.log('-------------McLangTrans----------')
    var string = args.join('/')
    console.log("Input:      " + string)
    var lwr = string.toLowerCase();
    console.log("Lovercase:  " + lwr)
    console.log('------------------------------------')
    var a = lwr.replace('a', '·-/')
    console.log(a)
    console.log('------------------------------------')
    var b = a.replace('b', '-···/')
    console.log(b) 
    console.log('------------------------------------')
    var c = b.replace('c', '-·-·/')
    console.log(c)
    console.log('------------------------------------') 
    var d = c.replace('d', '-··/')
    console.log(d) 
    console.log('------------------------------------')
    var e = d.replace('e', '·/')
    console.log(e)
    console.log('------------------------------------')   
    var f = e.replace('f', '··-·/')
    console.log(f)
    console.log('------------------------------------')
    var g = f.replace('g', '--·/')
    console.log(g) 
    console.log('------------------------------------')
    var h = g.replace('h', '····/')
    console.log(h)
    console.log('------------------------------------') 
    var i = h.replace('i', '··/')
    console.log(i) 
    console.log('------------------------------------')
    var j = i.replace('j', '·---/')
    console.log(j)
    console.log('------------------------------------') 
    var k = j.replace('k', '-·-/')
    console.log(k)
    console.log('------------------------------------')
    var l = k.replace('l', '·-··/')
    console.log(l) 
    console.log('------------------------------------')
    var m = l.replace('m', '--/')
    console.log(m)
    console.log('------------------------------------') 
    var n = m.replace('n', '-·/')
    console.log(n) 
    console.log('------------------------------------')
    var o = n.replace('o', '---/')
    console.log(o)
    console.log('------------------------------------')   
    var p = o.replace('p', '·--·/')
    console.log(p)
    console.log('------------------------------------')
    var q = p.replace('q', '--·-/')
    console.log(q) 
    console.log('------------------------------------')
    var r = q.replace('r', '·-·/')
    console.log(r)
    console.log('------------------------------------') 
    var s = r.replace('s', '···/')
    console.log(s) 
    console.log('------------------------------------')
    var t = s.replace('t', '-/')
    console.log(t)
    console.log('------------------------------------')   
    var u = t.replace('u', '··-/')
    console.log(u)
    console.log('------------------------------------')   
    var v = u.replace('v', '···-/')
    console.log(v)
    console.log('------------------------------------')
    var w = v.replace('w', '·--/')
    console.log(w) 
    console.log('------------------------------------')
    var x = w.replace('x', '-··-/')
    console.log(x)
    console.log('------------------------------------') 
    var y = x.replace('y', '-·--/')
    console.log(y) 
    console.log('------------------------------------')
    var z = y.replace('z', '--··/')
    console.log(z)
    console.log('------------------------------------')  
    return "/" + z + '//'
}

function embdedcreated(message, msg) {
    const attachment = new DiscordJS.MessageAttachment('custom.png', 'qrcode.png');
  
    const embed = new DiscordJS.MessageEmbed()
      .setDescription(msg)
      .setTitle("Morseovka:")
      .setColor('#00ff00')
      message.channel.send({embed});
  }

module.exports = {
    category: 'Tools',
    minargs: 1,
    maxargs: 2,
    init: () => {
      setTimeout(() => {  console.log('[IToncek] => Morse modul nacten') }, 250);
    },
    callback: ({ message, args }) => {
        var msg = convert(args)
        message.channel.startTyping();
        setTimeout(function(){
            message.channel.stopTyping();
            embdedcreated(message, msg);
        }, 3000);
    }
}