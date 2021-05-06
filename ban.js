module.exports = {
  
  name: "ban",
  code: `
$ban[$mentioned[1]]
$color[#FF0000]
$footer[Baneado exitosamente!]
$author[Hombre de los bans]
$description[Baneado 🔨]
$addField[Baneado;<@$mentioned[1]>]
$addField[Admin;<@$authorID>]
$addField[Razon;$noMentionMessage]
$argsCheck[>2;Uso: \`$getServerVar[prefix]ban <@usuario> <Razon>\`]
$onlyPerms[manageserver;❌ **Necesitas el permiso MANAGE_SERVER**]
`
}
