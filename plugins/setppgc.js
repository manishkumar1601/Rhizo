let handler = async (m, { conn, usedPrefix, command }) => {
let name = conn.getName(m.sender)
let user = global.DATABASE._data.users[m.sender]

if (user.registered === false) throw `ᴏɪɪ, *${name}* ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ 😖\n\nᴘʟᴇᴀꜱᴇ ʀᴇɢɪꜱᴛᴇʀ ᴛᴏ ᴜꜱᴇ\n📝 ᴛᴏ ʀᴇɢɪꜱᴛᴇʀ, ᴛʏᴘᴇ *!ʀᴇɢ ɴᴀᴍᴇ|ᴀɢᴇ*\n\n🎯 ᴇxᴀᴍᴘʟᴇ :\n!ʀᴇɢ ᴀʙʜɪɴᴀᴠ|22`

    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw '💬 ᴍᴜꜱᴛ ʀᴇᴘʟʏ ᴛᴏ ᴀɴʏ ᴘʜᴏᴛᴏ'
        await m.reply('*🔄 ᴘʀᴏᴄᴇꜱꜱɪɴɢ...*')
        await conn.updateProfilePicture(m.chat, img)
        m.reply("*✅️ ꜱᴜᴄᴇꜱꜱꜰᴜʟʟʏ ꜱᴇᴛ ɢʀᴏᴜᴘ'ꜱ ᴘʀᴏꜰɪʟᴇ ᴘʜᴏᴛᴏ!*")
    } else throw `⚠️ ᴀɴ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ!! ⚠️\n\n⛔️ ᴇʀʀᴏʀ : 𝗖𝗮𝗻'𝘁 𝗙𝗶𝗻𝗱 𝗔𝗻𝘆𝘁𝗵𝗶𝗻𝗴 ⛔️\n\n➡️ ᴛʏᴘᴇ !ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴀɴᴅ ʀᴇᴘᴏʀᴛ ᴛʜɪꜱ ɪꜱꜱᴜᴇ ᴛᴏ ᴅᴇᴠᴇʟᴏᴘᴇʀ ➡️`
}
handler.help = ['setppgc']
handler.tags = ['group']

handler.command = /^setppgc$/i

handler.group = true
handler.admin = true
handler.botAdmin = true

module.exports = handler
