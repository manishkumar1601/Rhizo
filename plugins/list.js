let handler = async (m, { usedPrefix, conn, text }) => {
let name = conn.getName(m.sender)
let { exp, limit, level } = global.DATABASE.data.users[m.sender]
let user = global.DATABASE.data.users[m.sender]

if (user.registered === false) throw `ᴏɪɪ, *${name}* ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ 😖\n\nᴘʟᴇᴀꜱᴇ ʀᴇɢɪꜱᴛᴇʀ ᴛᴏ ᴜꜱᴇ\n📝 ᴛᴏ ʀᴇɢɪꜱᴛᴇʀ, ᴛʏᴘᴇ *!ʀᴇɢ ɴᴀᴍᴇ|ᴀɢᴇ*\n\n🎯 ᴇxᴀᴍᴘʟᴇ :\n!ʀᴇɢ ᴀʙʜɪɴᴀᴠ|22`

 m.reply(`
╓───「 *𝐑𝐡𝐢𝐳𝐨 𝐁𝐨𝐭* 」
║𝐻𝐴𝐼 𝐼'𝑀 𝐵𝑂𝑇  🕊️
╙───々
╓───「 ʙᴏᴛ ɪɴғᴏ 」
║🧧 ᴄʀᴇᴀᴛᴏʀ: ᴛᴏxɪᴄ ᴅᴇᴠɪʟ
║🕯️ ᴘʀᴇғɪx: ${usedPrefix}
╙───々
╓───「 ᴜꜱᴇʀ ɪɴғᴏ 」
║👁️‍🗨️ ɴᴀᴍᴇ: ${name}
║👁️‍🗨️ ʟɪᴍɪᴛ: ${limit}
║👁️‍🗨️ ᴇxᴘ: ${exp}
║👁️‍🗨️ ʟᴇᴠᴇʟ: ${level}
╙───々
╓───「 ᴍᴀɪɴ ʟɪꜱᴛ 」
║💫 ${usedPrefix}ᴀꜰᴋ
║💫 ${usedPrefix}ᴀʟɪᴠᴇ
║💫 ${usedPrefix}ᴄʟᴀɪᴍ
║💫 ${usedPrefix}ᴅᴇʟᴇᴛᴇ
║💫 ${usedPrefix}ᴏᴡɴᴇʀ
╙───々
╓───「 ɪɴᴛᴇʀɴᴇᴛ ʟɪꜱᴛ 」
║🌐 ${usedPrefix}ʙʀᴀɪɴʟʏ
║🌐 ${usedPrefix}ꜰʙ
║🌐 ${usedPrefix}ɢᴏᴏɢʟᴇ
║🌐 ${usedPrefix}ɪɢ
║🌐 ${usedPrefix}ɪɢꜱᴛᴏʀʏ
║🌐 ${usedPrefix}ᴘʟᴀʏ
║🌐 ${usedPrefix}ꜱꜱ
╙───々
╓───「 ɢᴀᴍᴇ ʟɪꜱᴛ 」
║🎮 ${usedPrefix}ᴄᴀʟᴄ
║🎮 ${usedPrefix}ʀᴀᴛᴇᴍᴇ
╙───々
╓───「 ᴘʀᴇᴍɪᴜᴍ ʟɪꜱᴛ 」
║💰 ${usedPrefix}ɢʀᴏᴜᴘʟɪꜱᴛ
║💰 ${usedPrefix}ᴊᴏɪɴ
╙───々
╓───「 ᴄᴏɴᴠᴇʀᴛᴇʀ ʟɪꜱᴛ 」
║🛠️ ${usedPrefix}ᴛᴏɪᴍɢ
║🛠️ ${usedPrefix}ꜱᴛɪᴄᴋᴇʀ
║🛠️ ${usedPrefix}ᴛᴏᴍᴘ3
║🛠️ ${usedPrefix}ᴡᴍ
╙───々
╓───「 ᴍᴀᴋᴇʀ ʟɪꜱᴛ 」
║〽️ ${usedPrefix}ᴀᴛᴛᴘ
║〽️ ${usedPrefix}ᴛᴛᴘ
║〽️ ${usedPrefix}ɴᴜʟɪꜱ
║〽️ ${usedPrefix}Qʀ
╙───々
╓───「 ᴏᴛʜᴇʀ ʟɪꜱᴛ 」
║🏷️ ${usedPrefix}ɪɴꜱᴘᴇᴄᴛ
║🏷️ ${usedPrefix}ᴘʀᴏꜰɪʟᴇ
║🏷️ ${usedPrefix}ꜱʏꜱᴅ
║🏷️ ${usedPrefix}ʀᴇᴀᴅᴍᴏʀᴇ
║🏷️ ${usedPrefix}ᴘɪɴɢ
║🏷️ ${usedPrefix}ᴛᴛꜱ
╙───々
╓───「 ᴀᴅᴍɪɴ ʟɪꜱᴛ 」
║🥇 ${usedPrefix}ᴀᴅᴅ
║🥇 ${usedPrefix}ᴅᴇᴍᴏᴛᴇ
║🥇 ${usedPrefix}ᴋɪᴄᴋ
║🥇 ${usedPrefix}ᴍᴜᴛᴇ
║🥇 ${usedPrefix}ᴘʀᴏᴍᴏᴛᴇ
║🥇 ${usedPrefix}ʀᴇᴠᴏᴋᴇ
║🥇 ${usedPrefix}ꜱᴇᴛᴘᴘɢᴄ
║🥇 ${usedPrefix}ʟɪɴᴋɢᴄ
║🥇 ${usedPrefix}ᴛᴀɢᴀʟʟ
║🥇 ${usedPrefix}ᴜɴᴍᴜᴛᴇ
╙───々
╓───「 ᴏᴡɴᴇʀ ʟɪꜱᴛ 」
║👑 ${usedPrefix}ᴀᴅᴅᴍᴏᴅ
║👑 ${usedPrefix}ᴀᴅᴅᴘʀᴇᴍ
║👑 ${usedPrefix}ʙᴄ
║👑 ${usedPrefix}ʙᴄɢᴄ
║👑 ${usedPrefix}ᴅᴇʟᴇᴛᴇᴄʜᴀᴛ
║👑 ${usedPrefix}ᴅᴇʟᴍᴏᴅ
║👑 ${usedPrefix}ᴅᴇʟᴘʀᴇᴍ
║👑 ${usedPrefix}ᴏꜰꜰ
║👑 ${usedPrefix}ᴏɴ
║👑 ${usedPrefix}ʀᴇꜱᴛᴀʀᴛ
║👑 ${usedPrefix}ᴊᴏɪɴ
║👑 ${usedPrefix}ʟᴇᴀᴠᴇɢᴄ
║👑 ${usedPrefix}ꜱᴇᴛᴀʙᴏᴜᴛ
║👑 ${usedPrefix}ꜱᴇᴛɴᴀᴍᴇ
║👑 ${usedPrefix}ꜱᴇᴛᴘᴘ
║👑 ${usedPrefix}ꜱᴇᴛᴡᴇʟᴄᴏᴍᴇ
║👑 ${usedPrefix}ꜱᴇᴛʙʏᴇ
║👑 ${usedPrefix}ᴜᴘᴅᴀᴛᴇ
╙───々
`.trim())
}
handler.help = ['list']
handler.tags = ['main']
handler.command = /^list$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
