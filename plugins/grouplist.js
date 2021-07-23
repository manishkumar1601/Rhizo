let handler = async (m, { conn }) => {
let name = conn.getName(m.sender)
let user = global.DATABASE._data.users[m.sender]

if (user.registered === false) throw `ᴏɪɪ, *${name}* ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ 😖\n\nᴘʟᴇᴀꜱᴇ ʀᴇɢɪꜱᴛᴇʀ ᴛᴏ ᴜꜱᴇ\n📝 ᴛᴏ ʀᴇɢɪꜱᴛᴇʀ, ᴛʏᴘᴇ *!ʀᴇɢ ɴᴀᴍᴇ|ᴀɢᴇ*\n\n🎯 ᴇxᴀᴍᴘʟᴇ :\n!ʀᴇɢ ᴀʙʜɪɴᴀᴠ|22`

  let txt = conn.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`${conn.getName(v.jid)}\n${v.jid} [${v.read_only ? 'ʟᴇꜰᴛ ⬇️' : 'ᴊᴏɪɴᴇᴅ ⬆️'}]`).join`\n\n`
  conn.reply(m.chat, '🗒️ ʟɪꜱᴛ ɢʀᴏᴜᴘꜱ:\n' + txt, m)
}
handler.help = ['groups', 'grouplist']
handler.tags = ['premium']
handler.command = /^(group(s|list))$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
