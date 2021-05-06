module.exports = {
  name: "userinfo",
  code:
    `
  $author[$userTag[$findUser[$message]]]
  $color[BLUE]
  $thumbnail[$replaceText[$userAvatar[$findUser[$message]];size=2048;size=1024]]
  $addField[Rol mas alto; <@&$highestRole[$findUser[$message]]>]
  $addField[Tag;$discriminator[$findUser[$message]];yes]
  $addField[Apodo;$nickname[$findUser[$message]];yes]
  $addField[Insignias: $getUserBadges[$findUser[$message]];** **]
  `
}
