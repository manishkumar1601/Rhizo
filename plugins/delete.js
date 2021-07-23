let handler = function (m) {

  if (!m.quoted) throw false
  let name = conn.getName(m.sender)
  let { chat, fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw false
  if (!isBaileys) throw `➡️ ᴛʜᴇ ᴍᴇꜱꜱᴀɢᴇ ᴡᴀꜱ ɴᴏᴛ ꜱᴇɴᴛ ʙʏ ᴛʜᴇ ʙᴏᴛ!\n💬 ɪᴛ ᴡᴀꜱ ꜱᴇɴᴅ ʙʏ *${name}!*`
  this.deleteMessage(chat, {
    fromMe,
    id,
    remoteJid: chat
  })
}
handler.help = ['del', 'delete']
handler.tags = ['info']

handler.command = /^del(ete)?$/i

module.exports = handler
