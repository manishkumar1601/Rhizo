const free = 400
const prem = 800
let handler = async (m) => {
let name = conn.getName(m.sender)
let user = global.DATABASE._data.users[m.sender]

if (user.registered === false) throw `ᴏɪɪ, *${name}* ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ 😖\n\nᴘʟᴇᴀꜱᴇ ʀᴇɢɪꜱᴛᴇʀ ᴛᴏ ᴜꜱᴇ\n📝 ᴛᴏ ʀᴇɢɪꜱᴛᴇʀ, ᴛʏᴘᴇ *!ʀᴇɢ ɴᴀᴍᴇ|ᴀɢᴇ*\n\n🎯 ᴇxᴀᴍᴘʟᴇ :\n!ʀᴇɢ ᴀʙʜɪɴᴀᴠ|22`

  if (new Date - global.DATABASE._data.users[m.sender].lastclaim < 86400000) throw "*ʏᴏᴜ'ᴠᴇ ᴀʟʀᴇᴀᴅʏ ᴄʟᴀɪᴍᴇᴅ ʏᴏᴜʀ ᴅᴀɪʟʏ ᴄʟᴀɪᴍ ᴛᴏᴅᴀʏ 🤧*"
  global.DATABASE._data.users[m.sender].exp += isPrems ? prem : free
  global.DATABASE._data.users[m.sender].lastclaim = new Date * 1
  if (m.sender !== isPrems) {
  m.reply(`*🎉 Congratulations!! You Got +${free} XP*`)
  if (m.sender == isPrems) {
  m.reply(`
⧫︎*【 P R E M I U M 】*⧫︎

 ❀︎ ᴘʀᴇᴍɪᴜᴍ ᴅᴇᴛᴇᴄᴛᴇᴅ - *${name}*

 🎉 ᴄᴏɴɢʀᴀᴛᴜʟᴀᴛɪᴏɴꜱ *${name}*, ʏᴏᴜ ɢᴏᴛ *${ᴘʀᴇᴍ}* xᴘ!


⧫︎*【 P R E M I U M 】*⧫︎`)
}
handler.help = ['daily', 'claim']
handler.tags = ['xp']
handler.command = /^(daily|claim)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

