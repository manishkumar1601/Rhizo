const uploadImage = require('../lib/uploadImage')
const fetch = require('node-fetch')
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
let name = conn.getName(m.sender)
let user = global.DATABASE._data.users[m.sender]

if (user.registered === false) throw `ᴏɪɪ, *${name}* ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ 😖\n\nᴘʟᴇᴀꜱᴇ ʀᴇɢɪꜱᴛᴇʀ ᴛᴏ ᴜꜱᴇ\n📝 ᴛᴏ ʀᴇɢɪꜱᴛᴇʀ, ᴛʏᴘᴇ *!ʀᴇɢ ɴᴀᴍᴇ|ᴀɢᴇ*\n\n🎯 ᴇxᴀᴍᴘʟᴇ :\n!ʀᴇɢ ᴀʙʜɪɴᴀᴠ|22`

  try {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    let url = await fetch(global.API('https://salism3api.pythonanywhere.com', '/text2gif/', { text: teks }))
    res = await url.json()
    stick = res.image
    let stiker = await sticker(null, stick, global.packname, global.author)
    conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  } catch (e) {
    m.reply('⚠️ ᴀɴ ᴜɴᴋɴᴏᴡɴ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀᴇᴅ ⚠️ ᴘʟᴇᴀꜱᴇ ᴛʏᴘᴇ !ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴀɴᴅ ʀᴇᴘᴏʀᴛ ᴛʜɪꜱ ɪꜱꜱᴜᴇ ᴛᴏ ᴛʜᴇ ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴛᴏ ꜱᴏʟᴠᴇ 😖')
    throw false
  }
}
handler.help = ['rainbow <teks>']
handler.tags = ['sticker']
handler.command = /^rainbow$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
