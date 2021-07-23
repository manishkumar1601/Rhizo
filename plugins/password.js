const { createHash } = require('crypto')
let handler = async (m, { conn, command, args }) => {
let name = conn.getName(m.sender)
let user = global.DATABASE._data.users[m.sender]

if (user.registered === false) throw `ᴏɪɪ, *${name}* ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ 😖\n\nᴘʟᴇᴀꜱᴇ ʀᴇɢɪꜱᴛᴇʀ ᴛᴏ ᴜꜱᴇ\n📝 ᴛᴏ ʀᴇɢɪꜱᴛᴇʀ, ᴛʏᴘᴇ *!ʀᴇɢ ɴᴀᴍᴇ|ᴀɢᴇ*\n\n🎯 ᴇxᴀᴍᴘʟᴇ :\n!ʀᴇɢ ᴀʙʜɪɴᴀᴠ|22`

 let ps = createHash('md5').update(m.sender).digest('hex')

  m.reply(`\n💬 ʏᴏᴜʀ ᴘᴀꜱᴡᴏʀᴅ ɪꜱ *${ps}*\n`)
}
handler.help = ['psw', 'ps', 'password'].map(v => v + ' tesks')
handler.tags = ['tools']

handler.private = false

handler.command = /^(password)$/i

module.exports = handler
