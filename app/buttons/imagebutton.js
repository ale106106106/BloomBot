//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ NekoBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐍𝐞𝐤𝐨𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 NekoBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of NekoBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ NekoBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
module.exports = async (NekoBot, nekos, 𝚌𝚘𝚗𝚝є𝚡𝚝, imåge) => {
  if (NekoBot.isReply) {
    var receiver =
      NekoBot.mtype == "extendedTextMessage" &&
      NekoBot.message.extendedTextMessage.contextInfo != null
        ? NekoBot.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    await NekoBot.sendMessage(
      nekos.chat,
      {
        image: { url: imåge },
        caption: `*📢Id:* ${nekos.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer: "*NekoBot by magneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${NekoBot.prefix}Dashboard`,
            buttonText: { displayText: `${NekoBot.prefix}Dashboard` },
            type: 1,
          },
          {
            buttonId: `${NekoBot.prefix}Help`,
            buttonText: { displayText: `${NekoBot.prefix}Help` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [nekos.sender, receiver],
      },
      {
        contextInfo: { mentionedJid: [nekos.sender, receiver] },
        quoted: nekos,
      }
    ).catch((e) => console.log(e));
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ NekoBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else if (NekoBot.mentionByTag) {
    var receiver =
      NekoBot.mtype == "extendedTextMessage" &&
      NekoBot.message.extendedTextMessage.contextInfo != null
        ? NekoBot.message.extendedTextMessage.contextInfo.mentionedJid
        : [];
    await NekoBot.sendMessage(
      nekos.chat,
      {
        image: { url: imåge },
        caption: `*📢Id:* ${nekos.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer: "*NekoBot by magneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${NekoBot.prefix}Dashboard`,
            buttonText: { displayText: `${NekoBot.prefix}Dashboard` },
            type: 1,
          },
          {
            buttonId: `${NekoBot.prefix}Help`,
            buttonText: { displayText: `${NekoBot.prefix}Help` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [nekos.sender, receiver],
      },
      {
        contextInfo: { mentionedJid: [nekos.sender, receiver] },
        quoted: nekos,
      }
    ).catch((e) => console.log(e));
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ NekoBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else {
    return await NekoBot.sendMessage(
      nekos.chat,
      {
        image: { url: imåge },
        caption: `*📢Id:* ${nekos.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer: "*NekoBot by magneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${NekoBot.prefix}Dashboard`,
            buttonText: { displayText: `${NekoBot.prefix}Dashboard` },
            type: 1,
          },
          {
            buttonId: `${NekoBot.prefix}Help`,
            buttonText: { displayText: `${NekoBot.prefix}Help` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [nekos.sender],
      },
      {
        contextInfo: { mentionedJid: [nekos.sender] },
        quoted: nekos,
      }
    ).catch((e) => console.log(e));
  }
};