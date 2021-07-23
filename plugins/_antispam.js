/* let handler = m => m

handler.all = async function (m) {
    if (!m.message) return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 20) {
            if (this.spam[m.sender].count > 20) {
                m.reply('*⚠️ ꜱᴘᴀᴍᴍᴇʀ ᴅᴇᴛᴇᴄᴛᴇᴅ ⚠️*')
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
            m.reply(`*[ ⚠️ ʙᴏᴛ ᴄᴀɴ'ᴛ ꜱᴜʀᴠɪᴠᴇ, ɪꜰ ꜱᴏᴍᴇᴏɴᴇ ꜱᴘᴀᴍ ⚠️ ]*`)
            this.groupRemove(m.chat, [m.sender])
        }
    }
    else this.spam[m.sender] = {
        jid: m.sender,
        count: 0,
        lastspam: 0
    }
}

module.exports = handler */
