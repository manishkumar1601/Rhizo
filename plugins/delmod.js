let handler = async (m, { conn }) => {
let name = conn.getName(m.sender)
let user = global.DATABASE._data.users[m.sender]

if (user.registered === false) throw `ᴏɪɪ, *${name}* ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ 😖\n\nᴘʟᴇᴀꜱᴇ ʀᴇɢɪꜱᴛᴇʀ ᴛᴏ ᴜꜱᴇ\n📝 ᴛᴏ ʀᴇɢɪꜱᴛᴇʀ, ᴛʏᴘᴇ *!ʀᴇɢ ɴᴀᴍᴇ|ᴀɢᴇ*\n\n🎯 ᴇxᴀᴍᴘʟᴇ :\n!ʀᴇɢ ᴀʙʜɪɴᴀᴠ|22`

    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : ''
    else who = m.chat
    if (global.mods.includes(who)) throw 'ᴛʜɪꜱ ɢᴜʏ ɪꜱ ɴᴏᴛ ᴀ ᴍᴏᴅᴇʀᴀᴛᴏʀ 🤧'
    let index = global.mods.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
    global.mods.splice(index, 1)
    conn.reply(m.chat, `ᴏɪɪ, @${who.split('@')[0]} ʏᴏᴜ ᴀʀᴇ ɴᴏ ʟᴏɴɢᴇʀ ᴀ ᴍᴏᴅᴇʀᴀᴛᴏʀ 😶`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })

}
handler.help = ['delmod *@user*']
handler.tags = ['owner']

handler.command = /^(remove|hapus|-|del)mod$/i

handler.owner = true

module.exports = handler
