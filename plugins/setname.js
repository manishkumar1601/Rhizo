let handler = async (m, { conn, text }) => {
let name = conn.getName(m.sender)
let user = global.DATABASE._data.users[m.sender]

if (user.registered === false) throw `ᴏɪɪ, *${name}* ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ 😖\n\nᴘʟᴇᴀꜱᴇ ʀᴇɢɪꜱᴛᴇʀ ᴛᴏ ᴜꜱᴇ\n📝 ᴛᴏ ʀᴇɢɪꜱᴛᴇʀ, ᴛʏᴘᴇ *!ʀᴇɢ ɴᴀᴍᴇ|ᴀɢᴇ*\n\n🎯 ᴇxᴀᴍᴘʟᴇ :\n!ʀᴇɢ ᴀʙʜɪɴᴀᴠ|22`

   if (!text) throw `💬 ᴍᴜꜱᴛ ᴇɴᴛᴇʀ ꜱᴏᴍᴇ ᴛᴇxᴛ`
     try {
        await connupdateProfileName(text)
        conn.reply(m.chat, `✅️ ꜱᴜᴄᴇꜱꜱꜰᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ɴᴀᴍᴇ`, m)
     } catch (e) {
       console.log(e)
       throw `⚠️ ᴀɴ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ!! ⚠️\n\n⛔️ ᴇʀʀᴏʀ : 𝗖𝗮𝗻'𝘁 𝗙𝗶𝗻𝗱 𝗔𝗻𝘆𝘁𝗵𝗶𝗻𝗴 ⛔️\n\n➡️ ᴛʏᴘᴇ !ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴀɴᴅ ʀᴇᴘᴏʀᴛ ᴛʜɪꜱ ɪꜱꜱᴜᴇ ᴛᴏ ᴅᴇᴠᴇʟᴏᴘᴇʀ ➡️`
     }
}
handler.help = ['setname']
handler.tags = ['owner']
handler.command = /^(setname)$/i
handler.owner = true

module.exports = handler
