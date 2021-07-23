let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
let name = conn.getName(m.sender)
let user = global.DATABASE._data.users[m.sender]

if (user.registered === false) throw `ᴏɪɪ, *${name}* ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ 😖\n\nᴘʟᴇᴀꜱᴇ ʀᴇɢɪꜱᴛᴇʀ ᴛᴏ ᴜꜱᴇ\n📝 ᴛᴏ ʀᴇɢɪꜱᴛᴇʀ, ᴛʏᴘᴇ *!ʀᴇɢ ɴᴀᴍᴇ|ᴀɢᴇ*\n\n🎯 ᴇxᴀᴍᴘʟᴇ :\n!ʀᴇɢ ᴀʙʜɪɴᴀᴠ|22`

let handler = async (m, { conn, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw '⛔️ ʟɪɴᴋ ɪɴᴠᴀɪʟᴅ, ᴘʟᴇᴀꜱᴇ ᴇɴᴛᴇʀ ᴀ ᴠᴀɪʟᴅ ʟɪɴᴋ'
    let res = await conn.acceptInvite(code)
    conn.reply(`✅️ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ᴊᴏɪɴᴇᴅ ᴛʜᴇ ɢʀᴏᴜᴘ *${res.gid}*`)
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['owner']

handler.command = /^join$/i

handler.premium = true
handler.owner = true

module.exports = handler
