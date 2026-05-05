import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

export async function before(m, { conn, participants}) {
  if (!m.messageStubType || !m.isGroup) return

  let usuario = `@${m.sender.split`@`[0]}`

  let pp = await conn.getFile('https://api.dix.lat/media/img_1777950921007_KeaXqRLjz.jpg')
    .then(r => r.data)

  let fkontak = {
    key: {
      participants: '0@s.whatsapp.net',
      remoteJid: 'status@broadcast',
      fromMe: false,
      id: 'JirenBot'
    },
    message: {
      locationMessage: {
        name: '♑︎𝐌𝐄𝐋𝐈𝐎𝐃𝐀𝐒 - 𝐁𝐎𝐓ꨄ',
        jpegThumbnail: pp
      }
    },
    participant: '0@s.whatsapp.net'
  }

  let chat = global.db.data.chats[m.chat]
  let users = participants.map(u => conn.decodeJid(u.id))
  const groupAdmins = participants.filter(p => p.admin)
  const listAdmin = groupAdmins.map((v, i) => `*» ${i + 1}. @${v.id.split('@')[0]}*`).join('\n')

  if (chat.detect && m.messageStubType == 2) {
    const chatId = m.isGroup ? m.chat : m.sender;
    const uniqid = chatId.split('@')[0];
    const sessionCandidates = [
      `./${global.sessions || 'Session'}/`,
      './Session/',
      './session/'
    ];
    const sessionPath = sessionCandidates.find(p => existsSync(p));
    if (!sessionPath) return;

    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      if (file.includes(uniqid)) {
        await fs.unlink(path.join(sessionPath, file));
        filesDeleted++;
      }
    }
  } else if (chat.detect && m.messageStubType == 21) {
    await this.sendMessage(m.chat, { text: `〔 ✏️ 〕𝘕𝘰𝘮𝘣𝘳𝘦 𝘢𝘤𝘵𝘶𝘢𝘭𝘪𝘻𝘢𝘥𝘰
> @${m.sender.split('@')[0]} → *${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak })
  } else if (chat.detect && m.messageStubType == 22) {
    await this.sendMessage(m.chat, { text: `〔 🖼️ 〕𝘍𝘰𝘵𝘰 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰 𝘢𝘤𝘵𝘶𝘢𝘭𝘪𝘻𝘢𝘥𝘢
> por @${m.sender.split('@')[0]}`, mentions: [m.sender] }, { quoted: fkontak })
  } else if (chat.detect && m.messageStubType == 24) {
    await this.sendMessage(m.chat, { text: `〔 📝 〕𝘋𝘦𝘴𝘤𝘳𝘪𝘱𝘤𝘪𝘰́𝘯 𝘢𝘤𝘵𝘶𝘢𝘭𝘪𝘻𝘢𝘥𝘢
> por @${m.sender.split('@')[0]}

${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fkontak })
  } else if (chat.detect && m.messageStubType == 25) {
    await this.sendMessage(m.chat, { text: `〔 ⚙️ 〕𝘐𝘯𝘧𝘰 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰
> Pueden editar: *${m.messageStubParameters[0] == 'on' ? 'solo admins' : 'todos'}*`, mentions: [m.sender] }, { quoted: fkontak })
  } else if (chat.detect && m.messageStubType == 26) {
    await this.sendMessage(m.chat, { text: `〔 ${m.messageStubParameters[0] == 'on' ? '🔒' : '🔓'} 〕𝘎𝘳𝘶𝘱𝘰 ${m.messageStubParameters[0] == 'on' ? '𝘤𝘦𝘳𝘳𝘢𝘥𝘰' : '𝘢𝘣𝘪𝘦𝘳𝘵𝘰'}
> ${m.messageStubParameters[0] == 'on' ? 'Solo admins pueden escribir.' : 'Todos pueden escribir.'}`, mentions: [m.sender] }, { quoted: fkontak })
  } else if (chat.detect && m.messageStubType == 29) {
    await this.sendMessage(m.chat, { text: `〔 👑 〕𝘕𝘶𝘦𝘷𝘰 𝘢𝘥𝘮𝘪𝘯
> @${m.messageStubParameters[0].split('@')[0]} fue promovido por @${m.sender.split('@')[0]}`, mentions: [m.sender, m.messageStubParameters[0]] }, { quoted: fkontak })
  } else if (chat.detect && m.messageStubType == 30) {
    await this.sendMessage(m.chat, { text: `〔 🪶 〕𝘈𝘥𝘮𝘪𝘯 𝘳𝘦𝘮𝘰𝘷𝘪𝘥𝘰
> @${m.messageStubParameters[0].split('@')[0]} fue degradado por @${m.sender.split('@')[0]}`, mentions: [m.sender, m.messageStubParameters[0]] }, { quoted: fkontak })
  } else if (chat.detect && m.messageStubType == 72) {
    await this.sendMessage(m.chat, { text: `〔 ⏳ 〕𝘔𝘦𝘯𝘴𝘢𝘫𝘦𝘴 𝘵𝘦𝘮𝘱𝘰𝘳𝘢𝘭𝘦𝘴
> @${m.sender.split('@')[0]} los cambió a *${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak })
  } else if (chat.detect && m.messageStubType == 123) {
    await this.sendMessage(m.chat, { text: `〔 🗑️ 〕𝘔𝘦𝘯𝘴𝘢𝘫𝘦𝘴 𝘵𝘦𝘮𝘱𝘰𝘳𝘢𝘭𝘦𝘴 𝘥𝘦𝘴𝘢𝘤𝘵𝘪𝘷𝘢𝘥𝘰𝘴
> por @${m.sender.split('@')[0]}`, mentions: [m.sender] }, { quoted: fkontak })
  } else {
    console.log({
      messageStubType: m.messageStubType,
      messageStubParameters: m.messageStubParameters
    })
  }
}

