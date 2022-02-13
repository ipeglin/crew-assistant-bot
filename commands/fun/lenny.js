module.exports = {
    name: "lenny",
    aliases: ["siege?", "sexy"],
    cooldown: 15,
    description: "Give your friends some sexual attention, or just ask them out for some Rainbox Six Siege.",
    permissions: "KICK_MEMBERS",
    guildOnly: true,
    execute(message, args) {
        if (!message.mentions.users.size) return message.send("( ͡° ͜ʖ ͡°)?");
        const taggedUser = message.mentions.users.first();

        if (taggedUser.id == "252447131179155457") return message.send(`Berwan du er jævlig gay. ( ͡° ͜ʖ ͡°) BTW?. Løv u <@${taggedUser.id}>`);

        message.send(`( ͡° ͜ʖ ͡°)? <@${taggedUser.id}>`)
    }
}