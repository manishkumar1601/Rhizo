const { createHash } = require('crypto')
let handler = async function (m, { args }) {
  let user = global.DATABASE.data.users[m.sender]
  let name = conn.getName(m.sender)

if (user.registered === false) throw `ᴏɪɪ, *${name}* ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ 😖\n\nᴘʟᴇᴀꜱᴇ ʀᴇɢɪꜱᴛᴇʀ ᴛᴏ ᴜꜱᴇ\n📝 ᴛᴏ ʀᴇɢɪꜱᴛᴇʀ, ᴛʏᴘᴇ *!ʀᴇɢ ɴᴀᴍᴇ|ᴀɢᴇ*\n\n🎯 ᴇxᴀᴍᴘʟᴇ :\n!ʀᴇɢ ᴀʙʜɪɴᴀᴠ|22`

  if (!args[0]) throw '💬 ᴍᴜꜱᴛ ᴇɴᴛᴇʀ ʏᴏᴜʀ ᴘᴀꜱꜱᴡᴏʀᴅ\n\n📝 ᴛʏᴘᴇ !ᴘᴀꜱꜱᴡᴏʀᴅ ꜰᴏʀ ɢᴇᴛᴛɪɴɢ ᴘᴀꜱꜱᴡᴏʀᴅ ᴛᴏ ᴜɴʀᴇɢɪꜱᴛᴇʀ.'
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw '❌️ ɪɴᴄᴏʀʀᴇᴄᴛ ᴘᴀꜱꜱᴡᴏʀᴅ, ᴍᴜꜱᴛ ᴛʏᴘᴇ ᴀ ᴠᴀɪʟᴅ ᴘᴀꜱꜱᴡᴏʀᴅ\n\n📝 ᴛʏᴘᴇ !ᴘᴀꜱꜱᴡᴏʀᴅ ꜰᴏʀ ɢᴇᴛᴛɪɴɢ ᴘᴀꜱꜱᴡᴏʀᴅ ᴛᴏ ᴜɴʀᴇɢɪꜱᴛᴇʀ.'
  user.registered = false
  m.reply(`✅️ ꜱᴜᴄᴇꜱꜱꜰᴜʟʟʏ ᴜɴʀᴇɢɪꜱᴛᴇʀᴇᴅ`)
}
handler.help = ['', 'reg'].map(v => 'un' + v + ' <SN|SERIAL NUMBER>')
handler.tags = ['exp']

handler.command = /^unreg(ister)?$/i
handler.register = true

module.exports = handler
