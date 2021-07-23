const { MessageType } = require('@adiwajshing/baileys')
const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.DATABASE._data.users[m.sender]
  let { exp, limit, level } = global.DATABASE.data.users[m.sender]
  let oname = conn.getName(m.sender)
  let oabout = conn.getStatus(m.sender)
  let fs = require('fs')
  let gif = fs.readFileSync("../Rhizo/src/check-circle.gif")
  let info = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  if (user.registered === true) throw `ᴏɪɪ, *${oname}* ʏᴏᴜ ᴀʀᴇ ᴀʟʀᴇᴀᴅʏ ʀᴇɢɪꜱᴛᴇʀᴇᴅ 🤭`
  if (!Reg.test(text)) throw `⛔️ ɪɴᴄᴏʀʀᴇᴄᴛ ꜰᴏʀᴍᴀᴛ ⛔️\n*ᴘʟᴇᴀꜱᴇ ᴛʏᴘᴇ ${usedPrefix}ʀᴇɢ ɴᴀᴍᴇ|ᴀɢᴇ\n\nᴇxᴀᴍᴘʟᴇ :\n*${usedPrefix}ʀᴇɢ ᴀʙʜɪɴᴀᴠ|22*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw `ᴘʟᴇᴀꜱᴇ ᴇɴᴛᴇʀ ʏᴏᴜʀ ɴᴀᴍᴇ ᴀʟꜱᴏ ᴡɪᴛʜ ᴀɢᴇ ʙʏ ꜱᴘʟɪᴛᴛɪɴɢ ᴡɪᴛʜ / ꜱʏᴍʙᴏʟ 😟`
  if (!age) throw `ᴘʟᴇᴀꜱᴇ ᴇɴᴛᴇʀ ʏᴏᴜʀ ᴀɢᴇ ᴀʟꜱᴏ ᴡɪᴛʜ ɴᴀᴍᴇ ʙʏ ꜱᴘʟɪᴛᴛɪɴɢ ᴡɪᴛʜ / ꜱʏᴍʙᴏʟ 😟`
  age = parseInt(age)
  if (age > 120) throw `ᴏɪɪ, ɢʀᴀɴᴅꜰᴀᴛʜᴇʀ ᴀɢᴇᴅ ʙᴏʏ! ᴘʟᴇᴀꜱᴇ ᴅᴏɴ'ᴛ ʟɪᴇ 😂😂`
  if (age < 5) throw `ᴏɪɪ, ᴍᴏᴅᴇʀɴ ʙᴀʙʏ! ᴘʟᴇᴀꜱᴇ ᴅᴏɴ'ᴛ ʟɪᴇ 😂`
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let timereg = + new Date
  let caption = `
ᴏɪɪ, ${oname} ꜱᴜᴄᴇꜱꜱꜰᴜʟʟʏ ʀᴇɢɪꜱᴛᴇʀᴇᴅ ✅️
『 ʀᴇɢɪꜱᴛᴇʀᴇᴅ ɪɴꜰᴏ 』
ɴᴀᴍᴇ : ${name}
ᴀɢᴇ : ${age}
ꜰᴀᴋᴇ ʀᴇɢɪꜱᴛʀᴀᴛɪᴏɴ : ꜰᴀʟꜱᴇ
『 ᴜꜱᴇʀ ɪɴꜰᴏ 』
ɴᴀᴍᴇ : ${oname}
ʀᴇɢɪꜱᴛᴇʀᴇᴅ : ᴛʀᴜᴇ
ᴇxᴘ : ${exp}
ʟɪᴍɪᴛ : ${limit}
ʟᴇᴠᴇʟ : ${level}
`.trim()

if (gif) conn.sendMessage(m.chat, gif, MessageType.video, {
    quoted: m, mimetype: 'gif', caption: caption, thumbnail: Buffer.alloc(0)
  })
}
handler.help = ['use', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler
