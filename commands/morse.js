const DiscordJS = require('discord.js')

function convert(args) {
    console.log('-------------Morse----------')
    var string = args.join('/')
    console.log("Input:      " + string)
    var lwr = string.toLowerCase();
    console.log("Lovercase:  " + lwr)
    console.log('------------------------------------')
    var a = lwr.replace(/a/g, '·-/')
    console.log(a)
    console.log('------------------------------------')
    var b = a.replace(/b/g, '-···/')
    console.log(b) 
    console.log('------------------------------------')
    var c = b.replace(/c/g, '-·-·/')
    console.log(c)
    console.log('------------------------------------') 
    var d = c.replace(/d/g, '-··/')
    console.log(d) 
    console.log('------------------------------------')
    var e = d.replace(/e/g, '·/')
    console.log(e)
    console.log('------------------------------------')   
    var f = e.replace(/f/g, '··-·/')
    console.log(f)
    console.log('------------------------------------')
    var g = f.replace(/g/g, '--·/')
    console.log(g) 
    console.log('------------------------------------')
    var h = g.replace(/h/g, '····/')
    console.log(h)
    console.log('------------------------------------') 
    var i = h.replace(/i/g, '··/')
    console.log(i) 
    console.log('------------------------------------')
    var j = i.replace(/j/g, '·---/')
    console.log(j)
    console.log('------------------------------------') 
    var k = j.replace(/k/g, '-·-/')
    console.log(k)
    console.log('------------------------------------')
    var l = k.replace(/l/g, '·-··/')
    console.log(l) 
    console.log('------------------------------------')
    var m = l.replace(/m/g, '--/')
    console.log(m)
    console.log('------------------------------------') 
    var n = m.replace(/n/g, '-·/')
    console.log(n) 
    console.log('------------------------------------')
    var o = n.replace(/o/g, '---/')
    console.log(o)
    console.log('------------------------------------')   
    var p = o.replace(/p/g, '·--·/')
    console.log(p)
    console.log('------------------------------------')
    var q = p.replace(/q/g, '--·-/')
    console.log(q) 
    console.log('------------------------------------')
    var r = q.replace(/r/g, '·-·/')
    console.log(r)
    console.log('------------------------------------') 
    var s = r.replace(/s/g, '···/')
    console.log(s) 
    console.log('------------------------------------')
    var t = s.replace(/t/g, '-/')
    console.log(t)
    console.log('------------------------------------')   
    var u = t.replace(/u/g, '··-/')
    console.log(u)
    console.log('------------------------------------')   
    var v = u.replace(/v/g, '···-/')
    console.log(v)
    console.log('------------------------------------')
    var w = v.replace(/w/g, '·--/')
    console.log(w) 
    console.log('------------------------------------')
    var x = w.replace(/x/g, '-··-/')
    console.log(x)
    console.log('------------------------------------') 
    var y = x.replace(/y/g, '-·--/')
    console.log(y) 
    console.log('------------------------------------')
    var z = y.replace(/z/g, '--··/')
    console.log(z)
    console.log('------------------------------------')  
    return "/" + z + '//'
}

function embdedcreated(message, msg) {
    const attachment = new DiscordJS.MessageAttachment('custom.png', 'qrcode.png');
  
    const embed = new DiscordJS.MessageEmbed()
      .setDescription("Pokud text nekončí s \"///\" tak není překlad kompletní z důvodů limitu discordu. \n" + msg.slice(0,1961))
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