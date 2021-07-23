let os = require('os')
let util = require('util')
let fs = require('fs')

let handler = async (m, { usedPrefix, conn, text }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? Rhizo.user.jid : m.sender
  let { exp, limit, level } = global.DATABASE.data.users[m.sender]
  let reg = global.DATABASE._data.users[m.sender]
  let name = conn.getName(m.sender)

   if (reg.registered === false) throw `ᴏɪɪ, *${name}* ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ 😖\n\nᴘʟᴇᴀꜱᴇ ʀᴇɢɪꜱᴛᴇʀ ᴛᴏ ᴜꜱᴇ\n📝 ᴛᴏ ʀᴇɢɪꜱᴛᴇʀ, ᴛʏᴘᴇ *!ʀᴇɢ ɴᴀᴍᴇ|ᴀɢᴇ*\n\n🎯 ᴇxᴀᴍᴘʟᴇ :\n!ʀᴇɢ ᴀʙʜɪɴᴀᴠ|22`

  const chats = conn.chats.all()
  const groups = chats.filter(v => v.jid.endsWith('g.us'))
  const groupsIn = groups.filter(v => !v.read_only)

  let caption = `
ᴏɪɪ *${name}!*
*ɪ ᴀᴍ ꜱᴛɪʟʟ ᴀʟɪᴠᴇ ᴀɴᴅ ᴋɪᴄᴋɪɴɢ 😉💖*

ℹ️ ᴜꜱᴇʀ ɪɴꜰᴏ :

👁️‍🗨️ ɴᴀᴍᴇ: *${name}*
👁️‍🗨️ ʟɪᴍɪᴛ: *${limit}*
👁️‍🗨️ ᴇxᴘ: *${exp}*
👁️‍🗨️ ʟᴇᴠᴇʟ: *${level}*
👁️‍🗨️ ʀᴇɢɪꜱᴛᴇʀᴇᴅ: *ᴛʀᴜᴇ*

ℹ️ ʙᴏᴛ ɪɴꜰᴏ :

- ʙʀᴀɴᴄʜ : *ᴛᴏxɪᴄ-ᴅᴇᴠɪʟ-ʀʜɪᴢᴏ*
- ᴠᴇʀꜱɪᴏɴ : *1.1.0*
- ᴅᴇᴠᴇʟᴏᴘᴇʀ: *ᴛᴏxɪᴄ ᴅᴇᴠɪʟ*
- ᴘʀᴇғɪx: *${usedPrefix}*

💬 ꜱᴛᴀᴛᴜꜱ :

- ɢʀᴏᴜᴘ ᴄʜᴀᴛꜱ: *${groups.length}*
- ɢʀᴏᴜᴘꜱ ᴊᴏɪɴᴇᴅ: *${groupsIn.length}* 
- ɢʀᴏᴜᴘꜱ ʟᴇꜰᴛ: *${groups.length - groupsIn.length}* 
- ᴘᴇʀꜱᴏɴᴀʟ ᴄʜᴀᴛꜱ: *${chats.length - groups.length}*
- ᴛᴏᴛᴀʟ ᴄʜᴀᴛꜱ: *${chats.length}* 
`.trim()

     conn.sendFile(m.chat, fs.readFileSync('./src/IMG-20210516-WA0008.jpg'), 'alive.png', caption, m)
}
handler.help = ['alive', 'work']
handler.tags = ['info', 'tools']

handler.command = /^(alive|work|info)$/i
module.exports = handler
