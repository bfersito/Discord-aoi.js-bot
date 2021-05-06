var dbd = require("dbd.js")
var fs = require("fs")

const bot = new dbd.Bot({
token: "TU-TOKEN",
prefix: "$getServerVar[prefix]"
})

bot.status({
  text: "https://github.com/bfernigrini/Discord-dbd.js-bot",
  type: "PLAYING",
  time: 12
})
 
bot.onMessage()

 // Variable
bot.variables({
 prefix: "TU-PREFIX",
 warn: "0"
})


 //commands handler
var reader = fs.readdirSync("./commands/").filter (file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./commands/${file}`)
  bot.command({
name: command.name, 
code: command.code
  })
}
