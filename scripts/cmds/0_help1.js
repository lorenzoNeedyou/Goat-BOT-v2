const commandInfoMap = {
  ai: {
    name: "ai",
    description: "Ai Based on GPT-4",
    guide: "-ai what is life?"
    },
  knight: {
    name: "knight",
    description: "a medieval knight that has been called upon as an ai you can talk to",
    guide: "-knight tell me about yourself."
  },
axis: {
    name: "axis",
    description: "an ai you can ask for anything",
    guide: "-axis what is life?"
    },
  join: {
    name: "join",
    description: "Join existing group chats where the bot is in.",
    guide: "-join"
  },
  opm: {
    name: "opm",
    description: "sends random opm (original pilipino music)",
    guide: "-opm"
  },
  video: {
    name: "video",
    description: "searches and sends youtube video (mostly use between 1-7mins)",
    guide: "-video <video title>"
  },
  blackbox: {
    name: "blackbox",
    description: "BlackBox Ai that you can ask for anything.",
    guide: "-blackbox what is life?"
  },
  perplexity: {
    name: "perplexity",
    description: "Perplexity AI: Fine-tuned for Google search.",
    guide: "-perplexity what is life?"
  },
  bard: {
    name: "bard",
    description: "Google Bard",
    guide: "-bard what is life"
  },
adduser: {
    name: "adduser",
    description: "add users to group chat using their uid or profile link",
    guide: "-adduser <uid>\n-adduser <profile link>"
  },
  tempmail: {
    name: "tempmail",
    description: "Get Temporary Emails and it's Inbox messages",
    guide: "-tempmail create\n-tempmail inbox <email>"
  },
  claire: {
    name: "claire",
    description: "an ai based on gpt-4",
    guide: "-claire what is life"
  },
  gpt: {
    name: "gpt",
    description: "ChatGPT 3.5",
    guide: "-gpt what is life?"
  },
  gptdraw: {
    name: "gptdraw",
    description: "generates image using chatgpt",
    guide: "-gpt draw cat"
  },
  gemini: {
    name: "gemini",
    description: "Google Gemini LLM",
    guide: "-gemini what is life?"
  },
  translate: {
    name: "translate",
    description: "Translate to any languages",
    guide: "Reply to text you want to translate and type \n-translate <language>"
  },
  poet: {
    name: "poet",
    description: "A poetic ai persona who shares enlightenment through poems and poetry.",
    guide: "-poet give me advice"
  },
  tia: {
    name: "tia",
    description: "a girl you can talk with when bored",
    guide: "-tia do you have a boyfriend?"
  },
  dalle: {
    name: "dalle",
    description: "make image through text",
    guide: "-dalle cat"
  },
  image: {
    name: "image",
    description: "Search HD images online",
    guide: "-image cat"
  },
  gmage: {
    name: "gmage",
    description: "Search Google Images online",
    guide: "-gmage cat"
  },
  pinterest: {
    name: "pinterest",
    description: "Searches Images in Pinterest ",
    guide: "-pinterest cat -10"
  },
  prodia: {
    name: "prodia",
    description: "make images through texts",
    guide: "-prodia cat"
  },
  imagine: {
    name: "imagine",
    description: "make animated images through your imagination",
    guide: "-imagine cat with dinosaur's body"
  },
  remini: {
    name: "remini",
    description: "enhances your image to lessen the blur",
    guide: "reply to image and type -remini"
  },
remini: {
    name: "upscale",
    description: "enhances your image to lessen the blur",
    guide: "reply to image and type -upscale"
  },
  chords: {
    name: "chords",
    description: "Searches lyrics with chords",
    guide: "-chords all of me"
  },
  lyrics: {
    name: "lyrics",
    description: "Fetches lyrics of a song",
    guide: "-lyrics perfect by ed sheeran"
  },
  play: {
    name: "play",
    description: "plays a song with lyrics",
    guide: "-play perfect by ed sheeran"
  },
  song: {
    name: "song",
    description: "plays a song",
    guide: "-song perfect by ed sheeran"
  },
  spotify: {
    name: "spotify",
    description: "fetches song from spotify",
    guide: "-spotify perfect by ed sheeran"
  },
  alldl: {
    name: "alldl",
    description: "downloads reels, shorts, insta, tiktok videos, and spotify song through link",
    guide: "-alldl <link>"
  },
  clean: {
    name: "clean",
    description: "Cleans cache files of the bot",
    guide: "-clean"
  },
  font: {
    name: "font",
    description: "changes your font text",
    guide: "-font list\n-font <font name> <text>"
  },
  help: {
    name: "help",
    description: "View all commands",
    guide: "-help\n-help <command name>"
  },
  prefix: {
    name: "prefix",
    description: "view some commands and shows bot's prefix",
    guide: "prefix"
  },
  stat: {
    name: "stat",
    description: "See server stats where bot is running",
    guide: "-stat"
  },
  uid: {
    name: "uid",
    description: "shows your facebook uid",
    guide: "-uid"
  },
  unsend: {
    name: "unsend",
    description: "deletes bot messages",
    guide: "reply to bot message and type -unsend"
  },
  uptime: {
    name: "uptime",
    description: "Shows how many hours the bot is running",
    guide: "-uptime"
  },
};

module.exports = {
  config: {
    name: "help1",
    aliases: ["help1"],
    version: 1.0,
    author: "LiANE",
    shortDescription: { en: "View all commands" },
    category: "members",
  },
  onStart: async function({ message, args }) {
    if (args[0]) {
      const command = args[0].toLowerCase();
      if (commandInfoMap[command]) {
        const { name, description, guide } = commandInfoMap[command];
        const response = `━━━━━━━━━━━━━━━━\n𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝙽𝚊𝚖𝚎: ${name}\n𝙳𝚎𝚜𝚌𝚛𝚒𝚙𝚝𝚒𝚘𝚗: ${description}\n𝙶𝚞𝚒𝚍𝚎: ${guide}\n━━━━━━━━━━━━━━━━`;
        return message.reply(response);
      } else {
        return message.reply("Command not found.");
      }
    } else {
      const commandsList = `━━━━━━━━━━━━━━━━
     ♡♡
𝙰𝚟𝚊𝚒𝚕𝚊𝚋𝚕𝚎 𝙲𝚘𝚖𝚖𝚊𝚗𝚍𝚜:
╭─╼━━━━━━━━╾─╮
│  📖 | 𝙴𝚍𝚞𝚌𝚊𝚝𝚒𝚘𝚗
│ - Ai
│ - Translate
│ - Wordguess
│ - Guessword
╰─━━━━━━━━━╾─╯
╭─╼━━━━━━━━╾─╮
│  🗨 | 𝙰𝚒 - 𝙲𝚑𝚊𝚝 
│ - Tia
╰─━━━━━━━━━╾─╯
╭─╼━━━━━━━━╾─╮
│  🖼 | 𝙸𝚖𝚊𝚐𝚎
│ - Pinterest
│ - Remini
│ - Album
│ - Dhbc
╰─━━━━━━━━━╾─╯
╭─╼━━━━━━━━╾─╮
│  🎧 | 𝙼𝚞𝚜𝚒𝚌
│ - Spotify
│ - Chords
│ - Song
│ - Music
╰─━━━━━━━━━╾─╯
╭─╼━━━━━━━━╾─╮
│  🌟🌠 | 𝚆𝙽
│ - Weather 
│ - Moon
╰─━━━━━━━━━╾─╯
╭─╼━━━━━━━━╾─╮
│  👥 | 𝙼𝚎𝚖𝚋𝚎𝚛𝚜 
│ - Alldl
│ - Font
│ - Help
│ - Prefix
│ - Tempmail
│ - Uid
│ - Tid
│ - Unsend
│ - Uptime
│ - Busy
│ - Callad
│ - Usage
│ - Setname
│ - Daily
│ - Balance
│ - Count 
│ - Emojimix
│ - Hubble
╰─━━━━━━━━━╾─╯
╭─╼━━━━━━━━╾─╮
│  👑  | 𝙰𝚍𝚖𝚒𝚗 
│ - Ban
│ - Cmd
│ - Getfbstate
│ - Delete
│ - Kick
│ - Spamkick
│ - Grouptag
│ - Restart 
│ - Update
│ - Filteruser
│ - Loadconfig
│ - Rules
╰─━━━━━━━━━╾─╯
•𝚃𝚈𝙿𝙴 -𝙷𝙴𝙻𝙿 <𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙽𝙰𝙼𝙴>
𝚃𝙾 𝚂𝙴𝙴 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 
𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙸𝙾𝙽 𝙰𝙽𝙳 𝚄𝚂𝙰𝙶𝙴

•𝙰𝙳𝙼𝙸𝙽 𝚁𝚄𝙻𝙴𝚂 
➪ 𝙳𝙾 𝙽𝙾𝚃 𝙲𝙷𝙰𝙽𝙶𝙴
𝙱𝙰𝙲𝙺𝙶𝚁𝙾𝚄𝙽𝙳 𝙰𝙽𝙳 𝙽𝙰𝙼𝙴
➪ 𝙰𝚅𝙾𝙸𝙳 𝚂𝙿𝙰𝙼𝙼𝙸𝙽𝙶 
𝙰𝚄𝚃𝙾 𝚁𝙴𝙼𝙾𝚅𝙴 
➪ 𝙽𝙾𝚃 𝙰𝙻𝙻𝙾𝚆𝙴𝙳 𝚃𝙾 𝚂𝙴𝙽𝙳
 𝙽𝚅𝙳𝙴𝚂 𝙿𝙸𝙲𝚃𝚄𝚁𝙴𝚂 𝙾𝚁 𝚅𝙸𝙳
➪ 𝚁𝙴𝚂𝙿𝚂𝙲𝚃 𝙴𝙰𝙲𝙷 𝙾𝚃𝙷𝙴𝚁 

•𝙼𝚎𝚗𝚝𝚒𝚘𝚗 𝚝𝚑𝚎 𝚘𝚠𝚗𝚎𝚛
𝚠𝚑𝚎𝚗 𝚋𝚘𝚝 𝚒𝚜 𝚍𝚒𝚎
@

♥︎♡ 𝚃𝙷𝙰𝙽𝙺𝚂 𝙵𝙾𝚁 𝚄𝚂𝙸𝙽𝙶 𝚃𝙷𝙸𝚂 𝙱𝙾𝚃 𝙰𝙽𝙳 𝙴𝙽𝙹𝙾𝚈 ♥︎♡

@𝙰𝚕𝚕 𝚛𝚒𝚐𝚑𝚝 𝚛𝚎𝚜𝚎𝚛𝚟𝚎𝚍 2024
━━━━━━━━━━━━━━━━`;

      return message.reply(commandsList);
    }
  }
};
