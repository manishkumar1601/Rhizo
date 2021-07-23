let handler = async (m, { conn, command, args }) => {
let name = conn.getName(m.sender)
let user = global.DATABASE._data.users[m.sender]

if (user.registered === false) throw `ᴏɪɪ, *${name}* ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ 😖\n\nᴘʟᴇᴀꜱᴇ ʀᴇɢɪꜱᴛᴇʀ ᴛᴏ ᴜꜱᴇ\n📝 ᴛᴏ ʀᴇɢɪꜱᴛᴇʀ, ᴛʏᴘᴇ *!ʀᴇɢ ɴᴀᴍᴇ|ᴀɢᴇ*\n\n🎯 ᴇxᴀᴍᴘʟᴇ :\n!ʀᴇɢ ᴀʙʜɪɴᴀᴠ|22`

  let chats
  if (/group|gc/i.test(args[0])) chats = conn.chats.array.filter(v => v.jid.endsWith('g.us') && !v.pin).map(v => v.jid)
  else if (/chat|private/i.test(args[0])) chats = conn.chats.array.filter(v => v.jid.endsWith('.net') && !v.pin).map(v => v.jid)
  else if (/all/i.test(args[0])) chats = conn.chats.array.filter(v => v.jid && !v.pin).map(v => v.jid)
  else chats = [m.chat]
  let isDelete = /^(clear|delete)/i.test(command)
  for (let id of chats) {
    if (isDelete) await conn.modifyChat(id, 'delete', {
      includeStarred: false
    }).catch(console.log)
    await conn.modifyChat(id, 'mute', -Math.floor(new Date / 1e3) * 1e3 - 1e3).catch(console.log)
  }
  conn.reply(m.chat, chats.length + ` ᴄʜᴀᴛ ${args[0] ? args[0] : ''} ʜᴀꜱ ʙᴇᴇɴ ᴏᴘᴇɴᴇᴅ` + (isDelete ? 'ᴄʟᴇᴀɴ ᴜᴘ 🗑️ ' : 'ꜰɪʟʟ ꜰᴏʀᴇᴠᴇʀ 🗑️'), m)
}
handler.help = ['deletechat', 'deletechat chat', 'deletechat group', 'deletechat all', 'mutechat', 'mutechat chat', 'mutechat group', 'mutechat all']
handler.tags = ['owner']
handler.command = /^(clear|delete|mute)chat$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
