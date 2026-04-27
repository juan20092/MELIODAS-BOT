import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumber = "" //Ejemplo: 573218138672

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
"573223702049",
"573104125733"
]

global.suittag = ["573223702049"] 
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.libreria = "Baileys Multi Device"
global.vs = "^1.8.2 • Latest"
global.nameqr = "♑︎𝐌𝐄𝐋𝐈𝐎𝐃𝐀𝐒 - 𝐁𝐎𝐓ꨄ"
global.sessions = "Sessions/Principal"
global.jadi = "Sessions/SubBot"
global.kanekiAIJadibts = true

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.botname = "♑︎𝐌𝐄𝐋𝐈𝐎𝐃𝐀𝐒 - 𝐁𝐎𝐓ꨄ"
global.textbot = "︵✰𝕸𝖊𝖑𝖎𝖔𝖉𝖆𝖘-𝕭𝖔𝖙ᯓ • мα∂є ву 𝖏𝖚𝖆𝖓-𝖜𝖟7"
global.dev = "© ⍴᥆ᥕᥱrᥱძ ᑲᥡ 𝖏𝖚𝖆𝖓-𝖜𝖟7"
global.author = "© mᥲძᥱ ᥕі𝗍һ ᑲᥡ 𝖏𝖚𝖆𝖓-𝖜𝖟7"
global.etiqueta = "︵✰𝕸𝖊𝖑𝖎𝖔𝖉𝖆𝖘-𝕭𝖔𝖙ᯓ  ⊹꙰ "
global.gt = '© ᥴrᥱᥲ𝗍ᥱძ ᑲᥡ 𝖏𝖚𝖆𝖓-𝖜𝖟7♑︎'

global.currency = "¥enes"
global.banner = "https://api.dix.lat/media2/1777327424999.jpg"
global.icono2 = "https://api.dix.lat/media2/1777327498020.jpg"
global.catalogo = fs.readFileSync('./lib/catalogo.jpg')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.group = "https://whatsapp.com/channel/0029VbC34Nt42DchIWA0q11f"
global.community = "https://whatsapp.com/channel/0029VbC34Nt42DchIWA0q11f"
global.channel = "https://whatsapp.com/channel/0029VbC34Nt42DchIWA0q11f"
global.github = "https://github.com/Shadow-nex/KanekiBot-V3"
global.gmail = "juanboli2009@gmail.com"
global.ch = {
ch1: "120363419404216418@newsletter"
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.APIs = {
xyro: { url: "https://xyro.site", key: null },
yupra: { url: "https://api.yupra.my.id", key: null },
vreden: { url: "https://api.vreden.web.id", key: null },
delirius: { url: "https://api.delirius.store", key: null },
zenzxz: { url: "https://api.zenzxz.my.id", key: null },
siputzx: { url: "https://api.siputzx.my.id", key: null }
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.redBright("Update 'configXD.js'"))
import(`${file}?update=${Date.now()}`)
})
