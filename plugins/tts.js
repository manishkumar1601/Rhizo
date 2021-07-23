let fetch = require('node-fetch')
let fs = require('fs')
let path = require('path')
let { spawn } = require('child_process')

let handler = async (m, { conn, args, text }) => {
let user = global.DATABASE._data.users[m.sender]
let name = conn.getName(m.sender)

if (user.registered === false) throw `ᴏɪɪ, *${name}* ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ 😖\n\nᴘʟᴇᴀꜱᴇ ʀᴇɢɪꜱᴛᴇʀ ᴛᴏ ᴜꜱᴇ\n📝 ᴛᴏ ʀᴇɢɪꜱᴛᴇʀ, ᴛʏᴘᴇ *!ʀᴇɢ ɴᴀᴍᴇ|ᴀɢᴇ*\n\n🎯 ᴇxᴀᴍᴘʟᴇ :\n!ʀᴇɢ ᴀʙʜɪɴᴀᴠ|22`

  let language = args[0]
  let speech = args.slice(1).join(' ')

  let res = await fetch(global.API('https://salism3api.pythonanywhere.com', '/text2sound/', { text: speech, languageCode: language }))
  let file = await res.json
  if ((args[0] || '').length !== 2) {
    language = 'en'
    speech = args.join(' ')
  }
  if (!text && m.quoted && m.quoted.text) speech = m.quoted.text

  if (!file) throw `Error!`
  if (!speech) throw `You Must Enter Some Words`

      conn.sendMessage(m.chat, file, MessageType.audio, {
    quoted: m, mimetype: 'audio/mp4', ptt: true
  })
}
handler.help = ['tts <lang> <teks>']
handler.tags = ['tools']
handler.command = /^g?tts$/i
module.exports = handler
