module.exports = {

 name: "kick",
 code: `
$kick[$mentioned[1];Por $userTag[$authorID] Razon: $sliceMessage[1]]
Successfully Expulsado $username[$mentioned[1]] 
$argsCheck[>1;Use: \`$getServerVar[prefix]kick <@user> <razon>\`]

$onlyPerms[admin;❌ **Necesitas perms de admin**]`
 
 }
