module.exports = {

name: "setprefix",
code: `
$author[Hecho!;https://cdn.discordapp.com/attachments/795965782944120862/798540261353193472/6286_tada_animated.gif]
$description[Mi prefix en este server ahora es \`$message\`, Para ayuda pon \`$getServerVar[prefix]help\`]
$footer[Bot | Solicitado por $username]
$color[$random[0;999999]]
$addTimestamp
$setServerVar[prefix;$message]
$argsCheck[>1;Usa: \`$getServerVar[prefix]setprefix <prefix nuevo>\`]
$onlyPerms[admin;❌ **Necesitas ser Administrador**]`
}
