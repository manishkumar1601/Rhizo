global.owner = ['919544707896'] // എന്താ മോനു നിനക്ക് ഇവിടെ കാര്യം 😂 ഇവിടുന്നും എന്റെ നമ്പർ മറ്റുവോ? 😒😬
global.mods = [] // എന്താ? എങ്ങനെയാ ചെയ്യേണ്ടേ എന്ന് അറിയില്ലേ 😂
global.prems = [] // ഇവിടെയും എന്താ ചെയ്യേണ്ടേ എന്ന് അറിയില്ലേ 😂😂
global.APIs = {
  // ഇനി ഒന്നുല്ല പൊക്കോ 👋😁
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  lolh: 'http://lolhuman.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz'
}
global.APIKeys = { 
  // ദേ.. പിന്നേം ഇവിടെ തന്നെ നിൽക്കുവാണോ? ഇറങ്ങി പോടോ മനുഷ്യ 😂😠
  'https://api.xteam.xyz': 'ab9942f95c09ca89',
  'http://lolhuman.herokuapp.com': 'e228d999bd914b35bffb7546',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais'
}

global.packname = 'Sticker Made By Rhizo Bot'
global.author = 'TOXIC DEVIL'

global.multiplier = 69 

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
