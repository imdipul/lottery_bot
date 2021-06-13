const Discord = require('discord.js');
const random = require('random');
const fs = require('fs');
const jsonfile = require('jsonfile');
const Canvas = require('canvas');
const ms = require('ms');
const moment = require('moment');   
const { create } = require('domain');
const { url } = require('inspector');
const bot = new Discord.Client();

const token = '';
const PREFIX = 'mrp-';
const fcool = new Set();
let cdsecs = 8640 * 10;

bot.on('ready', () =>{
    console.log('The bot is online!');
    bot.user.setActivity('type "mrp-help" for commands').catch(console.error);
})

bot.on('message', async message=> {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;
    const mentionedMember = message.mentions.users.first()

    if (message.author.id === bot.user.id)
        return;

    const args = message.content.slice(PREFIX.length).trim().split(/ +/);

    switch(args[0]){

        case 'luckydraw':
        if(fcool.has(message.author.id)){
            message.reply('You can use this once every week only!');
        }else{
            if(args[1] === martk){
                function doRandHT() {
                    var rand = ['0.002',
                    '0.003',
                    '0.004',
                    '0.005',
                    '0.006',
                    '0.007',
                    '0.008',
                    '0.009',
                    '0.01',
                    '0.02',
                    '0.03',
                    '0.04',
                    '0.05',
                    '0.06',
                    '0.07',
                    '0.08',
                    '0.09',
                    '0.1',
                    '0.2',
                    '0.3',
                    '0.4',
                    '0.5',
                    '0.6',
                    '0.7',
                    '0.8',
                    '0.9',
                    '1'];
                    
                    return rand[Math.floor(Math.random()*rand.length)];
                    }
                message.channel.send(`$tip <@${message.author.id}> ${doRandHT()} mrp`);
        fcool.add(message.author.id);
        setTimeout(() => {
            fcool.delete(message.author.id)
        }, cdsecs * 7000)
        }}
        break;

    }
});

bot.login(token);