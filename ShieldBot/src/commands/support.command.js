const { MessageEmbed } = require('discord.js');
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;

module.exports = {
    name: "support",
    category: "Bot",
    run: async (msg, args, client) => {

        const Embed = new MessageEmbed()
        .setTitle("Support Bota")
        .setColor("RED")
        .setDescription(`Jeżeli zaciekawił cię Shield Bot miło by było żebyś dołączył na nasz [serwer support](https://discord.gg/2DfpEQvcVa)`)
        .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`)
        msg.channel.send(Embed);
    }
}