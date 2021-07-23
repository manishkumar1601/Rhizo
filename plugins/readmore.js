let handler = async (m, { conn, text }) => {
let name = conn.getName(m.sender)
let user = global.DATABASE._data.users[m.sender]

if (user.registered === false) throw `ᴏɪɪ, *${name}* ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ 😖\n\nᴘʟᴇᴀꜱᴇ ʀᴇɢɪꜱᴛᴇʀ ᴛᴏ ᴜꜱᴇ\n📝 ᴛᴏ ʀᴇɢɪꜱᴛᴇʀ, ᴛʏᴘᴇ *!ʀᴇɢ ɴᴀᴍᴇ|ᴀɢᴇ*\n\n🎯 ᴇxᴀᴍᴘʟᴇ :\n!ʀᴇɢ ᴀʙʜɪɴᴀᴠ|22`

  let [ l, r ] = text.split`|`
  if (!l) l = `💬 ʏᴏᴜ ᴍᴜꜱᴛ ᴛʏᴘᴇ 2 ᴡᴏʀᴅꜱ ʙʏ ꜱᴘʟɪᴛᴛɪɴɢ ᴡɪᴛʜ | ꜱʏᴍʙᴏʟ\n\nɴᴀᴍᴇ1|ɴᴀᴍᴇ2\n\nᴇxᴀᴍᴘʟᴇ:\n\nᴛᴏxɪᴄ|ᴅᴇᴠɪʟ`
  if (!r) r = `💬 ʏᴏᴜ ᴍᴜꜱᴛ ᴛʏᴘᴇ 2 ᴡᴏʀᴅꜱ ʙʏ ꜱᴘʟɪᴛᴛɪɴɢ ᴡɪᴛʜ | ꜱʏᴍʙᴏʟ\n\nɴᴀᴍᴇ1|ɴᴀᴍᴇ2\n\nᴇxᴀᴍᴘʟᴇ:\n\nᴛᴏxɪᴄ|ᴅᴇᴠɪʟ`
  conn.reply(m.chat, l + readMore + r, m)
}
handler.help = ['readmore','spoiler'].map(v => v + ' <teks>|<teks>')
handler.tags = ['tools']
handler.command = /^(spoiler|hidetext|readmore|selengkapnya)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
