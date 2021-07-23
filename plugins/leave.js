let handler = async (m, { conn, usedPrefix, command }) => {
let name = conn.getName(m.sender)
let user = global.DATABASE._data.users[m.sender]

if (user.registered === false) throw `ᴏɪɪ, *${name}* ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ 😖\n\nᴘʟᴇᴀꜱᴇ ʀᴇɢɪꜱᴛᴇʀ ᴛᴏ ᴜꜱᴇ\n📝 ᴛᴏ ʀᴇɢɪꜱᴛᴇʀ, ᴛʏᴘᴇ *!ʀᴇɢ ɴᴀᴍᴇ|ᴀɢᴇ*\n\n🎯 ᴇxᴀᴍᴘʟᴇ :\n!ʀᴇɢ ᴀʙʜɪɴᴀᴠ|22`

  await m.reply(`
*ʙʏᴇ ʙʏᴇ ɢᴜʏꜱ, ɪ ᴀᴍ ʟᴇᴀᴠɪɴɢ ꜰʀᴏᴍ ᴛʜɪꜱ ɢʀᴏᴜᴘ 😓*
`.trim())

 conn.groupLeave(m.chat)
}
handler.help = ['leavegc', 'kickme', 'kickbot', 'leaveme', 'leavebot']
handler.tags = ['group']

handler.command = /^leavegc$/i

handler.group = true
handler.owner = true

module.exports = handler 
