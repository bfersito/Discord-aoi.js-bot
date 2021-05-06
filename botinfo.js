module.exports = {
  name: "botinfo",
  aliases: ["info"],
  code: 
  `
  $thumbnail[https://i.imgur.com/XDczAbn.jpg]
  $color[#48eaf8]
  $addField[Uptime;\`\`\`$uptime\`\`\`;no]
  $addField[Canales;$channelCount;yes]
  $addField[Usuarios;$membersCount;yes]
  $addField[Servers;$serverCount;yes]
  $addField[Dbd.js Version;$packageVersion]
  $addField[Nombre;Bot]
  `
}
