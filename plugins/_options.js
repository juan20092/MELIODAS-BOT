const handler = async (m, { conn, command, args, isOwner, isAdmin }) => {
  let chat = global.db.data.chats[m.chat]
  let bot = global.db.data.settings[conn.user.jid] || {}

  if (!args[0]) {
    return conn.reply(m.chat, `*_╭━━━⊜ ⌊• \`ᴘᴀɴᴇʟ ᴅᴇ ᴄᴏɴᴛʀᴏʟ\` •⌉_*\n*_┃🍃❏ Usa el comando así:_*\n*_┃_* ╰➤ *.on* <función>\n*_┃_* ╰➤ *.off* <función>\n*_╰━━━━━━━━━━━━━━━━⊜_*`, m, rcanal)
  }

  const type = args[0].toLowerCase()
  const isEnable = command === 'on'
  let isAll = false
  let current

  switch (type) {
    case 'welcome':
    case 'bienvenida':
    case 'bv':
      if (!isAdmin && !isOwner) return global.dfail('admin', m, conn)
      current = chat.welcome
      if (current === isEnable) return conn.reply(m.chat, isEnable ? `🪺 *welcome* ya estaba *activado*.` : `🪵 *welcome* ya estaba *desactivado*.`, m, rcanal)
      chat.welcome = isEnable
      break

    case 'modoadmin':
    case 'onlyadmin':
    case 'soloadmin':
      if (!isAdmin && !isOwner) return global.dfail('admin', m, conn)
      current = chat.modoadmin
      if (current === isEnable) return conn.reply(m.chat, isEnable ? `🪺 *modoadmin* ya estaba *activado*.` : `🪵 *modoadmin* ya estaba *desactivado*.`, m, rcanal)
      chat.modoadmin = isEnable
      break

    case 'antilink':
    case 'antienlace':
    case 'antilinks':
    case 'antienlaces':
      if (!isAdmin && !isOwner) return global.dfail('admin', m, conn)
      current = chat.antiLink
      if (current === isEnable) return conn.reply(m.chat, isEnable ? `🪺 *antilink* ya estaba *activado*.` : `🪵 *antilink* ya estaba *desactivado*.`, m, rcanal)
      chat.antiLink = isEnable
      break

    case 'nsfw':
    case 'modohorny':
      if (!isAdmin && !isOwner) return global.dfail('admin', m, conn)
      current = chat.nsfw
      if (current === isEnable) return conn.reply(m.chat, isEnable ? `🪺 *nsfw* ya estaba *activado*.` : `🪵 *nsfw* ya estaba *desactivado*.`, m, rcanal)
      chat.nsfw = isEnable
      break

    case 'economy':
    case 'economia':
      if (!isAdmin && !isOwner) return global.dfail('admin', m, conn)
      current = chat.economy
      if (current === isEnable) return conn.reply(m.chat, isEnable ? `🪺 *economy* ya estaba *activado*.` : `🪵 *economy* ya estaba *desactivado*.`, m, rcanal)
      chat.economy = isEnable
      break

    case 'rpg':
    case 'gacha':
      if (!isAdmin && !isOwner) return global.dfail('admin', m, conn)
      current = chat.gacha
      if (current === isEnable) return conn.reply(m.chat, isEnable ? `🪺 *gacha* ya estaba *activado*.` : `🪵 *gacha* ya estaba *desactivado*.`, m, rcanal)
      chat.gacha = isEnable
      break

    case 'detect':
    case 'alertas':
      if (!isAdmin && !isOwner) return global.dfail('admin', m, conn)
      current = chat.detect
      if (current === isEnable) return conn.reply(m.chat, isEnable ? `🪺 *detect* ya estaba *activado*.` : `🪵 *detect* ya estaba *desactivado*.`, m, rcanal)
      chat.detect = isEnable
      break

    case 'antiprivado':
    case 'antiprivate':
    case 'antipriv':
      isAll = true
      if (!isOwner) return global.dfail('owner', m, conn)
      current = bot.antiPrivate
      if (current === isEnable) return conn.reply(m.chat, isEnable ? `🪺 *antiprivado* ya estaba *activado*.` : `🪵 *antiprivado* ya estaba *desactivado*.`, m, rcanal)
      bot.antiPrivate = isEnable
      break

    case 'antidelete':
    case 'antieliminar':
      if (!isAdmin && !isOwner) return global.dfail('admin', m, conn)
      current = chat.delete
      if (current === isEnable) return conn.reply(m.chat, isEnable ? `🪺 *antidelete* ya estaba *activado*.` : `🪵 *antidelete* ya estaba *desactivado*.`, m, rcanal)
      chat.delete = isEnable
      break

    default:
      return conn.reply(m.chat, `*_⚔️ La función \`${type}\` no es válida._*`, m, rcanal)
  }

  conn.reply(m.chat, `*_⚔️ ʜᴀꜱ \`${isEnable ? 'ᴀᴄᴛɪᴠᴀᴅᴏ' : 'ᴅᴇꜱᴀᴄᴛɪᴠᴀᴅᴏ'}\` ᴇʟ \`${type}\` ${isAll ? 'ᴘᴀʀᴀ ᴇʟ ʙᴏᴛ' : 'ᴇɴ ᴇꜱᴛᴇ ᴄʜᴀᴛ'}._*`, m, rcanal)
}

handler.help = ['on <comando>', 'off <comando>']
handler.tags = ['nable']
handler.command = ['on', 'off']

export default handler
