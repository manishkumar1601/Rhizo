function handler(m) {
  // എന്താ മോനു ഇവിടെ കാര്യം? 😂
  // owner Name & Number മാറ്റാൻ വന്നതാണോ? 😁
  this.sendContact(m.chat, '919544707896', 'TOXIC DEVIL', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
