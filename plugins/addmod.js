let handler = async (m, { conn }) => {
let name = conn.getName(m.sender)
let user = global.DATABASE._data.users[m.sender]

  if (user.registered === false) throw `ᴏɪɪ, *${name}* ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ 😖\n\nᴘʟᴇᴀꜱᴇ ʀᴇɢɪꜱᴛᴇʀ ᴛᴏ ᴜꜱᴇ\n📝 ᴛᴏ ʀᴇɢɪꜱᴛᴇʀ, ᴛʏᴘᴇ *!ʀᴇɢ ɴᴀᴍᴇ|ᴀɢᴇ*\n\n🎯 ᴇxᴀᴍᴘʟᴇ :\n!ʀᴇɢ ᴀʙʜɪɴᴀᴠ|22`

    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (global.mods.includes(who.split`@`[0])) throw '*ᴛʜɪꜱ ɢᴜʏ ɪꜱ ᴀʟʀᴇᴀᴅʏ ᴀ ᴍᴏᴅᴇʀᴀᴛᴏʀ 🤧*'
    global.mods.push(`${who.split`@`[0]}`)
    conn.reply(m.chat, `ᴏɪɪ, @${who.split`@`[0]} ʏᴏᴜ ᴀʀᴇ ɴᴏᴡ ᴀ ᴍᴏᴅᴇʀᴀᴛᴏʀ! 🥳`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })

}
handler.help = ['addmod *@user*']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)mod$/i
handler.owner = true
module.exports = handler
