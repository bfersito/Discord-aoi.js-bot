module.exports = {
  
  name: "clear",
  code: `
$deletecommand
$deleteIn[5s]
✅ Hecho! $message eliminados.
$clear[$message]
$argsCheck[1;Uso: \`$getServerVar[prefix]clear <cantidad>\`]
$onlyPerms[admin;❌ **Necesitas permisos de administrador**]`
}
