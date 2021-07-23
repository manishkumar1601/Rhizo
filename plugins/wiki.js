let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(global.API('zeks', '/api/wiki', { q: text }, 'apikey'))
  if (json.result.error) throw `❌️ ɪ ᴄᴀɴɴᴏᴛ ꜰɪɴᴅ ᴀɴʏᴛʜɪɴɢ ❌️`
  let json = await res.json()
  if (json.result.result) m.reply(`${json.result.result}\n\n*Made By Rhizo*`)
  else throw `⚠️ ᴀɴ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ!! ⚠️\n\n⛔️ ᴇʀʀᴏʀ : 𝗖𝗼𝗻𝘃𝗲𝗿𝘀𝗮𝘁𝗶𝗼𝗻 𝗙𝗮𝗶𝗹𝗱 ⛔️\n\n➡️ ᴛʏᴘᴇ !ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴀɴᴅ ʀᴇᴘᴏʀᴛ ᴛʜɪꜱ ɪꜱꜱᴜᴇ ᴛᴏ ᴅᴇᴠᴇʟᴏᴘᴇʀ ➡️`
}
handler.help = ['wiki'].map(v => v + ' <apa>')
handler.tags = ['internet']
handler.command = /^(wiki)$/i

module.exports = handler 
