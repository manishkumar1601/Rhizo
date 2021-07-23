let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if (isOwner) conn.welcome = text
    global.DATABASE._data.chats[m.chat].sWelcome = text
    m.reply("✅️ ꜱᴜᴄᴇꜱꜱꜰᴜʟʟʏ ꜱᴇᴛ ᴡᴇʟᴄᴏᴍᴇ ᴍᴇꜱꜱᴀɢᴇ ɪɴ ᴛʜɪꜱ ᴄʜᴀᴛ!\n\nᴜꜱᴇ *@ᴜꜱᴇʀ* ᴛᴏ ᴍᴇɴᴛɪᴏɴ ᴜꜱᴇʀꜱ ᴏɴ ᴡᴇʟᴄᴏᴍᴇ/ʙʏᴇ ᴍᴇꜱꜱᴀɢᴇ!\n\nᴜꜱᴇ @ꜱᴜʙᴊᴇᴄᴛ ᴛᴏ ɢᴇᴛ ɢʀᴏᴜᴘ'ꜱ ɴᴀᴍᴇ ᴏɴ ᴡᴇʟᴄᴏᴍᴇ/ʙʏᴇ ᴍᴇꜱꜱᴀɢᴇ!")
  } else throw '💬 ᴍᴜꜱᴛ ᴇɴᴛᴇʀ ꜱᴏᴍᴇ ᴛᴇxᴛ'
}
handler.help = ['setwelcome <teks>']
handler.tags = ['owner', 'group']

handler.command = /^setwelcome$/i
module.exports = handler
