const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler = async (m, { conn, text }) => {
let reg = global.DATABASE._data.users[m.sender]
let name = conn.getName(m.sender)

if (reg.registered === false) throw `ᴏɪɪ, *${name}* ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ 😖\n\nᴘʟᴇᴀꜱᴇ ʀᴇɢɪꜱᴛᴇʀ ᴛᴏ ᴜꜱᴇ\n📝 ᴛᴏ ʀᴇɢɪꜱᴛᴇʀ, ᴛʏᴘᴇ *!ʀᴇɢ ɴᴀᴍᴇ|ᴀɢᴇ*\n\n🎯 ᴇxᴀᴍᴘʟᴇ :\n!ʀᴇɢ ᴀʙʜɪɴᴀᴠ|22`

  let stiker = false
  try {
    let [packname, ...author] = text.split('/')
    author = (author || []).join('/')
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) throw '💬 ᴍᴜꜱᴛ ʀᴇᴘʟʏ ᴛᴏ ᴀ ꜱᴛɪᴄᴋᴇʀ!'
    let img = await m.quoted.download()
    stiker = await sticker(img, false, packname || global.packname, author || global.author)
  } finally {
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    else throw '⚠️ ᴀɴ ᴜɴᴋɴᴏᴡɴ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀᴇᴅ ⚠️ ᴘʟᴇᴀꜱᴇ ᴛʏᴘᴇ !ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴀɴᴅ ʀᴇᴘᴏʀᴛ ᴛʜɪꜱ ɪꜱꜱᴜᴇ ᴛᴏ ᴛʜᴇ ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴛᴏ ꜱᴏʟᴠᴇ 😖'
  }
}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^wm$/i

module.exports = handler
