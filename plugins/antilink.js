/* let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

handler.before = function (m, { user, isAdmin, isBotAdmin }) {

  if (m.isBaileys && m.fromMe) throw false
  let chat = global.DATABASE.data.chats[m.chat]
  let name = this.getName(m.sender)
  let link = linkRegex.exec(m.text)

  m.reply(`ʟɪɴᴋ ᴅᴇᴛᴇᴄᴛᴇᴅ`)
  if (chat.antiLink && link) {
 m.reply(`💬 ᴏɪɪ *${name}*\n⚠️ ʏᴏᴜ ᴀʀᴇ ɢᴏɪɴɢ ᴛᴏ ʙᴇ ᴋɪᴄᴋᴇᴅ ᴏᴜᴛ ᴏꜰ ᴛʜɪꜱ ɢʀᴏᴜᴘ ʙᴇᴄᴀᴜꜱᴇ ᴏꜰ ᴠɪᴏʟᴀᴛɪɴɢ ᴀɴᴛɪʟɪɴᴋ ʀᴜʟᴇ ⚠️`)
   this.groupRemove(m.chat, [m.sender])
  }
}
handler.group = true

module.exports = handler */
