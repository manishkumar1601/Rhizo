const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
let name = conn.getName(m.sender)
let user = global.DATABASE._data.users[m.sender]

if (user.registered === false) throw `ᴏɪɪ, *${name}* ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ 😖\n\nᴘʟᴇᴀꜱᴇ ʀᴇɢɪꜱᴛᴇʀ ᴛᴏ ᴜꜱᴇ\n📝 ᴛᴏ ʀᴇɢɪꜱᴛᴇʀ, ᴛʏᴘᴇ *!ʀᴇɢ ɴᴀᴍᴇ|ᴀɢᴇ*\n\n🎯 ᴇxᴀᴍᴘʟᴇ :\n!ʀᴇɢ ᴀʙʜɪɴᴀᴠ|22`

    if (!text) return conn.reply(m.chat, '💬 ᴍᴜꜱᴛ ᴇɴᴛᴇʀ ꜱᴏᴍᴇ ᴛᴇxᴛ', m)
    if (text > 300) return conn.reply(m.chat, '💬 ꜱᴏʀʀʏ, ᴛʜɪꜱ ᴛᴇxᴛ ɪꜱ ᴛᴏᴏ ʟᴏɴɢ. ᴍᴀxɪᴍᴜᴍ 300 ᴛᴇxᴛ ᴏɴʟʏ', m)
    var nomor = m.sender
    const teks1 = `*【 ᴍᴇꜱꜱᴀɢᴇ 】*\n𝐍𝐮𝐦𝐛𝐞𝐫 : wa.me/${nomor.split("@s.whatsapp.net")[0]}\n𝐌𝐞𝐬𝐬𝐚𝐠𝐞 : ${text}`
    conn.sendMessage('919544707896@s.whatsapp.net', teks1, MessageType.text)
    conn.reply(m.chat, '✅️ ꜱᴜᴄᴇꜱꜱꜰᴜʟʟʏ ꜱᴇɴᴛ ɪꜱꜱᴜᴇ/ʀᴇQᴜᴇꜱᴛ ᴛᴏ ᴛʜᴇ ᴅᴇᴠᴇʟᴏᴘᴇʀ. ʏᴏᴜ ᴡɪʟʟ ɢᴇᴛ ᴀ ʀᴇᴘʟʏ ᴍᴇꜱꜱᴀɢᴇ ꜰʀᴏᴍ ᴛʜᴇ ᴅᴇᴠᴇʟᴏᴘᴇʀ!', m)
}
handler.help = ['developer <fitur>']
handler.tags = ['info']
handler.command = /^(developer)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
