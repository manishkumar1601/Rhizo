let linkRegex = /chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
let name = conn.getName(m.sender)
let user = global.DATABASE._data.users[m.sender]

if (user.registered === false) throw `ᴏɪɪ, *${name}* ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ 😖\n\nᴘʟᴇᴀꜱᴇ ʀᴇɢɪꜱᴛᴇʀ ᴛᴏ ᴜꜱᴇ\n📝 ᴛᴏ ʀᴇɢɪꜱᴛᴇʀ, ᴛʏᴘᴇ *!ʀᴇɢ ɴᴀᴍᴇ|ᴀɢᴇ*\n\n🎯 ᴇxᴀᴍᴘʟᴇ :\n!ʀᴇɢ ᴀʙʜɪɴᴀᴠ|22`

let handler = async (m, { conn, text }) => {
  let [, code] = text.match(linkRegex) || []
  if (!code) throw '⛔️ ʟɪɴᴋ ɪɴᴠᴀɪʟᴅ, ᴘʟᴇᴀꜱᴇ ᴇɴᴛᴇʀ ᴀ ᴠᴀɪʟᴅ ʟɪɴᴋ'
  let res = await conn.query({
    json: ["query", "invite", code],
    expect200: true
  })
  if (!res) throw res
  let caption = `
 【﻿Ｇｒｏｕｐ　Ｌｉｎｋ　Ｉｎｓｐｅｃｔｏｒ】
${res.id}
🧧 ᴛɪᴛʟᴇ: *${res.subject}*
🛠️ ᴄʀᴇᴀᴛᴇᴅ ʙʏ: @${res.id.split('-')[0]} ᴏɴ *${formatDate(res.creation * 1000)}*${res.subjectOwner ? `
⚙️ ᴛɪᴛʟᴇ ᴄʜᴀɴɢᴇᴅ ʙʏ: @${res.subjectOwner.split`@`[0]} ᴏɴ *${formatDate(res.subjectTime * 1000)}*`: ''}${res.descOwner ? `
⛓️ ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ ᴄʜᴀɴɢᴇᴅ ʙʏ: @${res.descOwner.split`@`[0]} ᴏɴ *${formatDate(res.descTime * 1000)}*` : ''}
📝 ɴᴜᴍʙᴇʀ ᴏꜰ ᴍᴇᴍʙᴇʀꜱ: *${res.size}*
💭 ᴍᴇᴍʙᴇʀꜱ ᴡʜᴏ ᴀʀᴇ ᴋɴᴏᴡɴ ᴛᴏ ᴊᴏɪɴ: ${res.participants ? '\n' + res.participants.map((user, i) => ++i + '. @' + user.id.split`@`[0]).join('\n').trim() : 'ɴᴏᴛʜɪɴɢ'}
${res.desc ? `💬 ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ:
*${res.desc}*` : '*ɴᴏ ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ*'}
*JSON Version*
\`\`\`${JSON.stringify(res, null, 1)}\`\`\`
`.trim()
  let pp = await conn.getProfilePicture(res.id).catch(console.error)
  await conn.sendFile(m.chat, pp, 'pp.jpg', caption, m)
}
handler.help = ['inspect <chat.whatsapp.com>']
handler.tags = ['tools']

handler.command = /^inspect$/i

module.exports = handler

function formatDate(n, locale = 'en') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })
}
