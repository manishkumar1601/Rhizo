let os = require('os')
let util = require('util')
let name = conn.getName(m.sender)
let user = global.DATABASE._data.users[m.sender]
let { performance } = require('perf_hooks')
let { sizeFormatter } = require('human-readable')
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn }) => {

if (user.registered === false) throw `ᴏɪɪ, *${name}* ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ 😖\n\nᴘʟᴇᴀꜱᴇ ʀᴇɢɪꜱᴛᴇʀ ᴛᴏ ᴜꜱᴇ\n📝 ᴛᴏ ʀᴇɢɪꜱᴛᴇʀ, ᴛʏᴘᴇ *!ʀᴇɢ ɴᴀᴍᴇ|ᴀɢᴇ*\n\n🎯 ᴇxᴀᴍᴘʟᴇ :\n!ʀᴇɢ ᴀʙʜɪɴᴀᴠ|22`

  const chats = conn.chats.all()
  const groups = chats.filter(v => v.jid.endsWith('g.us'))
  const groupsIn = groups.filter(v => !v.read_only)
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  let old = performance.now()
  await m.reply('*Pong!*')
  let neww = performance.now()
  let speed = neww - old

    conn.reply(`
ᴏɪɪ ${name}!
✅️ ꜱᴘᴇᴇᴅ ᴛᴇꜱᴛ ᴄᴏᴍᴘʟᴇᴛᴇᴅ - *${speed}*
💬 ꜱᴛᴀᴛᴜꜱ :
- *${groups.length}* ɢʀᴏᴜᴘ ᴄʜᴀᴛꜱ
- *${groupsIn.length}* ɢʀᴏᴜᴘꜱ ᴊᴏɪɴᴇᴅ
- *${groups.length - groupsIn.length}* ɢʀᴏᴜᴘꜱ ʟᴇꜰᴛ
- *${chats.length - groups.length}* ᴘᴇʀꜱᴏɴᴀʟ ᴄʜᴀᴛꜱ
- *${chats.length}* ᴛᴏᴛᴀʟ ᴄʜᴀᴛꜱ
📱 *ᴘʜᴏɴᴇ ɪɴꜰᴏ* :
${'```' + `
🔋 Battery : ${conn.battery ? `${conn.battery.value}% ${conn.battery.live ? '🔌 ᴄʜᴀʀɢɪɴɢ...' : '⚡ ᴅɪꜱᴄʜᴀʀɢɪɴɢ'}` : '⛔️ ᴜɴᴋɴᴏᴡɴ'}
${util.format(conn.user.phone)}
`.trim() + '```'}
💻 *ꜱᴇʀᴠᴇʀ ɪɴꜰᴏ* :
ʀᴀᴍ: ${format(os.totalmem() - os.freemem())} / ${format(os.totalmem())}
*ɴᴏᴅᴇᴊꜱ ᴍᴇᴍᴏʀʏ ᴜꜱᴀɢᴇ*
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${format(used[key])}`).join('\n') + '```'}
${cpus[0] ? `*ᴛᴏᴛᴀʟ ᴄᴘᴜ ᴜꜱᴀɢᴇ*
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
*ᴄᴘᴜ ᴄᴏʀᴇ(ꜱ) ᴜꜱᴀɢᴇ (${cpus.length} ᴄᴏʀᴇ ᴄᴘᴜ)*
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim())
}
handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']

handler.command = /^(ping|speed|info)$/i
module.exports = handler
