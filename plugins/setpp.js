let handler = async (m, { conn, args }) => {
let name = conn.getName(m.sender)
let user = global.DATABASE._data.users[m.sender]

if (user.registered === false) throw `ᴏɪɪ, *${name}* ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ 😖\n\nᴘʟᴇᴀꜱᴇ ʀᴇɢɪꜱᴛᴇʀ ᴛᴏ ᴜꜱᴇ\n📝 ᴛᴏ ʀᴇɢɪꜱᴛᴇʀ, ᴛʏᴘᴇ *!ʀᴇɢ ɴᴀᴍᴇ|ᴀɢᴇ*\n\n🎯 ᴇxᴀᴍᴘʟᴇ :\n!ʀᴇɢ ᴀʙʜɪɴᴀᴠ|22`

    let bot = conn.user.jid 
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
      let img = await conn.downloadM(q)
      if (!img) throw `💬 ᴍᴜꜱᴛ ʀᴇᴘʟʏ ᴛᴏ ᴀ ᴘʜᴏᴛᴏ`
     await m.reply('*🔄 ᴘʀᴏᴄᴇꜱꜱɪɴɢ...*')
     conn.updateProfilePicture (bot, img)
    conn.reply(m.chat, "✅️ ꜱᴜᴄᴇꜱꜱꜰᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ʙᴏᴛ'ꜱ ᴘʀᴏꜰɪʟᴇ ᴘʜᴏᴛᴏ!", m)
	}
    }
handler.help = ['setpp']
handler.command = /^(setpp)$/i
handler.owner = true

module.exports = handler
