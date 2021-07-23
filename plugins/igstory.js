let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
let name = conn.getName(m.sender)
let user = global.DATABASE._data.users[m.sender]

if (user.registered === false) throw `ᴏɪɪ, *${name}* ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ 😖\n\nᴘʟᴇᴀꜱᴇ ʀᴇɢɪꜱᴛᴇʀ ᴛᴏ ᴜꜱᴇ\n📝 ᴛᴏ ʀᴇɢɪꜱᴛᴇʀ, ᴛʏᴘᴇ *!ʀᴇɢ ɴᴀᴍᴇ|ᴀɢᴇ*\n\n🎯 ᴇxᴀᴍᴘʟᴇ :\n!ʀᴇɢ ᴀʙʜɪɴᴀᴠ|22`

  if (!args[0]) throw '💬 ᴍᴜꜱᴛ ᴇɴᴛᴇʀ ᴀ ᴜʀʟ'
  await m.reply('*🔄 ᴘʀᴏᴄᴇꜱꜱɪɴɢ...*')
  let res = await fetch(global.API('xteam', '/dl/igs', {
    nama: args[0]
  }, 'APIKEY'))
  let json = await res.json()
  if (res.status != 200) throw json
  if (json.result.error) throw json.result.message
  let { username, storylist } = json.result
  let dateConfig = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }
  for (let { url, type, taken_at } of storylist)
    conn.sendFile(m.chat, url, 'ig' + (type == 'video' ? '.mp4' : '.jpg'), `
@${username}
📅 ᴘᴏꜱᴛ ᴏɴ ${new Date(taken_at * 1000).toLocaleDateString('en', dateConfig)}
`, m)
  throw json.result
}
handler.help = ['igstory'].map(v => v + ' <username>')
handler.tags = ['downloader']

handler.command = /^(igs(tory)?)$/i

module.exports = handler
