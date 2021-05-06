module.exports = {
  
  name: "poll",
  code: `$title[Tiempo de Encuesta!]
$addReactions[👍;👎;❔]
$description[$message] 
$footer[👍 Si - 👎 No - ❔ Capaz]
$color[$random[0;999999]]
$argsCheck[>1;**Uso:** \`$getServerVar[prefix]poll <encuesta>\`]
$onlyPerms[admin;❌ **Nesecitas permisos de administrador**]`
}
