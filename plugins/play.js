let limit = 30
let yts = require('yt-search')
let fetch = require('node-fetch')
const { servers, yta, ytv } = require('../lib/y2mate')
let handler = async (m, { conn, command, text, isPrems, isOwner }) => {
let reg = global.DATABASE._data.users[m.sender]
let name = conn.getName(m.sender)

if (reg.registered === false) throw `ᴏɪɪ, *${name}* ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ 😖\n\nᴘʟᴇᴀꜱᴇ ʀᴇɢɪꜱᴛᴇʀ ᴛᴏ ᴜꜱᴇ\n📝 ᴛᴏ ʀᴇɢɪꜱᴛᴇʀ, ᴛʏᴘᴇ *!ʀᴇɢ ɴᴀᴍᴇ|ᴀɢᴇ*\n\n🎯 ᴇxᴀᴍᴘʟᴇ :\n!ʀᴇɢ ᴀʙʜɪɴᴀᴠ|22`

  if (!text) throw '💬 ᴍᴜꜱᴛ ᴇɴᴛᴇʀ ꜱᴏᴍᴇ ᴡᴏʀᴅꜱ'
  await m.reply('*🔄 ᴘʀᴏᴄᴇꜱꜱɪɴɢ...*')
  let chat = global.DATABASE._data.chats[m.chat]
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'ᴠɪᴅᴇᴏ/ᴀᴜᴅɪᴏ ɴᴏᴛ ꜰᴏᴜɴᴅ 😖'
  let isVideo = /2$/.test(command)
  let yt = false
  let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await (isVideo ? ytv : yta)(vid.url, server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`ꜱᴇʀᴠᴇʀ ${server} ᴇʀʀᴏʀ!${servers.length >= i + 1 ? '' : '\nᴛʀɪᴇᴅ ᴀɴᴏᴛʜᴇʀ ꜱᴇʀᴠᴇʀ... ➡️'}`)
    }
  }
  if (yt === false) throw '⚠️ ᴀɴ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀᴇᴅ ⚠️\nᴇʀʀᴏʀ: 𝗦𝗲𝗿𝘃𝗲𝗿 𝗡𝗼𝘁 𝗙𝗼𝘂𝗻𝗱.\n\nᴘʟᴇᴀꜱᴇ ᴛʏᴘᴇ !ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴀɴᴅ ʀᴇᴘᴏʀᴛ ᴛʜɪꜱ ɪꜱꜱᴜᴇ ᴛᴏ ᴛʜᴇ ᴅᴇᴠᴇʟᴏᴘᴇʀ ⬆️'
  let { dl_link, thumb, title, filesize, filesizeF } = yt
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  conn.sendFile(m.chat, thumb, 'thumbnail.jpg', `
©️ ᴛɪᴛʟᴇ: *${title}*
📦 ꜰɪʟᴇꜱɪᴢᴇ: *${filesizeF}*
📺 ꜱᴏᴜʀᴄᴇ: *${vid.url}*
*${isLimit ? 'ᴡᴇᴀʀ ': ''}ʟɪɴᴋ:* *${dl_link}*
📡 ꜱᴇʀᴠᴇʀ ʏ2ᴍᴀᴛᴇ: *${usedServer}*
`.trim(), m)
let _thumb = {}
try { if (isVideo) _thumb = { thumbnail: await (await fetch(thumb)).buffer() } }
catch (e) { }
if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp' + (3 + /2$/.test(command)), `
©️ ᴛɪᴛʟᴇ: *${title}*
📦 ꜰɪʟᴇꜱɪᴢᴇ: *${filesizeF}*
📺 ꜱᴏᴜʀᴄᴇ: *${vid.url}*
📡 ꜱᴇʀᴠᴇʀ ʏ2ᴍᴀᴛᴇ: *${usedServer}*
`.trim(), m, false,  {
  ..._thumb,
  asDocument: chat.useDocument
})
}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i

handler.exp = 0
handler.limit = true

module.exports = handler
