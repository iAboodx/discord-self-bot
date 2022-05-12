const pkg = require('discord.js');

const client = new pkg.Client();

client.login("").catch(console.error);

setInterval(() => {
    client.login("").catch(console.error);
},7200000)
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Express app!')
});

app.listen(1579, () => {
    console.log('server started');
});
client.on('message', message => {
    if (message.author.id === client.user.id) return;
    let ids = ["606026008109514762", "294882584201003009"]
    if (ids.includes(message.author.id)) {
        setTimeout(() => {
            message.react("🎉").catch(e => {
                console.log("cannot react to message")
            });
        }, 160000);
    }
    // log if someone pinged me 
    let log = client.channels.get("972301674356019220");
    let giveaways = client.channels.get("972295075830853662");

    if (message.content.includes(client.user)) {
        if (message.author.id === "606026008109514762" || message.author.id === "294882584201003009") {
            giveaways.send(`${message.author.tag} (${message.author.id} | ${message.author}) pinged you in <#${message.channel.id}>\n> **CONTENT**: [${message.content}]\n> **SERVER NAME** ${message.guild.name}\n> **MESSAGE LINK:** ${message.url}\n <@555408669488185344>`);
        } else {
            log.send(`${message.author.tag} (${message.author.id} | ${message.author}) pinged you in <#${message.channel.id}>\n> **CONTENT**: [${message.content}]\n> **SERVER NAME** ${message.guild.name}\n> **MESSAGE LINK:** ${message.url}`);
        }
    }
})
client.on('messageReactionAdd', async (reaction, user) => {
    if (reaction.emoji.name === "🎉" || reaction.emoji.name === ":tada:") {
        setTimeout(() => {
            reaction.message.react("🎉").catch(e => {
                console.log("cannot react to message")
            });
        }, 160000);
    }
})