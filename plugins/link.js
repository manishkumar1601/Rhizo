let handler = async (m, { conn, args }) => {
let name = conn.getName(m.sender)
let reg = global.DATABASE._data.users[m.sender]

if (reg.registered === false) throw `ᴏɪɪ, *${name}* ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ 😖\n\nᴘʟᴇᴀꜱᴇ ʀᴇɢɪꜱᴛᴇʀ ᴛᴏ ᴜꜱᴇ\n📝 ᴛᴏ ʀᴇɢɪꜱᴛᴇʀ, ᴛʏᴘᴇ *!ʀᴇɢ ɴᴀᴍᴇ|ᴀɢᴇ*\n\n🎯 ᴇxᴀᴍᴘʟᴇ :\n!ʀᴇɢ ᴀʙʜɪɴᴀᴠ|22`

  let group = m.chat
  if (/^[0-9]{5,16}-[0-9]+@g\.us$/.test(args[0])) group = args[0]
  if (!/^[0-9]{5,16}-[0-9]+@g\.us$/.test(group)) throw '【﻿❗️】ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ᴏɴʟʏ ʙᴇ ᴜꜱᴇᴅ ɪɴ *ɢʀᴏᴜᴘꜱ!*'
  let groupMetadata = await conn.groupMetadata(group)
  if (!groupMetadata) throw '⚠️ ᴀɴ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ!! ⚠️\n\n⛔️ ᴇʀʀᴏʀ : 𝗴𝗿𝗼𝘂𝗽𝗠𝗲𝘁𝗮𝗗𝗮𝘁𝗮 𝗶𝘀 𝗻𝗼𝘁 𝗱𝗲𝗳𝗶𝗻𝗲𝗱 ⛔️\n\n➡️ ᴛʏᴘᴇ !ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴀɴᴅ ʀᴇᴘᴏʀᴛ ᴛʜɪꜱ ɪꜱꜱᴜᴇ ᴛᴏ ᴅᴇᴠᴇʟᴏᴘᴇʀ ➡️'
  if (!'participants' in groupMetadata) throw '⚠️ ᴀɴ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ!! ⚠️\n\n⛔️ ᴇʀʀᴏʀ : 𝗽𝗮𝗿𝘁𝗶𝗰𝗶𝗽𝗮𝗻𝘁𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗱𝗲𝗳𝗶𝗻𝗲𝗱 ⛔️\n\n➡️ ᴛʏᴘᴇ !ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴀɴᴅ ʀᴇᴘᴏʀᴛ ᴛʜɪꜱ ɪꜱꜱᴜᴇ ᴛᴏ ᴅᴇᴠᴇʟᴏᴘᴇʀ ➡️'
  let me = groupMetadata.participants.find(user => user.jid === conn.user.jid)
  if (!me) throw '⚠️ ᴀɴ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ!! ⚠️\n\n⛔️ ᴇʀʀᴏʀ : 𝘃𝘃_𝗺𝗲_𝘃𝘃_𝗺𝗲 𝗶𝘀 𝗻𝗼𝘁 𝗱𝗲𝗳𝗶𝗻𝗲𝗱 ⛔️\n\n➡️ ᴛʏᴘᴇ !ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴀɴᴅ ʀᴇᴘᴏʀᴛ ᴛʜɪꜱ ɪꜱꜱᴜᴇ ᴛᴏ ᴅᴇᴠᴇʟᴏᴘᴇʀ ➡️'
  if (me.isAdmin !== true) throw '【﻿❗️】ᴍᴀᴋᴇ ꜱᴜʀᴇ ᴛʜᴀᴛ ᴛʜᴇ ʙᴏᴛ ɪꜱ ᴀɴ *ᴀᴅᴍɪɴ* ɪɴ ᴛʜɪꜱ *ɢʀᴏᴜᴘ*!'
  m.reply('```Group Link:``` https://chat.whatsapp.com/' + await conn.groupInviteCode(group))
}
handler.help = ['linkgroup', 'linkgc', 'link']
handler.tags = ['group']
handler.command = /^link(g?c)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = true
handler.botAdmin = false

handler.fail = null

module.exports = handler
