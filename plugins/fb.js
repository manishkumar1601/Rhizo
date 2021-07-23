let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {
let oname = conn.getName(m.sender)
let user = global.DATABASE._data.users[m.sender]

if (user.registered === false) throw `ᴏɪɪ, *${name}* ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ 😖\n\nᴘʟᴇᴀꜱᴇ ʀᴇɢɪꜱᴛᴇʀ ᴛᴏ ᴜꜱᴇ\n📝 ᴛᴏ ʀᴇɢɪꜱᴛᴇʀ, ᴛʏᴘᴇ *!ʀᴇɢ ɴᴀᴍᴇ|ᴀɢᴇ*\n\n🎯 ᴇxᴀᴍᴘʟᴇ :\n!ʀᴇɢ ᴀʙʜɪɴᴀᴠ|22`

  if (!args[0]) throw '💬 ᴍᴜꜱᴛ ᴇɴᴛᴇʀ ᴀ ᴜʀʟ'
  await m.reply('*🔄 ᴘʀᴏᴄᴇꜱꜱɪɴɢ...*')
  let res = await fetch(global.API('xteam', '/dl/fb', {
    url: args[0]
  }, 'APIKEY'))
  if (res.status !== 200) {
    res.text()
    throw res.status
  }
  let json = await res.json()
  if (!json.result) throw json
  let { name, author, description, uploadDate, duration, url, isFamilyFriendly, genre, keywords, contentSize, videoQuality, commentCount } = json.result
  let { name: authorname, url: authorlink } = author || {}
  let dateConfig = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }
  let unknown = '⛔️ ᴜɴᴋɴᴏᴡɴ ⛔️'
  let none = '⛔️ ɴᴏɴᴇ ⛔️'
  let caption = `
💬 ᴄᴏɴᴛᴇɴᴛ${isFamilyFriendly ? ' ' : ' *ɴᴏᴛ* '}ꜰᴀᴍɪʟʏ ꜰʀɪᴇɴᴅʟʏ
©️ ᴘᴏꜱᴛ ʙʏ ${name} (${authorname || ''}) (${authorlink || ''})
📅 ᴘᴏꜱᴛᴇᴅ ᴏɴ ${new Date(uploadDate).toLocaleDateString('id', dateConfig)}
⚙️ ꜱɪᴢᴇ: ${contentSize || unknown}
⏰ ᴅᴜʀᴀᴛɪᴏɴ: ${clockString(+ new Date(duration))}
🪄 ɢᴇɴʀᴇ: ${genre || none}
📱 Qᴜᴀʟɪᴛʏ: ${videoQuality ? videoQuality : unknown}
${description}
✒️ ᴋᴇʏᴡᴏʀᴅ: ${keywords || none}
`.trim()
  conn.sendFile(m.chat, url, 'media-fb', caption, m)
}
handler.help = ['fb'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^f((b|acebook)(dl|download)?(er)?)$/i

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
