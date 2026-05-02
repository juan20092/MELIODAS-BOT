import fs from 'fs'
import fetch from 'node-fetch'
import { WAMessageStubType } from '@whiskeysockets/baileys'

const prefijosPais = {
  '1': '🇺🇸 Estados Unidos / 🇨🇦 Canadá',
  '7': '🇷🇺 Rusia / 🇰🇿 Kazajistán',
  '20': '🇪🇬 Egipto',
  '27': '🇿🇦 Sudáfrica',
  '30': '🇬🇷 Grecia',
  '31': '🇳🇱 Países Bajos',
  '32': '🇧🇪 Bélgica',
  '33': '🇫🇷 Francia',
  '34': '🇪🇸 España',
  '39': '🇮🇹 Italia',
  '40': '🇷🇴 Rumania',
  '41': '🇨🇭 Suiza',
  '43': '🇦🇹 Austria',
  '44': '🇬🇧 Reino Unido',
  '45': '🇩🇰 Dinamarca',
  '46': '🇸🇪 Suecia',
  '47': '🇳🇴 Noruega',
  '48': '🇵🇱 Polonia',
  '49': '🇩🇪 Alemania',
  '51': '🇵🇪 Perú',
  '52': '🇲🇽 México',
  '54': '🇦🇷 Argentina',
  '55': '🇧🇷 Brasil',
  '56': '🇨🇱 Chile',
  '57': '🇨🇴 Colombia',
  '58': '🇻🇪 Venezuela',
  '60': '🇲🇾 Malasia',
  '62': '🇮🇩 Indonesia',
  '63': '🇵🇭 Filipinas',
  '64': '🇳🇿 Nueva Zelanda',
  '65': '🇸🇬 Singapur',
  '66': '🇹🇭 Tailandia',
  '81': '🇯🇵 Japón',
  '82': '🇰🇷 Corea del Sur',
  '84': '🇻🇳 Vietnam',
  '86': '🇨🇳 China',
  '90': '🇹🇷 Turquía',
  '91': '🇮🇳 India',
  '92': '🇵🇰 Pakistán',
  '94': '🇱🇰 Sri Lanka',
  '98': '🇮🇷 Irán',
  '212': '🇲🇦 Marruecos',
  '213': '🇩🇿 Argelia',
  '216': '🇹🇳 Túnez',
  '218': '🇱🇾 Libia',
  '220': '🇬🇲 Gambia',
  '221': '🇸🇳 Senegal',
  '222': '🇲🇷 Mauritania',
  '223': '🇲🇱 Mali',
  '225': '🇨🇮 Costa de Marfil',
  '226': '🇧🇫 Burkina Faso',
  '227': '🇳🇪 Níger',
  '228': '🇹🇬 Togo',
  '229': '🇧🇯 Benín',
  '230': '🇲🇺 Mauricio',
  '231': '🇱🇷 Liberia',
  '233': '🇬🇭 Ghana',
  '234': '🇳🇬 Nigeria',
  '255': '🇹🇿 Tanzania',
  '256': '🇺🇬 Uganda',
  '260': '🇿🇲 Zambia',
  '263': '🇿🇼 Zimbabue'
}

function detectarPais(jid) {
  const num = jid.split('@')[0]
  for (const [prefijo, pais] of Object.entries(prefijosPais)) {
    if (num.startsWith(prefijo)) return pais
  }
  return '🌍 Desconocido'
}

async function generarBienvenida({ conn, userId, groupMetadata, chat }) {
  const username = `@${userId.split('@')[0]}`
  const pp = await conn.profilePictureUrl(userId, 'image').catch(() => 'https://i.imgur.com/HUyM3Ny.jpeg')

  const fecha = new Date()
  const fechaTexto = fecha.toLocaleDateString("es-ES", { timeZone: "America/Mexico_City", day: 'numeric', month: 'long', year: 'numeric' })
  const hora = fecha.toLocaleTimeString("es-ES", { timeZone: "America/Mexico_City", hour: '2-digit', minute: '2-digit' })

  const pais = detectarPais(userId)
  const groupSize = groupMetadata.participants.length + 1
  const desc = groupMetadata.desc?.toString() || 'Sin descripción'
  const mensaje = (chat.sWelcome || 'Edita con el comando "setwelcome"')
    .replace(/{usuario}/g, `${username}`)
    .replace(/{grupo}/g, `*${groupMetadata.subject}*`)
    .replace(/{desc}/g, `${desc}`)

  const caption = `👋 ¡Hola, ${username}!
Bienvenid@ al grupo *_${groupMetadata.subject}_*

🍃 *_Esperamos que disfrutes tu estadía._*

🌿 \`𝐈𝐧𝐟𝐨 - 𝐆𝐫𝐨𝐮𝐩:\`
 • ᴍɪᴇᴍʙʀᴏs: ${groupSize}
 • ᴘᴀíꜱ: ${pais}
 • ʜᴏʀᴀ: ${hora}
 • ғᴇᴄʜᴀ: ${fechaTexto}
 • ᴅᴇsᴄʀɪᴘᴄɪᴏɴ: ${mensaje}`

  return { pp, caption, username }
}

async function generarDespedida({ conn, userId, groupMetadata, chat }) {
  const username = `@${userId.split('@')[0]}`
  const pp = await conn.profilePictureUrl(userId, 'image').catch(() => 'https://i.imgur.com/HUyM3Ny.jpeg')

  const fecha = new Date()
  const fechaTexto = fecha.toLocaleDateString("es-ES", { timeZone: "America/Mexico_City", day: 'numeric', month: 'long', year: 'numeric' })
  const hora = fecha.toLocaleTimeString("es-ES", { timeZone: "America/Mexico_City", hour: '2-digit', minute: '2-digit' })

  const pais = detectarPais(userId)
  const groupSize = groupMetadata.participants.length - 1
  const desc = groupMetadata.desc?.toString() || 'Sin descripción'
  const mensaje = (chat.sBye || 'Edita con el comando "setbye"')
    .replace(/{usuario}/g, `${username}`)
    .replace(/{grupo}/g, `*${groupMetadata.subject}*`)
    .replace(/{desc}/g, `*${desc}*`)

  const caption = `💐 ${username}, ha salido del grupo *"_${groupMetadata.subject}_"*

🌾 ${mensaje}

📉 \`𝐄𝐬𝐭𝐚𝐝𝐨 𝐀𝐜𝐭𝐮𝐚𝐥:\`
 • ᴍɪᴇᴍʙʀᴏs: ${groupSize}
 • ᴘᴀíꜱ: ${pais}
 • ʜᴏʀᴀ: ${hora}
 • ғᴇᴄʜᴀ: ${fechaTexto}`

  return { pp, caption, username }
}

let handler = m => m
handler.before = async function (m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return !0
  const chat = global.db.data.chats[m.chat]
  const userId = m.messageStubParameters[0]
  const who = userId || '0@s.whatsapp.net'

  const meta = groupMetadata
  const totalMembers = meta.participants.length
  const groupSubject = meta.subject
  const date = new Date().toLocaleString('es-PE', { year: 'numeric', month: '2-digit', day: '2-digit', hour12: false, hour: '2-digit', minute: '2-digit' })

  let thumbBuffer
  try {
    const res = await fetch('https://i.postimg.cc/rFfVL8Ps/image.jpg')
    thumbBuffer = Buffer.from(await res.arrayBuffer())
  } catch {
    thumbBuffer = null
  }

  const fkontak = {
    key: { participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast', fromMe: false, id: 'Halo' },
    message: { locationMessage: { name: '🍓 𝙒𝙚𝙡𝙘𝙤𝙢𝙚 - 𝙆𝙖𝙣𝙚𝙠𝙞 𝙈𝘿 🍟', jpegThumbnail: thumbBuffer } },
    participant: '0@s.whatsapp.net'
  }

  // BIENVENIDA
  if (chat.welcome && m.messageStubType == WAMessageStubType.GROUP_PARTICIPANT_ADD) {
    const { pp, caption, username } = await generarBienvenida({ conn, userId, groupMetadata, chat })
    const pais = detectarPais(userId)

    const productMessage = {
      product: {
        productImage: { url: pp },
        productId: '24529689176623820',
        title: `꒰͡•*゜・。🍃 ˗ˏˋ ♡ ˎˊ˗🅆🄴🄻🄲🄾🄼🄴!˗ˏˋ ♡ ˎˊ˗🍬 ꒰͡•*゜・。 ͡꒱ֽ ׄ`,
        description: caption,
        currencyCode: 'USD',
        priceAmount1000: '100000',
        retailerId: 1677,
        url: `https://wa.me/${userId.split('@')[0]}`,
        productImageCount: 1
      },
      businessOwnerJid: who,
      caption: caption,
      footer: `👥 Miembros: ${totalMembers} • 📅 ${date}`,
      interactiveButtons: [
        {
          name: 'quick_reply',
          buttonParamsJson: JSON.stringify({
            display_text: '🌿 ᴍᴇɴᴜ - ᴋᴀɴᴇᴋɪ ᴀɪ 💐',
            id: '#menu'
          })
        }
      ],
      mentions: [userId]
    }

    await conn.sendMessage(m.chat, productMessage, { quoted: fkontak })
  }

  // DESPEDIDA
  if (chat.welcome && (m.messageStubType == WAMessageStubType.GROUP_PARTICIPANT_REMOVE || m.messageStubType == WAMessageStubType.GROUP_PARTICIPANT_LEAVE)) {
    const { pp, caption, username } = await generarDespedida({ conn, userId, groupMetadata, chat })
    const pais = detectarPais(userId)

    const productMessage = {
      product: {
        productImage: { url: pp },
        productId: '24529689176623820',
        title: `꒰͡•*゜・。🍃 ˗ˏˋ ♡ ˎˊ˗🅆🄴🄻🄲🄾🄼🄴!˗ˏˋ ♡ ˎˊ˗🍬 ꒰͡•*゜・。 ͡꒱ֽ ׄ`,
        description: caption,
        currencyCode: 'USD',
        priceAmount1000: '100000',
        retailerId: 1677,
        url: `https://wa.me/${userId.split('@')[0]}`,
        productImageCount: 1
      },
      businessOwnerJid: who,
      caption: caption,
      footer: `👥 Miembros: ${totalMembers} • 📅 ${date}`,
      interactiveButtons: [
        {
          name: 'quick_reply',
          buttonParamsJson: JSON.stringify({
            display_text: '🌿 ᴍᴇɴᴜ - ᴋᴀɴᴇᴋɪ ᴀɪ 💐',
            id: '#menu'
          })
        }
      ],
      mentions: [userId]
    }

    await conn.sendMessage(m.chat, productMessage, { quoted: fkontak })
  }
}

export { generarBienvenida, generarDespedida }
export default handler
