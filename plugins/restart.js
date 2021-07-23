let { spawn }  = require('child_process');
let handler  = async (m, { conn }) => {
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
  if (global.conn.user.jid == conn.user.jid) {
    await m.reply('```🔄 ʀᴇꜱᴛᴀʀᴛɪɴɢ...```')
    await global.DATABASE.save()
    process.send('reset')
  } else throw '*❌️ ʀᴇꜱᴛᴀʀᴛɪɴɢ ꜰᴀɪʟᴅ, ᴘʟᴇᴀꜱᴇ ᴛʀʏ ᴀɢᴀɪɴ ʟᴀᴛᴇʀ ❌️*'
}
handler.help = ['restart' + (process.send ? '' : ' (Not working)')]
handler.tags = ['owner']
handler.command = /^restart$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
