let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.bye = text
    else if (isOwner) conn.bye = text
    global.DATABASE._data.chats[m.chat].sBye = text
    m.reply('✅️ ꜱᴜᴄᴇꜱꜱꜰᴜʟʟʏ ꜱᴇᴛ ʙʏᴇ ᴍᴇꜱꜱᴀɢᴇ ɪɴ ᴛʜɪꜱ ᴄʜᴀᴛ!\n\nᴜꜱᴇ *@ᴜꜱᴇʀ* ᴛᴏ ᴍᴇɴᴛɪᴏɴ ᴜꜱᴇʀꜱ ᴏɴ ᴡᴇʟᴄᴏᴍᴇ/ʙʏᴇ ᴍᴇꜱꜱᴀɢᴇ!')
  } else throw '💬 ᴍᴜꜱᴛ ᴇɴᴛᴇʀ ꜱᴏᴍᴇ ᴛᴇxᴛ'
}
handler.help = ['setbye <teks>']
handler.tags = ['owner', 'group']

handler.command = /^setbye$/i
module.exports = handler
