let handler = async (m, { conn, usedPrefix, command, text, args, isROwner }) => {
  let isEnable = /true|enable|(turn)?on/i.test(command)
  let chat = global.DATABASE._data.chats[m.chat]
  let name = conn.getName(m.sender)
  let user = global.DATABASE._data.users[m.sender]

if (user.registered === false) throw `ᴏɪɪ, *${name}* ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ 😖\n\nᴘʟᴇᴀꜱᴇ ʀᴇɢɪꜱᴛᴇʀ ᴛᴏ ᴜꜱᴇ\n📝 ᴛᴏ ʀᴇɢɪꜱᴛᴇʀ, ᴛʏᴘᴇ *!ʀᴇɢ ɴᴀᴍᴇ|ᴀɢᴇ*\n\n🎯 ᴇxᴀᴍᴘʟᴇ :\n!ʀᴇɢ ᴀʙʜɪɴᴀᴠ|22`

  let type = (args[0] || '').toLowerCase()
  let isAll = false
  let isUser = false
  switch (type) {
    case 'welcome':
      chat.welcome = isEnable
      break
    case 'detect':
      chat.detect = isEnable
      break
    case 'delete':
      chat.delete = isEnable
      break
    case 'antidelete':
      chat.delete = !isEnable
      break
    case 'autodelvn':
      chat.autodelvn = isEnable
      break
    case 'document':
      chat.useDocument = isEnable
      break
    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'antilink':
      chat.antiLink = isEnable
      break
    case 'autolevelup':
      isUser = true
      user.autolevelup = isEnable
      break
    default:
      return conn.reply(`
⌨️ ʟɪꜱᴛ ᴏᴘᴛɪᴏɴ: ᴡᴇʟᴄᴏᴍᴇ | ᴅᴇʟᴇᴛᴇ | ᴘᴜʙʟɪᴄ | ᴀɴᴛɪʟɪɴᴋ | ᴀᴜᴛᴏʟᴇᴠᴇʟᴜᴘ | ᴅᴇᴛᴇᴄᴛ | ᴅᴏᴄᴜᴍᴇɴᴛ
💬 ᴇxᴀᴍᴘʟᴇ:
${usedPrefix}ᴏɴ ᴡᴇʟᴄᴏᴍᴇ
${usedPrefix}ᴏꜰꜰ ᴡᴇʟᴄᴏᴍᴇ
`.trim())
  }
  conn.reply(`
✅️ *${type}* ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟ ɪɴ *${isEnable ? 'ᴛᴜʀɴɪɴɢ ᴏɴ' : 'ᴛᴜʀɴɪɴɢ ᴏꜰꜰ'}ʀɪɢʜᴛ* ${isAll ? 'ꜰᴏʀ ᴛʜɪꜱ ʙᴏᴛ' : isUser ? '' : 'ꜰᴏʀ ᴛʜɪꜱ ᴄʜᴀᴛ'}
`.trim())
}
handler.help = ['on', 'off'].map(v => v + '<option>')
handler.tags = ['group', 'owner']
handler.command = /^((off|on)|(tru|fals)e|(turn)?o(n|ff))$/i

module.exports = handler
