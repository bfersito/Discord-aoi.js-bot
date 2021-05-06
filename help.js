module.exports = { 

  name: "help",
  code: `

**- Prefix en este server \`$getServerVar[prefix]\` **
**- Uso \`$getServerVar[prefix]<comando>\` para ejecutar un comando **

**⚙ Comandos de Moderacion**

\`$getServerVar[prefix]kick\` - Expulsa a alguien del server
\`$getServerVar[prefix]ban\` - Banea a alguien del server
\`$getServerVar[prefix]warn\` - Advierte a un usuario
\`$getServerVar[prefix]checkwarn\` - Ve la cantidad de advertencias de un usuario
\`$getServerVar[prefix]removewarn\` - Elimina una advertencia de un usuario
\`$getServerVar[prefix]poll\` - Crea una encuesta
\`$getServerVar[prefix]clear\` - Elimina una cantidad de mensajes
\`$getServerVar[prefix]setprefix\` - Establece un prefix para el bot

**😎 Otros Comandos**

\`$getServerVar[prefix]say\` - Haz que el bot envie el mensaje que voz quieras
\`$getServerVar[prefix]ping\` - Te muesta la latencia del bot
\`$getServerVar[prefix]userinfo\` - Te muestra la informacion del usuario mencionado
\`$getServerVar[prefix]botinfo\` - Te muestra la informacion del bot

`

}
