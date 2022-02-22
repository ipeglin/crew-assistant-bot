module.exports = {
    name: "annoy",
    aliases: ["mutilate"],
    cooldown: 86400,
    description: "Annoy your Discord friends",
    args: true,
    usage: "<@user>",
    permissions: "KICK_MEMBERS",
    guildOnly: true,
    execute(message, args) {
        if (!message.mentions.users.size) return message.reply("You need to tag a user!");
        const taggedUser = message.mentions.users.first();

        const messageLimit = (taggedUser.id == "252448213720629248") ? 50 : 15;
        const amountOfMessages = (5 + Math.floor(Math.random() * messageLimit));
        
        let Sent = 0;

        message.channel.bulkDelete(1, true).catch(err => {
            console.error(err);
            message.channel.send("There was an error trying to prune messages in this channel!");
        });

        
        if (taggedUser.id == "252755078656688138") {
            message.reply(`I see you are trying to annoy my creator. I'd advice against playing with fire, but I'll allow it just this once... Or perhaps ${amountOfMessages} times ( ͡° ͜ʖ ͡°).`);
        } else {
            message.channel.send(`I have decided, by my own free will, that I'm gonna annoy <@${taggedUser.id}> a "little". ${amountOfMessages} times in fact.`);
        }

        const spamInterval = setInterval(() => {
            taggedUser.send(`Are you annoyed yet, <@${taggedUser.id}>?`, { split: true })
                .then(() => console.log(`${taggedUser.username} was annoyed ${Sent} time(s)`))
                .catch((error) => console.error(`Could not annoy user: ${taggedUser.displayName}`))
            
            Sent++;
            if (Sent >= amountOfMessages) return clearInterval(spamInterval);
        }, (500 + Math.floor(Math.random() * 2000)));
    }
}