function hash32(str, asString, seed) {
  /*jshint bitwise:false */
  var i, l,
      hval = (seed === undefined) ? 0x811c9dc5 : seed;

  for (i = 0, l = str.length; i < l; i++) {
      hval ^= str.charCodeAt(i);
      hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
  }
  if( asString ){
      // Convert to 8 digit hex string
      return ("0000000" + (hval >>> 0).toString(16)).substr(-8);
  }
  return hval >>> 0;
}

module.exports = {
  category: 'Tools',
  minargs: 1,
  maxargs: 2,
  init: () => {
    setTimeout(() => {  console.log('[IToncek] => Hash modul nacten') }, 100);
  },
  callback: ({ message, args }) => {
    message.channel.send(hash32(args.join(" "), true))
  }
}