//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭🌻𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  IS A WHATSAPP USER-BOT WITH AUTOMATION, MODERATION, MUSIC, GAMES AND MORE OF 200+ COMMANDS!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/config");
var ppth = require("path");
var tpth = ppth.basename(__filename);
var fpth = tpth.slice(0, -3).toLowerCase();
module.exports = async (BloomBot, mags) => {
  try {
    if (!BloomBot.args.join(" ")) {
      await BloomBot.sendMessage(mags.chat, {
        react: {
          text: "❌",
          key: mags.key,
        },
      });
      return mags.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error* 
> _No query provided!_

*🌻Usage* 
> _${BloomBot.prefix}${fpth} manga-name_`
      );
    }

    BloomBot.magfetch(
      BloomBot,
      `https://magneum.vercel.app/api/anime?q=${fpth}`
    ).then(async (response) => {
      var viper = response.data;
      console.log(viper);
      BloomBot.imagebutton(
        BloomBot,
        mags,
        `*🌻Here, ${fpth} for ${BloomBot.pushname || BloomBot.Tname}:* 
MAL_Id: ${viper.meta.id_mal}
TITLE: ${viper.meta.title}
EN_TITLE: ${viper.meta.en_title}
JP_TITLE: ${viper.meta.jp_title}
IMAGE: ${viper.meta.image}
PREMIERED: ${viper.meta.premiered}
WEBPAGE: ${viper.meta.webpage}
BROADCAST: ${viper.meta.broadcast}
GENRES: ${viper.meta.genres}
TYPE: ${viper.meta.type}
EPISODES: ${viper.meta.episodes}
RATING: ${viper.meta.rating}
AIRED: ${viper.meta.aired}
SCORE: ${viper.meta.score}
FAVORITES: ${viper.meta.favorites}
RANK: ${viper.meta.rank}
DURATION: ${viper.meta.duration}
STUDIOS: ${viper.meta.studios}
PRODUCERS: ${viper.meta.producers}
POPULARITY: ${viper.meta.popularity}
TOTAL_MEMBERS: ${viper.meta.members}
SCORE_STATUS: ${viper.meta.scores}
SOURCE: ${viper.meta.source}
SYNONYMS: ${viper.meta.synonyms}
SYNOPSIS: ${viper.meta.synopsis}
CHARACTERS: ${viper.meta.charaters}
STAFF: ${viper.meta.staffs}`,
        viper.meta.image
      );
    });
  } catch (error) {
    return BloomBot.handlerror(BloomBot, mags, error);
  }
};
module.exports.aliases = [];
