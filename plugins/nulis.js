let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

// Font By TOXIC-DEVIL
let fontPath = 'src/font/Zahraaa.ttf'
let handler = async (m, { conn, args }) => {
let name = conn.getName(m.sender)
let reg = global.DATABASE._data.users[m.sender]

if (reg.registered === false) throw `ᴏɪɪ, *${name}* ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ 😖\n\nᴘʟᴇᴀꜱᴇ ʀᴇɢɪꜱᴛᴇʀ ᴛᴏ ᴜꜱᴇ\n📝 ᴛᴏ ʀᴇɢɪꜱᴛᴇʀ, ᴛʏᴘᴇ *!ʀᴇɢ ɴᴀᴍᴇ|ᴀɢᴇ*\n\n🎯 ᴇxᴀᴍᴘʟᴇ :\n!ʀᴇɢ ᴀʙʜɪɴᴀᴠ|22`

  await m.reply('*🔄 ᴘʀᴏᴄᴇꜱꜱɪɴɢ...*')
  if (!global.support.convert &&
      !global.support.magick &&
      !global.support.gm) return handler.disabled = true // Disable if doesnt support
  let inputPath = 'src/kertas/magernulis1.jpg'
  let d = new Date
  let tgl = d.toLocaleDateString('en-En')
  let hari = d.toLocaleDateString('en-En', { weekday: 'long' })
  let teks = args.join` `
  // conn.reply(m.chat, util.format({fontPath, inputPath, outputPath, tgl, hari, teks}), m)
  let bufs = []
  const [_spawnprocess, ..._spawnargs] = [...(global.support.gm ? ['gm'] : global.support.magick ? ['magick'] : []),
    'convert',
    inputPath,
    '-font',
    fontPath,
    '-size',
    '1024x784',
    '-pointsize',
    '20',
    '-interline-spacing',
    '1',
    '-annotate',
    '+806+78',
    hari,
    '-font',
    fontPath,
    '-size',
    '1024x784',
    '-pointsize',
    '18',
    '-interline-spacing',
    '1',
    '-annotate',
    '+806+102',
    tgl,
    '-font',
    fontPath,
    '-size',
    '1024x784',
    '-pointsize',
    '20',
    '-interline-spacing',
    '-7.5',
    '-annotate',
    '+344+142',
    teks,
    'jpg:-'
  ]
  spawn(_spawnprocess, _spawnargs)
    .on('error', e => conn.reply(m.chat, util.format(e), m))
    .on('close', () => {
      conn.sendFile(m.chat, Buffer.concat(bufs), 'nulis.jpg', '*Made by Rhizo*', m)
    })
    .stdout.on('data', chunk => bufs.push(chunk))
}
handler.help = ['n'].map(v => v + 'ulis <teks>')
handler.tags = ['nulis']
handler.command = /^nulis$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
