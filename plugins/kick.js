let handler = async (m, { conn, args }) => {
let name = conn.getName(m.sender)
let reg = global.DATABASE._data.users[m.sender]

if (reg.registered === false) throw `ᴏɪɪ, *${name}* ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ 😖\n\nᴘʟᴇᴀꜱᴇ ʀᴇɢɪꜱᴛᴇʀ ᴛᴏ ᴜꜱᴇ\n📝 ᴛᴏ ʀᴇɢɪꜱᴛᴇʀ, ᴛʏᴘᴇ *!ʀᴇɢ ɴᴀᴍᴇ|ᴀɢᴇ*\n\n🎯 ᴇxᴀᴍᴘʟᴇ :\n!ʀᴇɢ ᴀʙʜɪɴᴀᴠ|22`

    let og = m.chat.split`-`[0] + '@s.whatsapp.net'
    let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    if (!who) m.reply(`You Must Mention anyone or Reply to any message.`)
    if (who == og) m.reply(`Oii, this is the owner of this group so I cant kick him.`)

  await conn.groupRemove(m.chat, who)
}
handler.help = ['kick', '-'].map(v => v + ' @user')
handler.tags = ['admin']
handler.command = /^(kick|\-)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.limit = true

module.exports = handler
