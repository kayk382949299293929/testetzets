//=============≠≠==========≠≠=============\\

const {
  WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  relayWaMessage,
  waChatKey,
  waMessage,
  mentionedJid,
  processTime
} = require("@adiwajshing/baileys");
//=======================================\\


//=============NODES-MODULOS=============\\
const simple = require('./lib/simple.js')
const chalk = require('chalk')
const yts = require('yt-search')
const fs = require('fs')
const crypto = require('crypto')
const util = require('util')
const axios = require('axios')
const encodeUrl = require('encodeurl')
const linkfy = require('linkifyjs')
const request = require('request')
const cheerio = require('cheerio')
const ffmpeg = require('fluent-ffmpeg')
const imgbb = require('imgbb-uploader')
const googleImage = require('g-i-s')
const googleIt = require('google-it')
const fetch = require('node-fetch')
const imageToBase64 = require('image-to-base64')
const hx = require('hxz-api')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
const { exec } = require('child_process')
const moment = require('moment-timezone')
const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) }
//=======================================\\



//===================≠≠===================\\

const { fetchJson, fetchText, getBase64, createExif } = require('./lib/fetcher')

const { version, bugs } = require('./package.json')

const { y2mateV, y2mateA, wikiSearch, jagoKata } = require('./lib/y2mate')

const { yta, ytv, igdl, uploadImages, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')

const { mediafireDl } = require('./lib/js/mediafire.js')

const { upload } = require('./lib/tourl')

const { uploadd } = require('./lib/tourl2')

const { webp2gifFile } = require("./lib/js/gif.js")

const { recognize } = require('./lib/js/ocr')

const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("./lib/js/banned.js")

const { isFiltered, addFilter } = require('./lib/js/antispam.js')

const { validmove, setGame } = require('./lib/tictactoe');

 //==============≠=========≠============\\


//==========(BLOCK-DE-COMANDOS)========\\

const { addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos } =  require('./lib/js/addcmd.js')

//=====================================\\


//============(ANAGRAMA)==============\\

const { palavrasANA } = require('./lib/jogo/anagram.js')

//======================================\\


//=========(LEVELS)-(LEVELING)===========\\
const { getLevelingXp, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, bayarLimit, limitAdd, addATM, addKoinUser, checkATMuser, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser, confirmATM, cekafk, isAfk, runtime, addafk, getpc, supre } = require('./lib/js/consts.js')

const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, banner2, banner3, simih, start, info, success, close, temporizador, cmdadd, addMetadata} = require('./lib/functions.js');

//LOGOS-SEM-API\\
const { pSmoky, pOuro, pSemi, pFogo, pShadow, pRomantic, pSmoke, pBurnPapper, pNaruto, pLoveMsg,pMsgGrass, pDoubleHeart, pCoffeCup, pCoffe2, pLoveText, pHarryPotter, pAwolfMetal, pCup, pCaptain, pButterfly, pGlitch, pGooglesg, pNeon2, p8Bit, pMadeira, pWooden, pGold } = require('./lib/js/photooxy')

//===========(JSON-FUNÇÕES)============\\

const adeuscara = JSON.parse(fs.readFileSync('./lib/grupos/adeuscara.json'))

const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))

const sotoy = JSON.parse(fs.readFileSync('./lib/sotoy.json'))

const { addVote, delVote } = require('./lib/js/vote')

const { infovotacao } = require('./lib/js/infovotacao.js')

const countMessage = JSON.parse(fs.readFileSync('./lib/grupos/countmsg.json'))

const comandos = JSON.parse(fs.readFileSync('./dono/media/comandos.json'));

const vacilo = JSON.parse(fs.readFileSync('./lib/usuarios/vacilo.json'))

const modobn = JSON.parse(fs.readFileSync('./lib/grupos/brincadeiras.json'))

const nsfw = JSON.parse(fs.readFileSync('./lib/grupos/nsfw.json'))

const nescessario = JSON.parse(fs.readFileSync('./dono/nescessario.json'))

const welkom = JSON.parse(fs.readFileSync('./lib/grupos/welkom.json'))

const premium = JSON.parse(fs.readFileSync('./lib/usuarios/premium.json'));

const limitefll = JSON.parse(fs.readFileSync('./lib/usuarios/flood.json'))

const antiflood = JSON.parse(fs.readFileSync('./lib/usuarios/antiflood.json'))

const samih = JSON.parse(fs.readFileSync('./lib/usuarios/simi.json'))

const _leveling = JSON.parse(fs.readFileSync('./lib/usuarios/leveling.json'))

const _level = JSON.parse(fs.readFileSync('./lib/usuarios/level.json'))

let bancht = JSON.parse(fs.readFileSync('./lib/grupos/banchat.json'))

const anticall = JSON.parse(fs.readFileSync('./lib/usuarios/anticall.json'))

const ban = JSON.parse(fs.readFileSync('./lib/usuarios/banned.json'))

//===========(JS-MENUS)≠===============\\

const { infocontador } = require('./lib/js/infocontador.js')

const { infolistanegra } = require('./lib/js/infolistanegra.js')

const { infopalavrao } = require('./lib/js/infopalavrao.js')

const { infobancarac } = require('./lib/js/infobancarac.js')

const { destrava, destrava2 } = require('./lib/destrava.js')

const { tabela } = require('./lib/js/tabela')

//=======≠======(INFOS)========≠≠========\\

const setting = JSON.parse(fs.readFileSync('./dono/settings.json'))

const { conselhob } = require('./lib/js/conselhob.js');

const { palavras } = require('./lib/js/conselhos.js');

//===========≠(ANTIS-JSONS)≠=============\\

const antilink = JSON.parse(fs.readFileSync('./lib/ants/antilink.json'))

const user = JSON.parse(fs.readFileSync('./lib/user.json'))

const antifake = JSON.parse(fs.readFileSync('./lib/ants/antifake.json'))

const antilinkhard = JSON.parse(fs.readFileSync('./lib/ants/antilinkhard.json'))

const antiimg = JSON.parse(fs.readFileSync('./lib/ants/antiimg.json'))

const antidoc = JSON.parse(fs.readFileSync('./lib/ants/antidoc.json'))

const antiloc = JSON.parse(fs.readFileSync('./lib/ants/antiloc.json'))

const antipv = JSON.parse(fs.readFileSync('./lib/usuarios/antipv.json'))

const antivid = JSON.parse(fs.readFileSync('./lib/ants/antivideo.json'))

const antiaudio = JSON.parse(fs.readFileSync('./lib/ants/antiaudio.json'))

const palavra = JSON.parse(fs.readFileSync('./lib/grupos/palavras.json'))

const palavrão = JSON.parse(fs.readFileSync('./lib/grupos/palavrão.json'))

//=======≠===============≠==============\\

//(NÃO APAGUE: SÃO EXPORTAÇÕES)
prefix = setting.prefix

NomeDoBot = setting.NomeDoBot

NickDono = setting.NickDono

numerodono = setting.numerodono

imgnazista = nescessario.imgnazista

imggay = nescessario.imggay

imgcorno = nescessario.imgcorno

imggostosa = nescessario.imggostosa

imggostoso = nescessario.imggostoso

imgfeio = nescessario.imgfeio

imggado = nescessario.imggado

imgvesgo = nescessario.imgvesgo

imgbebado = nescessario.imgbebado

legendasaiu = nescessario.legendasaiu

legendabv = nescessario.legendabv

fundo1 = nescessario.fundo1

fundo2 = nescessario.fundo2

linklogos = nescessario.linklogos

limitefl = limitefll.limitefl

banChats = nescessario.banChats

dapuhykey = setting.dapuhykey

dono2 = nescessario.dono2

dono3 = nescessario.dono3

dono4 = nescessario.dono4

dono5 = nescessario.dono5

//====================≠≠===============\\

offline = false

numbernye = '0'

blocked = [] 

hitt = []

//=====================================\\


//=========(CONEXÃO-DO-BOT)===========\\
const starts = async (ayumi = new WAConnection()) => {
ayumi._maxListeners = 200;
ayumi.browserDescription = ["ayumi", "Sacole", "0.14.1"];
ayumi.browserDescription.push('ayumi','Baileys','Opera');
ayumi.autoReconnect = ReconnectMode.onconnectionLost || 2
ayumi.logger.level = 'warn'
console.log(banner.string)
ayumi.connectOptions.maxRetries = 99999
ayumi.on('qr', () => {
console.log(color(''), color(' Escaneie acima para conectar a ayumi-bot'))
})

fs.existsSync('./ayumi.json') && ayumi.loadAuthInfo('./ayumi.json')

ayumi.on('connecting', () => {
 start('2', 'Conectando ...')
})

ayumi.on('open', () => {
success('2', 'conectado!!!')

console.log(chalk.magenta(""), chalk.keyword("orange")("🍨"), chalk.magenta('ayumi conectada bom uso...'))
}) 

await ayumi.connect({
timeoutMs: 30 * 1000
})

fs.writeFileSync('./ayumi.json', JSON.stringify(ayumi.base64EncodedAuthInfo(), null, '\t'))
ayumi.on('close', () => {
rc = 'Desconectada..'
console.log(color(rc,'red'))
})

//============(FIM-CONEXÃO)=============\\

function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}

//===============(BEM VINDO)=============\\

ayumi.on('group-participants-update', async (anu) => {
const mdata = await ayumi.groupMetadata(anu.jid)  
const adeuscara = JSON.parse(fs.readFileSync('./lib/grupos/adeuscara.json'))
const dbackid = []
for(i=0;i<adeuscara.length;++i) dbackid.push(adeuscara[i].groupId)
console.log(anu)
if(dbackid.indexOf(anu.jid) >= 0) {
if (anu.action == 'add'){ 
num = anu.participants[0]
var ind = dbackid.indexOf(anu.jid)
if(adeuscara[ind].actived && adeuscara[ind].number.indexOf(num.split('@')[0]) >= 0) {
await ayumi.sendMessage(mdata.id, '*Olha quem deu as cara por aqui, sente o poder do ban*', MessageType.text)
ayumi.groupRemove(mdata.id, [num])
return
}
}
}
if(antifake.includes(anu.jid)) {
if (anu.action == 'add'){
num = anu.participants[0]
if(!num.split('@')[0].startsWith(55)) {
ayumi.sendMessage(mdata.id, ' ⛹️⛹️Bye Bye Estrangeiro...👋🏌️', MessageType.text)
setTimeout(async function () {
ayumi.groupRemove(mdata.id, [num])
}, 1000)
}
}
}
if (!welkom.includes(anu.jid)) return
try {
const mdata = await ayumi.groupMetadata(anu.jid)
num = anu.participants[0]
console.log(anu)
ini_user = ayumi.contacts[num]
namaewa = ini_user.notify
member = mdata.participants.length
try {
var ppimg = await ayumi.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
} catch {
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
try {
var ppgc = await ayumi.getProfilePicture(anu.jid)
} catch {
var ppgc = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)

const wel = { key: { participant: `0@s.whatsapp.net`, ...{}}, message: { "orderGroup": { message: `⊳ GRUPO : ${mdata.subject}`}}}
       
  if (anu.action == 'add') {
  	try {
			ppimg = await ayumi.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			buffer = await getBuffer(ppimg)
            teks = `*Bem vindo ${num.split('@')[0]} leias as regras para não ser removido!!*`
            gbutsan = [{buttonId:`#menu `,buttonText:{displayText:'MENU'},type:1}]
			mhan = await ayumi.prepareMessage(mdata.id, buffer, MessageType.image, {thumbnail: buffer})
const buttonMessages = { imageMessage: mhan.message.imageMessage,
contentText: `${teks}`,
footerText: `*BEM VINDO*`, 
buttons: gbutsan,
headerType: 4 }
			ayumi.sendMessage(mdata.id, buttonMessages, MessageType.buttonsMessage, {thumbnail: fs.readFileSync('./media/hamsil.jpg'),caption: teks, contextInfo: {'mentionedJid': [num]}})
ayumi.sendMessage(mdata.id, buttonMessages, MessageType.buttonsMessage, {thumbnail: fs.readFileSync('./media/hentai.jpg'),caption: teks, contextInfo: {'mentionedJid': [num]}})
         } else if (anu.action == 'remove') {
			try {
			ppimg = await ayumi.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buffer = await getBuffer(ppimg)
			keluar =`*Saiu e não pagou a coca😖*`
			gbutsan = [{buttonId: `#menu`,buttonText:{displayText: 'Menu'},type:1}]
			mhan = await ayumi.prepareMessage(mdata.id, buffer, MessageType.image, {thumbnail: buffer})
const buttonMessages = { imageMessage: mhan.message.imageMessage,
contentText: `${keluar}`,
footerText: `*ja vai tarde*`,
buttons: gbutsan,
headerType: 4 }
			ayumi.sendMessage(mdata.id, buttonMessages, MessageType.buttonsMessage, { thumbnail: fs.readFileSync('./media/hentai.jpg'), "contextInfo": { mentionedJid: [num]}, caption: 'Tes'})
}
} catch (e) {
console.log('Erro : %s', color(e, 'red'))
}})

ayumi.on('group-participants-update', async (anu) => { 
if (!vacilo.includes(anu.jid)) return
try {
const mdata = await ayumi.groupMetadata(anu.jid)
num = anu.participants[0]
console.log(anu)
if (anu.action == 'promote') {
k = `[ PROMOÇÃO DETECTADA]\n@${num.split("@")[0]} foi promovido a adm`
ayumi.sendMessage(mdata.id, k, MessageType.text)
console.log(color('[PROMOVIDO]', 'red')),(color(`${num.split('@')[0]} \nfoi promovido a adm`, 'blue'))
} else if (anu.action == 'demote') {
num = anu.participants[0]
ayumi.sendMessage(mdata.id, `[REBAIXAMENTO DETECTADO]\n@${num.split("@")[0]} nao é mais adm kkkkk`, MessageType.text)
console.log(color('[DEMOTE]', 'red')), (color(`${num.split('@')[0]} foi rebaixado a membro comum kkkk`, 'blue'))
if (anu.action == 'add') {
  	try {
			ppimg = await ayumi.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buffer = await getBuffer(ppimg)
            teks = `${nescessario.legendabv} `
            gbutsan = [{buttonId:`#verify `,buttonText:{displayText:'Registro'},type:1}]
			mhan = await ayumi.prepareMessage(mdata.id, buffer, MessageType.image, {thumbnail: buffer})
const buttonMessages = { imageMessage: mhan.message.imageMessage,
contentText: `${teks}`,
footerText: ` 🌈_BEM VINDO MENBRO NOVO_✨`, 
buttons: gbutsan,
headerType: 4 }
			ayumi.sendMessage(mdata.id, buttonMessages, MessageType.buttonsMessage, {thumbnail: fs.readFileSync('./media/hamsil.jpg'),caption: teks, contextInfo: {'mentionedJid': [num]}})
ayumi.sendMessage(mdata.id, buttonMessages, MessageType.buttonsMessage, {thumbnail: fs.readFileSync('./media/hentai.jpg'),caption: teks, contextInfo: {'mentionedJid': [num]}})
         } else if (anu.action == 'remove') {
			try {
			ppimg = await ayumi.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buffer = await getBuffer(ppimg)
			keluar =`${nessesario.legendasaiu}`
			gbutsan = [{buttonId: `.menu`,buttonText:{displayText: 'Menu'},type:1}]
			mhan = await ayumi.prepareMessage(mdata.id, buffer, MessageType.image, {thumbnail: buffer})
const buttonMessages = { imageMessage: mhan.message.imageMessage,
contentText: `${keluar}`,
footerText: `- 1 macaco kkkk`,
buttons: gbutsan,
headerType: 4 }
			ayumi.sendMessage(mdata.id, buttonMessages, MessageType.buttonsMessage, { thumbnail: fs.readFileSync('./media/logo2.pg'), "contextInfo": { mentionedJid: [num]}, caption: 'Tes'})
}}}catch (e) { console.log('Erro : %s', color(e, 'red'))}})
//==============(FIM-BEM-VINDO❬ 🏓 ❭\\
    

//=============(BATERIA)==============\\

ayumi.on('CB:action,,battery', json => {
const batteryLevelStr = json[2][0][1].value
const batterylevel = parseInt (batteryLevelStr)
kutekute = batterylevel
if (json[2][0][1].live == 'true') charging = true
if (json[2][0][1].live == 'false') charging = false
console.log(json[2][0][1])
console.log(color('Carga da bateria: ' + batterylevel+'%', "pink"))
})
//==================================\\  



//==========(CHAT-UPDATE)===========\\

ayumi.on('chat-update', async (info) => {
try {
if (!info.hasNewMessage) return
info = info.messages.all()[0]
if (!info.message) return
info.message = (Object.keys(info.message)[0] === 'ephemeralMessage') ? info.message.ephemeralMessage.message : info.message
if (!info.message) return
m = simple.smsg(ayumi, info)

global.prefix
global.blocked

const content = JSON.stringify(info.message)
const speed = require('performance-now');
const from = info.key.remoteJid
const type = Object.keys(info.message)[0]
const { text, extendedText, contact, contacsArray, location, liveLocation, image, video, sticker, document, audio, product } = MessageType


const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY')

const hr = moment.tz('America/Sao_Paulo').format('HH:mm:ss')

const jam = moment.tz('America/Sao_Paulo').format('HH:mm')

const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')


//==============(BODY)================\\
body = (type === 'conversation' && info.message.conversation.startsWith(prefix)) ? info.message.conversation : (type == 'imageMessage') && info.message[type].caption.startsWith(prefix) ? info.message[type].caption : (type == 'videoMessage') && info.message[type].caption.startsWith(prefix) ? info.message[type].caption : (type == 'extendedTextMessage') && info.message[type].text.startsWith(prefix) ? info.message[type].text : (type == 'listResponseMessage') && info.message[type].singleSelectReply.selectedRowId ? info.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && info.message[type].selectedButtonId ? info.message[type].selectedButtonId : info.message[type].selectedButtonId && ((info.message[type].fileSha256.toString('base64')) !== null && (info.message[type].fileSha256.toString('base64')) !== undefined) ? (info.message[type].fileSha256.toString('base64')) : ""

//================(BADY)================\\

bady = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (info.message.listResponseMessage && info.message.listResponseMessage.singleSelectReply.selectedRowId) ? info.message.listResponseMessage.singleSelectReply.selectedRowId: ''

//=======================================\\



//===============(BUDY)==================\\

budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

//======================================\\

button = (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedDisplayText : ''
button = (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : ''
listMessage = (type == 'listResponseMessage') ? info.message.listResponseMessage.title : ''

const listmsg = (from, title, desc, list) => { 
po = ayumi.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Escolha aqui","footerText": "Selecione","listType": 1,"sections": list}}, {})
return ayumi.relayWAMessage(po, {waitForAck: true})
}
listmes = (type == 'listResponseMessage') ? info.message.listResponseMessage.title : ''

var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''


const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()

const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		

const arg = body.substring(body.indexOf(' ') + 1)

const args = body.trim().split(/ +/).slice(1)

const argss = body.split(/ +/g)
const testat = body
const ants = body
const isCmd = body.startsWith(prefix)
const isGroup = from.endsWith('@g.us')
const q = args.join(' ')
const botNumber = ayumi.user.jid
const sender = isGroup ? info.participant : info.key.remoteJid
let senderr = info.key.fromMe ? ayumi.user.jid : info.key.remoteJid.endsWith('@g.us') ? info.participant : info.key.remoteJid


pushname = ayumi.contacts[sender] != undefined ? ayumi.contacts[sender].vname || ayumi.contacts[sender].notify : undefined

const groupMetadata = isGroup ? await ayumi.groupMetadata(from) : ''

const groupName = isGroup ? groupMetadata.subject : ''

const groupMembers = isGroup ? groupMetadata.participants : ''

const groupDesc = isGroup ? groupMetadata.desc : ''

const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

//=======================================\\

const numerodono = [`${setting.numerodono}@s.whatsapp.net`, `${nescessario.dono1}@s.whatsapp.net`, `${nescessario.dono2}@s.whatsapp.net`, `${nescessario.dono3}@s.whatsapp.net`, `${nescessario.dono4}@s.whatsapp.net`, `${nescessario.dono5}@s.whatsapp.net`, `${nescessario.dono6}@s.whatsapp.net`]

//============(SORTEIO-CONST)============\\

const { infosorteio } = require('./lib/js/infosorteio.js')

//===========(enviar.espere)=============\\

const { mensagens } = require('./lib/js/aleatoria.js');

const { sortear } = require('./lib/js/aleatoria.js');

const { imgbbb } = require('./lib/js/imgbb.js')

var enviarmen = mensagens[Math.floor(Math.random() * mensagens.length)] 

//========================================\\

enviar = {
espere: `❬ 🍨 ❭ Espera so um puquinho q eu ja estou enviando..`,
successo: '️❬ ✔ ❭ Sucesso 🖤',
levelon: '❬ ✔ ❭ *leveling* *ativado*',
leveloff: '❬ X ❭  *leveling* *desativado*',
levelnoton: '❬ X ❭ *leveling não ativado*',
levelnol: '*error* 0 °-°',
error: {
stick: '*falhou, tente novamente ^_^*',
Iv: 'Link invalido ☹️'
},
msg: {
grupo: '❬ X ❭ Este comando só pode ser usado em grupos! ❬ X ❭',
premium: '❬ X ❭ Somente para usuarios premium*',
mod: `❬ X ❭ Esse comando so pode ser usado pelo ${setting.NickDono}*`,
banido: '❬ X ❭ Membro banido nao estou te ouvindo lalalala' ,
donosmt: '❬ X ❭Somente para o proprietario',
donosmt2: '❬ X ❭Somente para o proprietario',
adm: '❬ X ❭Somente para o Adm',
Badmin: '❬ X ❭Nao me deram adm😖',
}
}

//❬ 🏓 ❭ADMS/DONO/ETC..CONST)========\\

const isOwner = numerodono.includes(sender)

const isUser = user.includes(sender)

const isPremium = premium.includes(sender)

const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

const isGroupAdmins = groupAdmins.includes(sender) || false || info.key.fromMe

const issupre = supre.includes(sender)

//============(FUNÇÕES)============\\

const isVacilo = isGroup ? vacilo.includes(from) : true

const isVote = isGroup ? voting.includes(from) : false

const isModobn =  isGroup ? modobn.includes(from) : true

const isNsfw =  isGroup ? nsfw.includes(from) : true

const isSimi = isGroup ? samih.includes(from) : false

const isBanned = ban.includes(sender)

//===========(ANTIS-PROTEÇÕES)===========\\

const isAntifake = isGroup ? antifake.includes(from) : false

const isAntiLink = isGroup ? antilink.includes(from) : false

const isAntiFlood = isGroup ? antiflood.includes(from) : false	

const isAntiLinkHard = isGroup ? antilinkhard.includes(from) : false

const isAntiAudio = isGroup ? antiaudio.includes(from) : false	
	
const isAntiImg = isGroup ? antiimg.includes(from) : false

const Antidoc = isGroup ? antidoc.includes(from) : false

const Antiloc = isGroup ? antiloc.includes(from) : false

const isAntiVid = isGroup ? antivid.includes(from) : false	

const isAntiPv = (antipv.indexOf('Ativado') >= 0) ? true : false	

const isAnticall = (anticall.indexOf('Ativado') >= 0) ? true : false

const isPalavrão = isGroup ? palavrão.includes(from) : false	

//=======================================\\



//=========(CONSTS-FUNÇÕES)============\\

const isWelkom = isGroup ? welkom.includes(from) : false

const img2 =  fs.readFileSync('./media/hamsil.jpg')

const isLevelingOn = isGroup ? _leveling.includes(from) : false

const isBanchat = isGroup ? bancht.includes(from) : false	

//=====================================\\


//==========(VERIFICADO)===============\\

const selo = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": `${setting.NomeDoBot}`,"title": "hmm" }}}

//=====================================\\


const getGroup = async function(totalchat){
let grup = []
let a = []
let b = []
for (c of totalchat){
a.push(c.jid)
}
for (d of a){
if (d && d.includes('g.us')){
b.push(d)
}
}
for (e of b){
let ingfo = await ayumi.groupMetadata(e)
grup.push(ingfo)
}
return grup
}  
///Button Text

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
ayumi.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await ayumi.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
ayumi.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await ayumi.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
ayumi.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const mortandela = (teks) => {
const respostaBottuns = [{buttonId: `#camassutra`, buttonText: {displayText: `Ok ↯🔥💸𝕮𝖆𝖇𝖚𝖑𝖔𝖟𝖔𝖘¹⁵⁷🍷🔥↯`}, type: 1}]
const rpstBottuns = {contentText: `*❬ 🍨 ❭ Espera so um puquinho q eu ja estou enviando..*`, buttons: respostaBottuns, headerType: 1}
ayumi.sendMessage(from, rpstBottuns, MessageType.buttonsMessage, {quoted: info})
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await ayumi.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
ayumi.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

const isUrl = (url) => {
if(linkfy.find(url)[0]) return true
return false
}	

const jadiUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            user.push(obj)
            fs.writeFileSync('./lib/user.json', JSON.stringify(user))
        }
        const bikinSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
let contentt = fs.readFileSync(`./media/ayumi.jpg`)
const media = await ayumi.prepareMessage(from, contentt, MessageType.image, { thumbnail: null})
let qweriio = media.message["ephemeralMessage"] ? media.message.ephemeralMessage : media
const buttons1 = [
{buttonId: '#verify', buttonText: {displayText: 'Registro'}, type: 1},
]
const btn1 = {
contentText: `_...*🦊Registre-se Antes🦊*..._`,
footerText: `Clique no Botao e espere O Bot Enviar Os Dados`,
buttons: buttons1,
headerType: 4,
imageMessage: qweriio.message.imageMessage
}
var hayuk0 = '[NOT VERIFIED]'
			if (isUser) {
			hayuk0 = '[√ VERIFIED]'
			}

const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00"){
var tempo = 'Boa madrugada'
                                        } 
if(time2 > "05:30:00"){
var tempo = 'Bom dia'
                                        }
if(time2 > "12:00:00"){
var tempo = 'Boa tarde'
                                        }
if(time2 > "19:00:00"){
var tempo = 'Boa noite'
                                        }

const reply = (teks) => {

            ayumi.sendMessage(from, teks, text,  {contextInfo :{text: 'hi',

sendEphemeral: true,

"externalAdReply": {

                "title": `↯🔥💸𝕮𝖆𝖇𝖚𝖑𝖔𝖟𝖔𝖘¹⁵⁷🍷🔥↯`,

                "body": "",

                "previewType": "PHOTO",

                "thumbnailUrl": "",

                "thumbnail": img2,

                "sourceUrl": `https://wa.me/5521986359322`

},mentionedJid:[sender]}, quoted : info})

        }


const sendImage = (ytb) => {
ayumi.sendMessage(from, ytb, image, {quoted:info})
}


const sendMess = (hehe, ytb) => {
ayumi.sendMessage(hehe, ytb, text)
}


const mentions = (ytb, memberr, id) => {
(id == null || id == undefined || id == false) ? ayumi.sendMessage(from, ytb.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : ayumi.sendMessage(from, ytb.trim(), extendedText, {quoted: info, contextInfo: {"mentionedJid": memberr}})
}
	
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
ayumi.sendMessage(to, media, type, { quoted: info, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}   

/********** ANTI NOME MODIFICADO **********/
function isDoubleByte(str) {
for (let i = 0, n = str.length; i < n; i++) {
if (str.charCodeAt(i) > 255) {
return true;
}
}
return false;
}

const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
await ayumi.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
ayumi.sendMessage(from, hasil, type, options).catch(e => {
ayumi.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Erro ao baixar e enviar mídia_')
console.log(e)
})
})
})
})
}	
		    

//==============(FUNÇÃO-AFK)=============\\
if (!info.key.remoteJid.endsWith('@g.us') && offline){
if (!info.key.fromMe){
if (isAfk(info.key.remoteJid)) return
addafk(info.key.remoteJid)
heheh = ms(Date.now() - waktuafk) 
ayumi.sendMessage(info.key.remoteJid,`*Com licença @${setting.numerodono} Atualmente offline!*\n\n*Razão :* ${alasanafk}\n*Desde as :* ${heheh.hours} Hora, ${heheh.minutes} Minuto, ${heheh.seconds} Segundos atrás\n`, MessageType.text,{quoted: info, contextInfo:{ mentionedJid: [`${setting.numerodono}@s.whatsapp.net`]}})
 }
 } 
 
 if (info.key.remoteJid.endsWith('@g.us') && offline) {
 if (!info.key.fromMe){
 if (info.message.extendedTextMessage != undefined){
 if (info.message.extendedTextMessage.contextInfo != undefined){
 if (info.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
 for (let ment of info.message.extendedTextMessage.contextInfo.mentionedJid) {
 if (ment === `${setting.numerodono}@s.whatsapp.net`){
 if (isAfk(info.key.remoteJid)) return
 addafk(info.key.remoteJid)
 heheh = ms(Date.now() - waktuafk)
 ayumi.sendMessage(info.key.remoteJid,`*Com licença @${setting.numerodono} Atualmente offline!*\n\n*Razão :* ${alasanafk}\n*Desde as :* ${heheh.hours} Horas, ${heheh.minutes} Minutos, ${heheh.seconds} Segundos atrás\n`, MessageType.text,{quoted: info,contextInfo:{ mentionedJid: [`${setting.numerodono}@s.whatsapp.net`]}})
 }
 }
 }
 }
 }
 }
 }
 
//========================================\\
 
 

let userAgent = () => {

os = [

'Macintosh; Intel Mac OS X 10_15_7',

'Macintosh; Intel Mac OS X 10_15_5',

'Macintosh; Intel Mac OS X 10_11_6',

'Macintosh; Intel Mac OS X 10_6_6',

'Macintosh; Intel Mac OS X 10_9_5',

'Macintosh; Intel Mac OS X 10_10_5',

'Macintosh; Intel Mac OS X 10_7_5',

'Macintosh; Intel Mac OS X 10_11_3',

'Macintosh; Intel Mac OS X 10_10_3',

'Macintosh; Intel Mac OS X 10_6_',

'Macintosh; Intel Mac OS X 10_10_2',

'Macintosh; Intel Mac OS X 10_10_3',

'Macintosh; Intel Mac OS X 10_11_5',

'Windows NT 10.0; Win64; x64',

'Windows NT 10.0; WOW64',

'Windows NT 10.0',

];

return `Mozilla/5.0 (${os[Math.floor(Math.random() * os.length)]}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${Math.floor(

Math.random() * 3,

) + 7}.0.${Math.floor(Math.random() * 190) + 4100}.${Math.floor(Math.random() * 50) + 140} Safari/537.36`;

}


function ttaudio(url) {
return new Promise(async (resolve, reject) => {
getDataFirst = await axios.get('https://www.tiktok.com')
newCookie = getDataFirst.headers['set-cookie'].join('')
axios.get(url, {
headers: {
'user-agent': userAgent(),
'Cookie': newCookie
}
})
.then(({ data }) => {
$ = cheerio.load(data)
ttdata = JSON.parse($('script#__NEXT_DATA__').get()[0].children[0].data)
meta = ttdata.props.pageProps.itemInfo.itemStruct
resolve({
status: true,
message: success,
result: {
description: meta.desc,
duration: meta.video.duration,
resolution: meta.video.width + 'x' + meta.video.height,
jpeg_thumb: meta.video.originCover,
gif_thumb: meta.video.dynamicCover,
audio: meta.music.playUrl,
}
})
})
.catch((response) => {
reject({ status: false, message: response })
})
})
}

//BAN CHATS/GRUPOS
if (isBanchat && !isGroupAdmins){
if (!isGroupAdmins && !isOwner && !issupre && !info.key.fromMe) return
if (budy.toLowerCase().startsWith('unbangp')){
if (isCmd && !isBanchat && !isGroupAdmins) return reply(`Este grupo esta banido, ou seja não estou ouvindo ninguém`)
let lfd = bancht.indexOf(from)
bancht.splice(lfd, 1)
fs.writeFileSync('./lib/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo desbanido...`)
}
}

//=======FUNCIONALIDADE PATENTE=========\\
const nivelAtual = getLevelingLevel(sender)
var patt = 'Bronze I🥉'
if (nivelAtual === 1) {patt = 'Bronze  I🥉' } else if (nivelAtual === 2) {patt = 'Bronze II🥉'} else if (nivelAtual === 3) {patt = 'Bronze  III🥉'} else if (nivelAtual === 4) {patt = 'Bronze  IV🥉'} else if (nivelAtual === 5) {patt = 'Bronze  V🥉'} else if (nivelAtual === 6) {patt = 'Prata I🥈'} else if (nivelAtual === 7) {patt = 'Prata II🥈'} else if (nivelAtual === 8) {patt = 'Prata III🥈'} else if (nivelAtual === 9) {patt = 'Prata IV🥈'} else if (nivelAtual === 10) {patt = 'Prata V🥈'} else if (nivelAtual === 11) {patt = 'Ouro I🥇'} else if (nivelAtual === 12) {patt = 'Ouro II🥇'} else if (nivelAtual === 13) {patt = 'Ouro III🥇'} else if (nivelAtual === 14) {patt = 'Ouro IV🥇'} else if (nivelAtual === 15) {patt = 'Ouro V🥇'} else if (nivelAtual === 16) {patt = 'Campeão I🏆'} else if (nivelAtual === 17) {patt = 'Campeão II🏆'} else if (nivelAtual === 18) {patt = 'Campeão III🏆'} else if (nivelAtual === 19) {patt = 'Campeão IV🏆'} else if (nivelAtual === 20) {patt = 'Campeão V🏆'} else if (nivelAtual === 21) {patt = 'Diamante I 💎'} else if (nivelAtual === 22) {patt = 'Diamante II 💎'} else if (nivelAtual === 23) {patt = 'Diamante III 💎'} else if (nivelAtual === 24) {patt = 'Diamante IV 💎'} else if (nivelAtual === 25) {patt = 'Diamante V 💎'} else if (nivelAtual === 26) {patt = 'Mestre I 🐂'} else if (nivelAtual === 27) {patt = 'Mestre II 🐂'} else if (nivelAtual === 28) {patt = 'Mestre III 🐂'} else if (nivelAtual === 29) {patt = 'Mestre IV 🐂'} else if (nivelAtual === 30) {patt = 'Mestre V 🐂'} else if (nivelAtual === 31) {patt = 'Mítico I 🔮'} else if (nivelAtual === 32) {patt = 'Mítico II 🔮'} else if (nivelAtual === 33) {patt = 'Mítico III 🔮'} else if (nivelAtual === 34) {patt = 'Mítico IV 🔮'} else if (nivelAtual === 35) {patt = 'Mítico V 🔮'} else if (nivelAtual === 36) {patt = 'God I🕴'} else if (nivelAtual === 37) {patt = 'God II🕴'} else if (nivelAtual === 38) {patt = 'God III🕴'} else if (nivelAtual === 39) {patt = 'God IV🕴'} else if (nivelAtual === 40) {patt = 'God V🕴'} else if (nivelAtual > 41) {patt = '🛐Grande Mestre🛐'}
		    
//========================================\\

//==========(FUNÇÃO DE LEVEL)=============\\
if (isGroup && isLevelingOn) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * 10) + 500
const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
const getLevel = getLevelingLevel(sender)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
try {
			ppimg = await ayumi.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
 let buffer = await getBuffer(ppimg)
            teks = `︎
╭─────≽「 🌙 ᴜᴘ ʟᴇᴠᴇʟ 🌙 」
┃╭══════════════⊷
┃│➢ 🍨 ɴɪᴄᴋ : *${pushname}*
┃│➢ 📈 ʟᴇᴠᴇʟ : ${getLevelingLevel(sender)}
┃│➢ 🔋 xᴘ : ${getLevelingXp(sender)}
┃│➢ 🌌 ʀᴀɴᴋ : ${patt}
┃╰═════════════⊷
╰━═══════════════⊷*  `
            gbutsan = [{buttonId: `#level`,buttonText:{displayText: 'Level'},type:1}]
			mhan = await ayumi.prepareMessageFromContent(from,{buttonsMessage},{quoted: selo})
const buttonMessages = { imageMessage: mhan.message.imageMessage,
contentText: `${teks}`,
footerText: `🇺 🇵 🇳 🇮 🇻 🇪 🇱`, 
buttons: gbutsan,
headerType: 4 }
ayumi.sendMessage(from,  buttonMessages, MessageType.buttonsMessage, {quoted: selo})
}
} catch (err) {
console.error(err)
}
}
//=======================================\\

//=====(FUNÇÃO-CHECAR-LIMIT)====\\
const checkLimit = (sender) => {
let found = false
for (let lmt of _limit) {
if (lmt.id === sender) {
let limitCounts = limitawal - lmt.limit
if (limitCounts <= 0) return ayumi.sendMessage(from,`[👾] *LIMIT ESGOTADO*\n\n_Nota : para obter mais limit compre usando *${prefix}buylimit* ou suba de nível...`, text,{sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: info})
ayumi.sendMessage(from, jrpl.limitcount(limitCounts), text, { quoted : info})
found = true
}
}
if (found === false) {
let obj = { id: sender, limit: 0 }
_limit.push(obj)
fs.writeFileSync('./lib/grupos/limit.json', JSON.stringify(_limit))
ayumi.sendMessage(from, jrpl.limitcount(limitCounts), text, { quoted : info})
}
} 
							
	//funtion limitado
const isLimit = (sender) =>{ 
if (issupre) {return false;}
let position = false
for (let i of _limit) {
if (i.id === sender) {
let limits = i.limit
if (limits >= limitawal ) {
position = true
ayumi.sendMessage(from, jrpl.limitend(pushname), text, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: info})
return true
} else {
_limit
position = true
return false
}
}
}
if (position === false) {
const obj = { id: sender, limit: 0 }
_limit.push(obj)
fs.writeFileSync('./lib/grupos/limit.json',JSON.stringify(_limit))
return false
}
}

const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('pronto');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vf "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=60, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse" ${asw}`, (err) => {
let media = fs.readFileSync(asw)
ayumi.sendMessage(to, media, MessageType.sticker,{sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: info})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}  

//===(SIMIH-INTELIGÊNCIA-ARTIFICIAL)===\\
const simih = async (text) => {
	try {
const sami = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=pt`, {method: 'GET'})
const res = await sami.json()
return res.success
} catch {
return 'Eu não identifico emojis nem acentos, desculpe.'
}
}
//===================================\\

		//JOGO DO ANAGRAM
if(isGroup && fs.existsSync(`./lib/anagrama-${from}.json`)){
let dataAnagrama = JSON.parse(fs.readFileSync(`./lib/anagrama-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return reply('está perto')
xp = Math.floor(Math.random() * 14) + 3000
if(budy.toUpperCase() == dataAnagrama.original) { ayumi.sendMessage(from, `parabéns ${pushname} 🥳 você ganhou o jogo\nPalavra : ${dataAnagrama.original}\nIniciando o proximo jogo em 5 segundos...`, MessageType.text, {"mentionedJid": [sender]}), fs.unlinkSync(`./lib/anagrama-${from}.json`)		
addLevelingXp(sender, xp)
recompensa = `🎉🎉RECOMPENSA🎉🎉\nVocê ganhou ${xp} em *xp*`
reply(recompensa)
		setTimeout(async() => {
fs.writeFileSync(`./lib/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./lib/anagrama-${from}.json`))
ayumi.sendMessage(from, `
╭━❒ 𝗔𝗡𝗔𝗚𝗥𝗔𝗠𝗔 🦋
│◦➛𝗗𝗲𝘀𝗰𝘂𝗯𝗿𝗮 𝗮 𝗽𝗮𝗹𝗮𝘃𝗿𝗮
│◦➛𝗔𝗡𝗔𝗚𝗥𝗔𝗠𝗔: ${dataAnagrama2.embaralhada}
│◦➛𝗗𝗜𝗖𝗔: ${dataAnagrama2.dica}
╰━━•ೋೋ•━━
`, MessageType.text) 
}, 5000)
}}

//========================================\\


let quizanime = [
{
original: 'AKAMARU',
foto: 'https://i.ibb.co/W0g7DLY/c4f771da7af1.jpg'
},
{
original: 'AKASUNA NO SASORI',
foto: 'https://i.ibb.co/vvdXpvs/5c4899522b1c.jpg'
},
{
original: 'AKATSUCHI',
foto: 'https://i.ibb.co/nnv3PbQ/a3b275339e77.jpg'
},
{
original: 'AKATSUKI',
foto: 'https://i.ibb.co/GHSYGmH/a821073ff5c9.jpg'
},
{
original: 'AMARU',
foto: 'https://i.ibb.co/rknTT8T/e5c7ba9fa14f.jpg'
},
{
original: 'AMATERASU',
foto: 'https://i.ibb.co/4sGNVfS/6ebeef8d76b6.jpg'
},
{
original: 'AMEGAKURE',
foto: 'https://i.ibb.co/Ytv3sg5/482181e4d2c9.jpg'
},
{
original: 'AMEYURI RINGO',
foto: 'https://i.ibb.co/N19pYCG/84d9f144e874.jpg'
},
{
original: 'ANBU',
foto: 'https://i.ibb.co/NTHgmDD/c8fa101a1ea8.jpg'
},
{
original: 'ANKO MITARASHI',
foto: 'https://i.ibb.co/y6vzDvN/b561164524ef.jpg'
},
{
original: 'AO',
foto: 'https://i.ibb.co/fd6mxTY/d2da80961c51.jpg'
},
{
original: 'AOBA YAMASHIRO',
foto: 'https://i.ibb.co/FhX81xB/511a7e6a4fc2.jpg'
},
{
original: 'AODA',
foto: 'https://i.ibb.co/2k7CvTS/6c84d64144d5.jpg'
},
{
original: 'ASHINA UZUMAKI',
foto: 'https://i.ibb.co/SB0N90V/ba19e69b2417.jpg'
},
{
original: 'ASHURA OOTSUTSUKI',
foto: 'https://i.ibb.co/7CJPdxS/076d7794216b.jpg'
},
{
original: 'ASUMA SARUTOBI',
foto: 'https://i.ibb.co/swTPQf6/84f527c23359.jpg'
},
{
original: 'ATSUI',
foto: 'https://i.ibb.co/xfHLhjQ/071354edc113.jpg'
},
{
original: 'EY',
foto: 'https://i.ibb.co/q7r2hF2/a277af679a63.jpg'
},
{
original: 'AYAME',
foto: 'https://i.ibb.co/xhvZJCm/952861774735.jpg'
},
{
original: 'BAIKA NO JUTSU',
foto: 'https://i.ibb.co/JnRY4gR/5a9002e17d75.jpg'
},
{
original: 'DOTON',
foto: 'https://i.ibb.co/yY9JJwm/511ca9e70ade.jpg'
},
{
original: 'HYOUTON',
foto: 'https://i.ibb.co/zSWDyyH/94c614c09001.jpg'
},
{
original: 'RAITON',
foto: 'https://i.ibb.co/1fjJZ7Q/aec79d1f3ef4.jpg'
},
{
original: 'MOKUTON',
foto: 'https://i.ibb.co/RzTr9gF/dfa7219565bf.jpg'
},
{
original: 'FUUTON',
foto: 'https://i.ibb.co/sy7dVj9/56e5257dea70.jpg'
},
{
original: 'SUITON',
foto: 'https://i.ibb.co/tMvPw5j/5bfbbaa4e2eb.jpg'
},
{
original: 'KATON',
foto: 'https://i.ibb.co/1z3S3MS/607165f8976c.jpg'
}
]
		//JOGO QUIZ
if(isGroup && fs.existsSync(`./lib/quizanime-${from}.json`)){
let dataAnagrama = JSON.parse(fs.readFileSync(`./lib/quizanime-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return reply('está perto')
if(budy.toUpperCase() == dataAnagrama.original) { 
ayumi.sendMessage(from, `Parabéns ${pushname} você acertou\n${dataAnagrama.original}\nProximo em 5 segundos...`, MessageType.text, {"mentionedJid": [sender]}), fs.unlinkSync(`./lib/quizanime-${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./lib/quizanime-${from}.json`, `${JSON.stringify(quizanime[Math.floor(Math.random() * quizanime.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./lib/quizanime-${from}.json`))
imagemtexto =`                             「❓Quiz❓」`
wew = await getBuffer(`${dataAnagrama2.foto}`)   
await ayumi.sendMessage(from, wew, image, {quoted: selo, caption: imagemtexto, thumbnail: wew})
}, 5000)
}}


let quizanimais = [
{
original: 'PORQUINHO DA INDIA',
foto: 'https://i.ibb.co/Fqwr0W0/cb2bb96f29e3.jpg'
},
{
original: 'HAMSTER',
foto: 'https://i.ibb.co/Qb3npqg/c43fae235c0a.jpg'
},
{
original: 'ROTTWEILER',
foto: 'https://telegra.ph/file/a10ad7df6ab6a2312a1f9.jpg'
},
{
original: 'FLOPPA',
foto: 'https://telegra.ph/file/7633abcd83b8a587f418d.jpg'
},
{
original: 'GUAXINIM',
foto: 'https://telegra.ph/file/3800c7048d04a1c3dbc4e.jpg'
},
{
original: 'ZEBRA',
foto: 'https://telegra.ph/file/a08e224344e34aa916972.jpg'
},
{
original: 'CARNEIRO',
foto: 'https://telegra.ph/file/096342c8c7815ba9d83be.jpg'
},
{
original: 'BODE',
foto: 'https://telegra.ph/file/ff574a82178089f453444.jpg'
},
{
original: 'MAMUTE',
foto: 'https://telegra.ph/file/00e445dde6c036a0c0df5.jpg'
},
{
original: 'ALPACA',
foto: 'https://telegra.ph/file/a201b23b179392f1cdd7f.jpg'
},
{
original: 'PORCO ESPINHO',
foto: 'https://telegra.ph/file/7b180efc77c8ab6e9a24a.jpg'
},
{
original: 'QUOKKA',
foto: 'https://telegra.ph/file/3042e66a22c6d0fb6e0cd.jpg'
},
{
original: 'PANDA VERMELHO',
foto: 'https://telegra.ph/file/a6517debde47b846073cc.jpg'
},
{
original: 'PEIXE GOTA',
foto: 'https://telegra.ph/file/e8892204b373c147bf489.jpg'
},
{
original: 'PEIXE MANDARIM',
foto: 'https://telegra.ph/file/e8892204b373c147bf489.jpg'
},
{
original: 'DRAGÃO DE KOMODO',
foto: 'https://telegra.ph/file/d4c36b449f4c781533f3c.jpg'
},
{
original: 'GUEPARDO',
foto: 'https://telegra.ph/file/0016017b9d28a3b6d027a.jpg'
},
{
original: 'FURÃO',
foto: 'https://telegra.ph/file/e352b4831db11c20a3c62.jpg'
},
{
original: 'LEOPARDO',
foto: 'https://telegra.ph/file/71f5f532ced0fddc08f5b.jpg'
},
{
original: 'LEBRE',
foto: 'https://telegra.ph/file/89f9a46ce660261279477.jpg'
},
{
original: 'MARRECO',
foto: 'https://telegra.ph/file/aa41bde6c4c350ec9d0d4.jpg'
},
{
original: 'GANSO',
foto: 'https://telegra.ph/file/9ab69884414feefc9c109.jpg'
},
{
original: 'CAVALO MARINHO',
foto: 'https://telegra.ph/file/e4cee57d5b731dfffa5d8.jpg'
},
{
original: 'CROCODILO',
foto: 'https://telegra.ph/file/b4483f9a7077fd29a137f.jpg'
},
{
original: 'ORNITORRINCO',
foto: 'https://telegra.ph/file/8ffdd62da1834433112be.jpg'
},
{
original: 'HUSKY SIBERIANO',
foto: 'https://telegra.ph/file/07b98023259637951ba8f.jpg'
},
{
original: 'CAPIVARA',
foto: 'https://telegra.ph/file/54f20cbd80737fe45a284.jpg'
}
]
		//JOGO QUIZ
if(isGroup && fs.existsSync(`./lib/quizanim-${from}.json`)){
let dataAnagramaa = JSON.parse(fs.readFileSync(`./lib/quizanim-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagramaa.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagramaa.original) return reply('está perto')
if(budy.toUpperCase() == dataAnagramaa.original) { 
ayumi.sendMessage(from, `Parabéns ${pushname} você acertou\n${dataAnagramaa.original}\nProximo em 5 segundos...`, MessageType.text, {"mentionedJid": [sender]}), fs.unlinkSync(`./lib/quizanim-${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./lib/quizanim-${from}.json`, `${JSON.stringify(quizanimais[Math.floor(Math.random() * quizanimais.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./lib/quizanim-${from}.json`))
imagemtexto =`                             「❓Quiz❓」`
wew = await getBuffer(`${dataAnagrama2.foto}`)   
await ayumi.sendMessage(from, wew, image, {quoted: selo, caption: imagemtexto, thumbnail: wew})
}, 5000)
}}



//=========(isQuoted/consts)=============\\
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
             
const downloadM = async(save) => {
encmediaa = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: info
encmediaa = isQuotedSticker ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: info
encmediaa = isQuotedAudio ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: info
encmediaa = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: info
encmediaa = JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
if (save) return await ayumi.downloadAndSaveMediaMessage(encmediaa)
return await ayumi.downloadMediaMessage(encmediaa)
}

///////////ANTI-SPAM BY ITALU/////////
if (isCmd && isFiltered(sender) && !isGroup) {
console.log(color('~> [SPAM]', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
const ff = {
text : `*「 ❗ 」Flood detectado, espere 5 segundos*`,
contextInfo: {mentionedJid: [sender]}}
return reply(ff)
}
if (isCmd && isFiltered(sender) && isGroup) {
console.log(color('~> [SPAM]', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
const ff1 = {
text : `*「 ❗ 」Flood detectado, espere 5 segundos*`,
contextInfo: {mentionedJid: [sender]}}
return reply(ff1)
}

//////BLOCK CMD///////
//(CREDITOS AO KAUAN GAY)\\
if(isGroup){
const checar = getComandos(from)
if(checar === undefined) addComandosId(from)
}
if(isGroup && isCmd && getComandoBlock(from).includes(command))return reply('🚫comando bloqueado *Enquanto isso espere ele ser consertado para o dono desbloquear o comando* 🚫')

////FIMMMMMMMMM/////,

if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCOMANDO\x1b[1;37m]', time, color(command), 'do ', color(sender.split('@')[0]))

if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCOMANDO\x1b[1;37m]', time, color(command), 'do ', color(sender.split('@')[0]), 'no gp: ', color(groupName))

//======(JOGO-DA-VELHA)=======(Função)===\\

//////////_FUNÇÕES DO JOGO DA VELHA_//////
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
if (budy == "Cex") return reply("why");
if (
budy.toLowerCase() == "s" ||
budy.toLowerCase() == "sim" ||
budy.toLowerCase() == "ok"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`O jogo já começou antes!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./lib/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
ayumi.sendMessage(from, chatAccept, MessageType.text, {quoted: info,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
],
},
});
}
} else if (
budy.toLowerCase() == "n" ||
budy.toLowerCase() == "não" ||
budy.toLowerCase() == "no"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`O jogo já começou!`);
fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
 ayumi.sendMessage(from,
 `@${boardnow.X} *_Infelizmente seu oponente não aceitou o desafio ❌😕_*`,
 MessageType.text, {quoted: info,
 contextInfo: {
 mentionedJid: [boardnow.X + "@s.whatsapp.net"],
},
}
);
}
}
}

if (arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if (!boardnow.status) return reply(`Parece que seu oponente não aceitou o desafio ainda...`)
if (
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
     
sender.replace("@s.whatsapp.net", "")
)
return;
const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;
if (moving.isWin) {
if (moving.winner == "SERI") {
const chatEqual = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Jogo termina empatado 😐
`;
reply(chatEqual);
fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
return;
}
const abt = Math.ceil(Math.random() + 4000)
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 1) + 10;
const limLoose = Math.floor(Math.random() * 1) + 5;
const chatWon = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Vencido por @${winnerJID} 😎👑
`;
addLevelingXp(winnerJID + "@s.whatsapp.net", abt)

ayumi.sendMessage(from, chatWon, MessageType.text, {quoted: info,
contextInfo: {
mentionedJid: [
moving.winner == "O" ?
moving.O + "@s.whatsapp.net" :
moving.X + "@s.whatsapp.net",
],
},
});
setTimeout( () => {
if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {
 fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");
 reply(`*🕹️JOGO DA VELHA RESETADO...🕹️*`);
 } else {
console.log(color(time, "red"), color("[ ESPIRADO ]", "magenta"), color('Jogo da velha espirado', "red"));
 }
}, 2000000) //20 minutos
reply(`_*🥳Parabéns @${winnerJID} Você ganhou "${abt}" em xp por ter ganhado o jogo da velha🎉...*_`)      
fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
} else {
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
❌ : @${moving.X}
⭕ : @${moving.O}

Sua vez : @${moving.turn == "X" ? moving.X : moving.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
ayumi.sendMessage(from, chatMove, MessageType.text, {quoted: info,
contextInfo: {
mentionedJid: [
moving.X + "@s.whatsapp.net",
moving.O + "@s.whatsapp.net",
],
},
});
}
} 



//=================================\\


if(isUrl(bady) && isAntiLinkHard && isGroupAdmins && isBotGroupAdmins) {
const linkAS = await ayumi.groupInviteCode(`${from}`)
if (budy.match(linkAS)) return reply('Link do Grupo, não irei remover..')  
reply('*Link detectado, porém usuário é admin*')
}
if(isUrl(bady) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins) {
reply('*Link detectado, punindo usuário...*')
kic = `${sender.split("@")[0]}@s.whatsapp.net`
ayumi.groupRemove(from, [kic])
}

//========(CONTADOR-DE-MENSAGENS)========\\

const groupIdscount = []
const numbersIds = []
for(let obj of countMessage) {
groupIdscount.push(obj.groupId)
}
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.jid)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
countMessage[ind].numbers[indnum].messages += 1
countMessage[ind].numbers[indnum].cmd_messages += isCmd ? 1 : 0
fs.writeFileSync('./lib/grupos/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = 1
const cmd_messages = isCmd ? 1 : 0
countMessage[ind].numbers.push({
jid: sender,
messages: messages,
cmd_messages: cmd_messages
})
fs.writeFileSync('./lib/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
}
else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
jid: sender,
messages: 2,
cmd_messages: isCmd ? 1 : 0
}]
})
fs.writeFileSync('./lib/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
//======================================\\

//===============(AUTO-BAN)=============\\
const dbids = []
for(i=0;i<adeuscara.length;++i) {
dbids.push(adeuscara[i].groupId)
}
const isAdeusCara = (isGroup && dbids.indexOf(from) >= 0) ? true : false

//======================================\\


//============(EVAL-EXECUÇÕES)===========\\

if (budy.startsWith('>')){
if(!isOwner && !issupre && !info.key.fromMe && !issupre) return
console.log('[', color('EVAL', 'silver'),']', color(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(budy))
try {
return reply(JSON.stringify(eval(budy.slice(2)),null,'\t'))
} catch(e) {
reply(`${e}`)
}
}
if (budy.startsWith('=>')){
if (!isOwner && !issupre && !info.key.fromMe && !issupre) return reply('somente meu criador')
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
  reply(String(e))
}
}
if (body.startsWith('$')) {
if (!q && !isOwner && !issupre && !info.key.fromMe) return reply('somente meu criador')
exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
//======================================\\


//======(ANTI-IMAGEM)========\\
if(isAntiImg && isBotGroupAdmins && type == MessageType.image) {
if (info.key.fromMe) return
if(isGroupAdmins) return ayumi.sendMessage(from,'*mensagem proibida detectada, porém é admin logo a punição será anulada*', MessageType.text, {quoted: info})
await ayumi.sendMessage(from, '*mensagem proibida detectada, banindo...*',  MessageType.text, {quoted: info})
setTimeout(async function () {
ayumi.groupRemove(from, [sender])
}, 1000)
}

//======(ANTI-VIDEO)========\\
if(isAntiVid && isBotGroupAdmins && type == MessageType.video) {
if(isGroupAdmins) return ayumi.sendMessage(from,'*mensagem proibida detectada, porém é admin logo a punição será anulada*', MessageType.text, {quoted: info})
await ayumi.sendMessage(from, '*mensagem proibida detectada, banindo...*', MessageType.text, {quoted: info})
setTimeout(async function () {
ayumi.groupRemove(from, [sender])
}, 1000)
}

//======(ANTI-AUDIO)=======\\
if(isAntiAudio && isBotGroupAdmins && type == MessageType.audio) {
if(isGroupAdmins) return ayumi.sendMessage(from,'*mensagem proibida detectada, porém é admin logo a punição será anulada*', MessageType.text, {quoted: info})
await ayumi.sendMessage(from, '*mensagem proibida detectada, banindo...*', MessageType.text, {quoted: info})
setTimeout(async function () {
ayumi.groupRemove(from, [sender])
}, 1000)
}
//=======================================\\



//=========(ANTIPV-QUE-SÓ-FALA)==========\\

if(isCmd && !isGroup && !isOwner && !issupre && !info.key.fromMe && banChats === true) return reply(`Somente pode ser utilizado em Grupo`)
const atibot = info.isBaileys
if (atibot === true) return 


//======================================\\

//========(ANTI-PV-QUE-BLOQUEIA)======\\

if(isAntiPv && !isOwner && !issupre && !info.key.fromMe && isCmd && !isGroup){ 
	reply('*Antipv ativado, você será bloqueado!*\n*Contate o criador*')
	ayumi.blockUser(sender, 'add') 
	return
}
//======================================\\



//==========(ANTI-LIGAÇÃO)===========\\
if(isAnticall){ 
ayumi.on('CB:action,,call', async json => {
const callerId = json[2][0][1].from;  
console.log('bloqueando o '+ callerId)
ayumi.blockUser(callerId, 'add') 
	return
});	
}
//====================================\\


//==SISTEMA DE VOTAÇÃO: CRÉDITOS: KAUAN==\\
if(isGroup) {
if (budy.toLowerCase() === 'voto'){
let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '0@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' não é possivel votar duas vezes', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '✅'
})
fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*para*: ${_votes[0].reason}\n*total Votos* : ${vote.length} Votos\n*Duração* : ${_votes[0].durasi} minutos\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
        }  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
} else if (budy.toLowerCase() === 'devoto'){
const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '0@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' não é possivel anular um voto', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '❌'
})
fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*para*: ${_votes[0].reason}\n*total Votos* : ${vote.length} Vote\n*duração* : ${_votes[0].durasi} minutos\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
}
}	
//======================================\\



//_VISUALIZA AS MENSAGENS 
ayumi.chatRead(from)

//_CONTAGEM DE COMANDOS
if (isCmd) cmdadd()
            
if (isBanned) return
BannedExpired(ban)

if (isCmd && !isOwner && !issupre) addFilter(sender)


//INICIO DE COMANDOS SEM PREFIXO
switch(testat){
}

if(budy.includes("@null VS @null")) {
(async () => {
if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {
fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");
reply(`Jogo da velha resetado automático, neste grupo!!`);
}
})()
}

if (budy.includes("bot corno") || (budy.includes("Bot corno"))){
await ayumi.updatePresence(from, Presence.composing)
reply("Corno é você, seu animal")
}

if (budy.includes("adivinha meu celular") || (budy.includes("Adivinha meu celular") || (budy.includes("Adivinha Meu celular") || (budy.includes("Adivinha Meu Celular") || (budy.includes("bot qual meu celular")))) )){
adivinha = info.key.id.length > 21 ? 'Android 🤣' : info.key.id.substring(0, 2) == '3A' ? 'IOS😂😂😅' : 'Zap zap web 😂😂☝🏼😅';
await ayumi.sendMessage(from, adivinha, text, {quoted: info})
}

if(messagesC.includes('exec')) {
if(!isOwner && !issupre) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
}

if (messagesC == "corno"){
ayumi.updatePresence(from, Presence.composing)
tujuh = fs.readFileSync('./audios/corno.mp3');
await ayumi.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
}

//INICIO DE COMANDO DE PREFIXO
switch(command) {

case 'destrava':
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
await ayumi.sendMessage(from, destrava(prefix), text, {quoted: info})
break 

case 'perfil':
case 'infome':
case 'eu':
try {
         var ppimg = await ayumi.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
               var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
var palavras = ["*Se você traçar metas absurdamente altas e falhar, seu fracasso será muito melhor que o sucesso de todos. – James Cameron, Cineastra*", "*O sucesso normalmente vem para quem está ocupado demais para procurar por ele – Henry David Thoreau, filósofo*", "*A vida é melhor para aqueles que fazem o possível para ter o melhor – John Wooden, jogador e treinador de basquete*", "*Os empreendedores falham, em média, 3,8 vezes antes do sucesso final. O que separa os bem-sucedidos dos outros é a persistência – Lisa M. Amos, executiva*", "*Se você não está disposto a arriscar, esteja disposto a uma vida comum – Jim Rohn, empreendedor*", "*Escolha uma ideia. Faça dessa ideia a sua vida. Pense nela, sonhe com ela, viva pensando nela. Deixe cérebro, músculos, nervos, todas as partes do seu corpo serem preenchidas com essa ideia. Esse é o caminho para o sucesso – Swami Vivekananda, pensador hindu*", "*Para de perseguir o dinheiro e comece a perseguir o sucesso – Tony Hsieh, empreendedor*", "*Todos os seus sonhos podem se tornar realidade se você tem coragem para persegui-los – Walt Disney, desenhista e empreendedor", "*Ter sucesso é falhar repetidamente, mas sem perder o entusiasmo – Winston Churchill, político*", "*Sempre que você vir uma pessoa de sucesso, você sempre verá as glórias, nunca os sacrifícios que os levaram até ali – Vaibhav Shah, pensador*", "*Sucesso? Eu não sei o que isso significa. Eu sou feliz. A definição de sucesso varia de pessoa para pessoa Para mim, sucesso é paz anterior – Denzel Washington, ator*", "*Oportunidades não surgem. É você que as cria – Chris Grosser, fotógrafo*", "*Não tente ser uma pessoa de sucesso. Em vez disso, seja uma pessoa de valor – Albert Einstein, físico*", "*Não é o mais forte que sobrevive, nem o mais inteligente. Quem sobrevive é o mais disposto à mudança – Charles Darwin, biólogo*", "*A melhor vingança é um sucesso estrondoso – Frank Sinatra, cantor*", "*Eu não falhei. Só descobri 10 mil caminhos que não eram o certo – Thomas Edison, inventor*", "*Um homem de sucesso é aquele que cria uma parede com os tijolos que jogaram nele – David Brinkley, jornalista*", "*Ninguém pode fazer você se sentir inferior sem o seu consentimento – Eleanor Roosevelt, primeira-dama dos EUA", "*O grande segredo de uma boa vida é encontrar qual é o seu destino. E realizá-lo – Henry Ford, empreendedor*", "*Se você está atravessando um inferno, continue atravessando – Churchill*", "*O que nos parece uma provação amarga pode ser uma bênção disfarçada – Oscar Wilde, escritor*", "A distância entre a insanidade e a genialidade é medida pelo sucesso – Bruce Feirstein, roteirista", "*Não tenha medo de desistir do bom para perseguir o ótimo – John D. Rockefeller, empreendedor*", "*Não tenha medo de desistir do bom para perseguir o ótimo – John D. Rockefeller, empreendedor*", "*A felicidade é uma borboleta que, sempre que perseguida, parecerá inatingível; no entanto, se você for paciente, ela pode pousar no seu ombro – Nathaniel Hawthorne, escritor*", "*Se você não pode explicar algo de forma simples, então você não entendeu muito bem o que tem a dizer – Einstein*", "*Há dois tipos de pessoa que vão te dizer que você não pode fazer a diferença neste mundo: as que têm medo de tentar e as que têm medo de que você se dê bem – Ray Goforth, executivo*", "*Comece de onde você está. Use o que você tiver. Faça o que você puder – Arthur Ashe, tenista*","*As pessoas me perguntam qual é o papel que mais gostei de interpretar. Eu sempre respondo: o próximo – Kevin Kline, ator*","*Descobri que, quanto mais eu trabalho, mais sorte eu pareço ter – Thomas Jefferson, político*","*O ponto de partida de qualquer conquista é o desejo – Napoleon Hill, assessor político*"]
var conselho = palavras[Math.floor(Math.random() * palavras.length)]
const nivelgado = ['1','2','3','4','5','6','7','8','9']
const nivelgado2 = ['1','2','3','4','5','6','7','8','9'] 
const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
const puta = ['1','2','3','4','5','6','7','8','9']
const puta2 = ['1','2','3','4','5','6','7','8','9'] 
const putar = puta[Math.floor(Math.random() * (puta.length))]
const putar2 = puta2[Math.floor(Math.random() * (puta2.length))] 
const gostosura = ['1','2','3','4','5','6','7','8','9']
const gostosura2 = ['1','2','3','4','5','6','7','8','9'] 
const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))] 
gadop = `${Math.floor(Math.random() * 100)}`
const programa = Math.ceil(Math.random() * 10000)
const proximolvlxp = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
buffer = await getBuffer(ppimg)
buttons = [{buttonId: `#level`,buttonText:{displayText: `Level`},type:1}]
              imageMsg = (await ayumi.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer,})).imageMessage
              buttonsMessage = {footerText:'𝗰𝗮𝘀𝗲 𝗰𝗿𝗶𝗮𝗱𝗮 𝗽𝗼𝗿 𝘀𝗮𝗰𝗼𝗹𝗲 ', imageMessage: imageMsg,
              contentText:`
     「 🔥 ~_*PERFIL*_~ 🌈 」
 🗒 *Nome* : *${pushname}*
🪀 *Número* : @${sender.split("@")[0]}
🐂 *Nível gado* : *${nivelgador}${nivelgado2r}%*
📱 *Seu Célular* : ${info.key.id.length > 21 ? 'Android 🤣' : info.key.id.substring(0, 2) == '3A' ? 'IOS😂😂😅' : 'Zap zap web 😂😂☝🏼😅'}
😈 *Nível puta* : *${putar}${putar2}%*
😋 *Nível de gostosura* : *${gostosurar}${gostosurar2}%*
🍼 *Valor do programa* : *R$${programa}*

➻ *~_CONSELHO_~* :
${conselho}`,buttons,headerType:4}
              prep = await ayumi.prepareMessageFromContent(from,{buttonsMessage},{quoted: selo})
              ayumi.relayWAMessage(prep)
break

case 'frases':
case 'frase':
try {
ppimg = await ayumi.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
hehe = await fetchJson(`https://www.luc4rio-rest-api.tk/api/aleatorios/frases`)
if (hehe.error) return reply(hehe.error)
ccg =
`
  ‣ Author: ${hehe.Author}
 
  ‣ Criador: ${hehe.Criador}
 
  ‣ Frase: 
 
  ${hehe.Frase}\n`
daftarimg = await getBuffer(ppimg)
await ayumi.sendMessage(from, daftarimg, image, {quoted:info, caption: ccg})
break

case 'conselhobiblico':
case 'conselhosbiblico':  
case 'conselhosb':   
case 'conselhob':  
var conselhosb = conselhob[Math.floor(Math.random() * conselhob.length)]   
jr = `${tempo} ${pushname} 

Conselhos Bíblico para você: 

- ${conselhosb} 

> Bot: ${NomeDoBot}
> Grupo: ${groupName}`
await ayumi.sendMessage(from, jr, text, {quoted:info, contextInfo: {"mentionedJid": jr}})
break

case 'tabela':
await ayumi.sendMessage(from, tabela(prefix), text, {quoted: selo})
break 

case 'destrava2':
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
await ayumi.sendMessage(from, destrava2 (prefix), text, {quoted: info})
break 

case 'infovotação':
case 'infovotacao':  
await ayumi.sendMessage(from, infovotacao(prefix), text, {quoted: selo})
break

case 'infocontador':
await ayumi.sendMessage(from, infocontador(prefix), text, {quoted: selo})
break

case 'infolistanegra':
await ayumi.sendMessage(from, infolistanegra(prefix), text, {quoted: selo})
break

case 'infopalavrão':
case 'infopalavrao':
await ayumi.sendMessage(from, infopalavrao(prefix), text, {quoted: selo})
break

case 'infobancarac':
await ayumi.sendMessage(from, infobancarac(prefix), text, {quoted: selo})
break

//========(FUNÇÕES-PREMIUM-AQUI)=======\\
case 'metadinhas':
case 'metadinha': 
if(!isPremium) return reply(enviar.msg.premium)
mortandela(from)
couple = await fetchJson(`https://api.dapuhy.ga/api/randomimage/couple?apikey=9WSX6eFAEdjdivS`)
metadinha1 = await getBuffer(couple.result.pria)
await ayumi.sendMessage(from, metadinha1, image, {quoted: info})
metadinha2 = await getBuffer(couple.result.wanita)
await ayumi.sendMessage(from, metadinha2, image, {quoted: info})

case 'ler': 
case 'ocr':   
case 'lerfoto':  
if(!isPremium) return reply(enviar.msg.premium)
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
const media = await ayumi.downloadAndSaveMediaMessage(encmedia)
mortandela(from)
await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
.then(teks => {
reply(teks.trim())
fs.unlinkSync(media)
})
.catch(err => {
reply(err.message)
fs.unlinkSync(media)
})
} else {
reply('Somente fotos!')
}
break

case 'premiumlist':
if(!isPremium) return reply(enviar.msg.premium)   
tkks = '╭────*「 *PREMIUM USER👑* 」\n'
for (let V of premium) {
tkks += `│+  @${V.split('@')[0]}\n`
}
tkks += `│+ Total : ${premium.length}\n╰──────*「 *${setting.NomeDoBot}* 」*────`
await ayumi.sendMessage(from, tkks.trim(), extendedText, {quoted: info, contextInfo: {"mentionedJid": premium}})
break

case 'delete':
case 'del':
case 'd':  
if (!isPremium && !isOwner && !issupre && !info.key.fromMe && !isGroupAdmins) return reply(enviar.msg.premium)
if (!isGroup)return reply(enviar.msg.grupo)
try {
await ayumi.deleteMessage(from, {id: info.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
} catch {
reply('Só é possível deletar mensagens minhas')
}
break

case 'gerarcpf':
if(!isPremium) return reply(enviar.msg.premium)
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
await ayumi.sendMessage(from, `CPF gerado com sucesso : ${cpf}`, text, {quoted: info})
break

case 'cep':
if(!isPremium) return reply(enviar.msg.premium)  
if (args.length == 0) return reply(`Exemplo: ${prefix + command} 54330235`)
query = args.join(" ")
get_result = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/tools/cep?apikey=apiteam&cep=${query}`)
x = get_result.resultado
k = `CEP : ${x.cep}
LOGRADOURO: ${x.logradouro}
BAIRRO : ${x.bairro}
LOCALIDADE : ${x.localidade}
UF : ${x.uf}
IBGE : ${x.ibge}
GIA : ${x.gia}
DDD : ${x.ddd}
SIAFI : ${x.siafi}`
reply(k)
break 

case 'ddd':
if(!isPremium) return reply(enviar.msg.premium)
if (args.length < 1) return reply(`Use ${prefix + comando} 81`)
ddd = body.slice(5)
ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
ayumi.sendMessage(from, dddlist, text, {quoted: info})	
break

case 'encurtalink':
if(!isPremium) return reply(enviar.msg.premium)
if(args.length < 1) return reply(`Exemplo:\n${prefix}encurtalink https://xvideos.com`)
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
await limitAdd(sender)
break

//===========(ADMS-FUNÇÕES-AKI❬ 🏓 ❭\\

case 'atividade':
case 'atividades':  
try{
if(!isGroupAdmins && !issupre) return reply(enviar.msg.admin)
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
teks = `*Atividade dos membros do grupo:*\n\n`
mem = []
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.jid) >=0) {
var indnum = numbersIds.indexOf(obj.jid)
teks += `*• Membro:* @${countMessage[ind].numbers[indnum].jid.split('@')[0]}\n*• Comandos:* ${countMessage[ind].numbers[indnum].cmd_messages}\n*• Mensagens:* ${countMessage[ind].numbers[indnum].messages}\n\n----------------------------------\n\n`
} else {
teks += `*• Membro:* @${obj.jid.split('@')[0]}\n*• Comandos:* 0\n*• Mensagens:* 0\n\n----------------------------------\n\n`
}
mem.push(obj.jid)
}
ayumi.sendMessage(from, teks, extendedText, {quoted: info, contextInfo:{mentionedJid: mem}})
} else return reply('*Nada foi encontrado*')
} catch (e){
console.log(e)
}
break

case 'linkgp':
case 'linkgroup':
if(!isOwner) return reply(enviar.msg.ownerB)
if (!isGroup) return reply(enviar.msg.grupo)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
linkgc = await ayumi.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break

case 'promover':
if (!isGroup) return reply(enviar.msg.group)
if(!isOwner) return reply(enviar.msg.ownerB)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
const dlptu = body.slice(10)
if (dlptu.length > 14)return reply(`Exemplo : ${prefix}promover @55439220420`) 
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
ytb = 'Promovido com sucesso\n'
for (let _ of mentioned) {
ytb += `@${_.split('@')[0]}\n`
}
mentions(from, mentioned, true)
ayumi.groupRemove(from, mentioned)
} else {
mentions(`Ok, chefe. esse(a) aqui: @${mentioned[0].split('@')[0]} agora é admin do grupo!`, mentioned, true)
ayumi.groupMakeAdmin(from, mentioned)
}
break

case 'rebaixar':
if (!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.ownerB)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
const dlp = body.slice(15)
if (dlp.length >= 15)return reply(`Exemplo : ${prefix}rebaixar @55439220420`)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
ytb = 'Rebaixado com sucesso\n'
for (let _ of mentioned) {
ytb += `@${_.split('@')[0]}\n`
}
mentions(ytb, mentioned, true)
await ayumi.groupRemove(from, mentioned)
} else {
mentions(`Ok, chefe. esse(a) aqui: @${mentioned[0].split('@')[0]} perdeu o adm com sucesso!`, mentioned, true)
await ayumi.groupDemoteAdmin(from, mentioned)
}
break

case 'grupo': 
if (!isGroup) return reply(`SÓ EM GRUPO`)
if (!isGroupAdmins) return reply(`PRECISA SER ADMININASTROR`)
if (!isBotGroupAdmins) return reply(`BOT PREPRECISA SER ADMININASTROR`)
if (args[0] === 'a') {
reply(`*GRUPO ABERTO COM SUCESSO*`)
await ayumi.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'f') {
reply(`*GRUPO FECHADO COM SUCESSO*`)
await ayumi.groupSettingChange(from, GroupSettingChange.messageSend, true)
}				 
break 
case 'grupoinfo':
case 'infogrupo':
case 'infogp':  
case 'gpinfo':  
if (!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins)return reply(enviar.msg.adm)
ayumi.updatePresence(from, Presence.composing)
ppUrl = await ayumi.getProfilePicture(from)
buffer = await getBuffer(ppUrl)
ayumi.sendMessage(from, buffer, image, {quoted: info, caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* : ${groupDesc}`, thumbnail: null})
break 

case 'hidetag':
if (!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.ownerB)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
var value = body.slice(9)
var group = await ayumi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: info
}
ayumi.sendMessage(from, options, text)
break

case 'totag':
if(!isGroupAdmins) return reply(enviar.msg.adm)
if ((isMedia && !info.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
file = await ayumi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await ayumi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: info
}
ini_buffer = fs.readFileSync(file)
ayumi.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
encmediau = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
file = await ayumi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await ayumi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: info
}
ini_buffer = fs.readFileSync(file)
ayumi.sendMessage(from, ini_buffer, image, options)
fs.unlinkSync(file)
} else if ((isMedia && !info.message.videoMessage || isQuotedAudio) && args.length == 0) {
encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
file = await ayumi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await ayumi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'audio/mp4', duration: 999999999,
ptt : true,
contextInfo: { mentionedJid: mem },
quoted: info
}
ini_buffer = fs.readFileSync(file)
ayumi.sendMessage(from, ini_buffer, audio, options)
fs.unlinkSync(file)
 } else if ((isMedia && !info.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
file = await ayumi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await ayumi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/gif',
contextInfo: { mentionedJid: mem },
quoted: info
}
ini_buffer = fs.readFileSync(file)
ayumi.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else if ((isMedia && !info.message.videoMessage || isQuotedDocument) && args.length == 0) {
encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
file = await ayumi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await ayumi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'text/plain',
contextInfo: { mentionedJid: mem },
quoted: info
}
ini_buffer = fs.readFileSync(file)
ayumi.sendMessage(from, ini_buffer, document, options)
fs.unlinkSync(file)
}  else if ((isMedia && !info.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
file = await ayumi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await ayumi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/mp4', duration: 999999999,
contextInfo: { mentionedJid: mem },
quoted: info
}
ini_buffer = fs.readFileSync(file)
ayumi.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else{
reply(`Responder imagem/documento/gif/adesivo/áudio/vídeo com legenda ${prefix + comamand}`)
}
break

case 'marcar':
if (!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.ownerB)
members_id = []
jrp = (args.length > 1) ? body.slice(8).trim() : ''
jrp += '\n\n'
for (let mem of groupMembers) {
jrp += `*#* @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(jrp, members_id, true)
break

case 'kick':
if (!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.ownerB)
const dltp = body.slice(6)
if (dltp.length > 14)return reply(`Exemplo : ${prefix}kick @55439220420`) 
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque o alvo que você quer remover do grupo!') 
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Esse ai ja foi kkkk :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
ayumi.groupRemove(from, mentioned)
} else {
mentions(`Alvo removido com sucesso  : @${mentioned[0].split('@')[0]}`, mentioned, true)
ayumi.groupRemove(from, mentioned)
}
break

case 'ban':
if (!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.ownerB)
if (!isBotGroupAdmins) return reply(enviar. msg.Badmin)
if (info.message.extendedTextMessage === null || info.message.extendedTextMessage === undefined) return reply('Marque uma mensagem de um random')
if (info.message.extendedTextMessage.contextInfo.participant == numerodono) return reply('Não posso remover meu dono.')
if (info.message.extendedTextMessage.contextInfo.participant == botNumber) return reply('C acha que sou besta?, vou me remover não.')
setTimeout(function() {}, 2000);
if (info.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = info.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.length > 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
ayumi.groupRemove(from, M_exe)
} else {
ayumi.groupRemove(from, [exe1[0]])
}
} else {
exe1 = info.message.extendedTextMessage.contextInfo.participant
ayumi.groupRemove(from, [exe1])
}
break


//======≠(INFOS/EXECUÇÃO/DONO)≠=========\\

case 'bateria':
reply('《 Aguarde, esta informação é apenas para saber a porcentagem da bateria do celular do Bot 》')
post = await fetchJson(`https://api-gdr2.herokuapp.com/api/textmaker/game?text=Bateria&text2=${kutekute}%&theme=battlefield`)
send = await getBuffer(post.result.url)
ayumi.sendMessage(from, send, image,  {quoted: { key: { participant: `0@s.whatsapp.net`, ...{}}, message: { "imageMessage": { "caption": `${kutekute}%🔋`,}}}})
break

case 'autoban':
if (!isGroup) return reply(enviar.msg.admin)
if (!isOwner && !info.key.fromMe) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
var ind = dbids.indexOf(from)
if(isAdeusCara) {
adeuscara[ind].actived = true
} else {
adeuscara.push({
groupId: from,
actived: true,
number: []
})
}
fs.writeFileSync('./lib/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`Ativou com sucesso o recurso de autoban neste grupo✔️`)
} else if (Number(args[0]) === 0) {
var ind = dbids.indexOf(from)						
if(isAdeusCara) {
adeuscara[ind].actived = false
} else {
adeuscara.push({
groupId: from,
actived: false,
number: []
})
}
fs.writeFileSync('./lib/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`Desativou com sucesso o recurso de autoban neste grupo✔️`)
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'listban':
if (!isGroup) return reply(enviar.msg.admin)
if (!isGroupAdmins) return reply(enviar.msg.admin)
var ind = dbids.indexOf(from)
if(!isAdeusCara) return reply('*Nenhum Número não foi adicionado*')
teks = '*Números que vou moer na porrada se voltar 😡:*\n'
for(i=0;i<adeuscara[ind].number.length;++i) {
teks += `➤ *${adeuscara[ind].number[i]}*\n`
}
teks += '*Esses ai vou descer meu martelo do ban 🥵*'
reply(teks)
break  

case 'addautorm':
case 'addautoban':
case 'listanegra':  
if (!isGroup) return reply(enviar.msg.admin)
if (!isOwner && !info.key.fromMe) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Diga o numero sem espaço, + ou traço')
if (isNaN(args[0])) return reply('Diga o numero sem espaço, + ou traço')
var ind = dbids.indexOf(from)
if(isAdeusCara) {
var numind = adeuscara[ind].number.indexOf(args[0])
if(numind >= 0) return reply('*Esse Número ja esta incluso*')
adeuscara[ind].number.push(args[0])
} else {
adeuscara.push({
groupId: from,
actived: false,
number: [args[0]]
})
}
fs.writeFileSync('./lib/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`*Número adicionado a lista de autoban*`)
break

case 'delremover':
case 'delautorm':  
case 'delautoban': 
case 'tirardalista':  
if (!isGroup) return reply(enviar.msg.admin)
if (!isOwner && !info.key.fromMe) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Diga o numero sem espaço, + ou traço')
if (isNaN(args[0])) return reply('Diga o numero sem espaço, + ou traço')
var ind = dbids.indexOf(from)
if(!isAdeusCara) return reply('*Nenhum Número não foi adicionado*')
var numind = adeuscara[ind].number.indexOf(args[0])
if(numind < 0) return reply('*Esse número não está incluso*')
adeuscara[ind].number.splice(numind, 1)
fs.writeFileSync('./lib/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`*Número removido a lista de autoban*`)
break

case 'banghost':
case 'banghosts':  
if(!isOwner && !issupre && !info.key.fromMe) return reply(enviar.msg.ownerB)
if(!isGroup) return reply(enviar.msg.group)
if(groupIdscount.indexOf(from) >= 0) {
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.jid) >=0) { 
var indnum = numbersIds.indexOf(obj.jid)
if(countMessage[ind].numbers[indnum].messages <= args[0]) {
if(groupAdmins.includes(obj.jid)) {
mentions(`@${obj.jid} ta liberado da inspeção por ser admin`, [obj.jid], true)
} else {
ayumi.groupRemove(from, [obj.jid])
}
}
} else {
if(groupAdmins.includes(obj.jid)) {
mentions(`@${obj.jid} ta liberado da inspeção por ser admin`, [obj.jid], true)
} else {
ayumi.groupRemove(from, [obj.jid])
}
}
}
}
break

case 'setprefix':
if (args.length < 1) return
if (!isOwner && !info.key.fromMe) return reply(enviar.msg.ownerB)
prefix = args[0]
setting.prefix = prefix
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O prefixo foi alterado com sucesso para: ${prefix}`)
break

case 'setprefixs':
if (args.length < 1) return
if (!isOwner && !issupre && !info.key.fromMe) return reply(enviar.msg.ownerB)
prefix = args[0]
setting.prefix = prefix
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O prefixo foi alterado com sucesso para: ${prefix}`)
break

case 'nomegp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.admin)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
await ayumi.groupUpdateSubject(from, `${body.slice(9)}`)
await ayumi.sendMessage(from, 'Sucesso, alterou o nome do grupo', text, {quoted: info})
break

case 'fotobot':
ayumi.updatePresence(from, Presence.composing)
if (!isOwner && !issupre && !info.key.fromMe) return reply(enviar.msg.ownerB)
if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}fotobot ou tags de imagem que já foram enviadas`)
enmedia = JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await ayumi.downloadAndSaveMediaMessage(enmedia)
await ayumi.updateProfilePicture(botNumber, media)
reply('Obrigado pelo novo perfil😗')
break

case 'clonar':
if (!isOwner && !issupre) return reply('Você quem é o proprietário?')
if (!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.ownerB)
if (args.length < 1) return reply('Marque a pessoa que você quer clonar\n\n*EXEMPLO:* clone @')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Tag cvk')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
try {
pp = await ayumi.getProfilePicture(id)
buffer = await getBuffer(pp)
ayumi.updateProfilePicture(botNumber, buffer)
mentions(`Foto do perfil atualizada com sucesso, usando a foto do perfil @${id.split('@')[0]}`, [jid], true)
} catch (e) {
reply('Putz, deu erro, a pessoa deve estar sem foto 😔')
}
break

case 'leveling':
if (!isGroup) return reply('Só em Grupo')
if (!isGroupAdmins) return reply('Você precisa ser adm')
if (args.length < 1) return reply('Ative pressione 1, Desativar pressione 0')
if (Number(args[0]) === 1) {
if (isLevelingOn) return reply('*O recurso de nível já estava ativo antes*')
_leveling.push(from)
fs.writeFileSync('./lib/usuarios/leveling.json', JSON.stringify(_leveling))
reply(enviar.levelon) 
} else if (Number(args[0]) === 0) {
if (!isLevelingOn) return reply('*O recurso de nível já está Desativado*')  
_leveling.splice(from, 1)
fs.writeFileSync('./lib/usuarios/leveling.json', JSON.stringify(_leveling))
reply(enviar.leveloff)
} else {
reply('*Adicionar parâmetro 1 ou 0* ')
}
break

case 'level':
if (!isLevelingOn) return reply(enviar.levelnoton)
if (!isGroup) return reply(enviar.msg.group)
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
if (userLevel === undefined && userXp === undefined) return reply(enviar.levelnol)
sem = sender.replace('@s.whatsapp.net','')
try {
         var ppimg = await ayumi.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
               var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
					buffer = await getBuffer(ppimg)

                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
buttons = [{buttonId: `#anagrama`,buttonText:{displayText: `Anagrama`},type:1}]
              imageMsg = (await ayumi.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer,})).imageMessage
              buttonsMessage = {footerText:'𝗰𝗮𝘀𝗲 𝗰𝗿𝗶𝗮𝗱𝗮 𝗽𝗼𝗿 𝘀𝗮𝗰𝗼𝗹𝗲 ', imageMessage: imageMsg,
              contentText:`︎╭━━『☃️』 *NIVEL*『☃️』\n│❒ ɴᴏᴍᴇ : ${pushname}\n│❒ ɴᴜᴍᴇʀᴏ : wa.me/${sender.split("@")[0]}\n│❒ XP :  ${userXp}/${requiredXp}\n│❒ Seu nível : ${userLevel}\n│❒ Patente : ${patt}\n╰━━『🦋』*NIVEL*『🦋』━━`,buttons,headerType:4}
              prep = await ayumi.prepareMessageFromContent(from,{buttonsMessage},{quoted: selo})
              ayumi.relayWAMessage(prep)
break

 case 'minerar':      
                      if (!isOwner) {
                      const one = 9999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 10)
                      reply(`como e vc sacole ganhou ${one} e +10 nível ⚡`)
                      }else{
                      const mining = Math.ceil(Math.random() * 20000)
                      addLevelingXp(sender, mining) 
                      await reply(`*${pushname} minérou⛏️ na mina e conseguiu* ${mining} de xp...*`)
                      }                                      
                   await limitAdd(sender)
             					break

case 'bc':
      case 'tm':

             if (args.length < 1) return reply('teks?')
             anu = await ayumi.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await ayumi.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             ayumi.sendMessage(_.jid, bc, image, {quoted:selo,caption: `*「©saco」*\n${body.slice(4)}`})
}
             reply('Tm feita')
             } else {
             for (let _ of anu) {
ayumi.sendMessage(_.jid, 
			{"contentText": `*「 ${setting.NickDono} 」*\n ${body.slice(4)}`,
			"footerText": '*「©Sacole」*',
			"buttons": [
			{"buttonId": `#dono`,
			"buttonText": {"displayText": "Dono"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )
}
             reply('feito')
}
             break

case 'transmitir':
if(!budy.includes("-")) return reply(`Defina pra que tipo de público você deseja enviar, por exemplo: ${prefix + command} -pvs bla bla fala oq quer, -pvs = privados / -gps = grupos / -all = para todos / boa sorte..`)
if (!isOwner && !issupre) return reply('Quem é Você, você não é meu dono 😂?')
if (args.length < 1) return reply('.......')
anu = await ayumi.chats.all()
bahh = ayumi.chats.array.filter(v => v.jid.endsWith('g.us'))
bahhh = ayumi.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
if(args[0].toLowerCase() === '-all'){
if (isMedia && !info.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
buff = await ayumi.downloadMediaMessage(encmedia)
for (i = 0; i < anu.length; i++) {
ayumi.sendMessage(anu[i].jid, buffer, image, {caption: `[ TRANSMIÇÃO DE MY DONO ]\n\n${body.slice(16)}`})
}
reply(`transmição foi enviada a ${bahh.length} grupos e ah ${bahhh.length} pvs`)
} else {
for (i = 0; i < anu.length; i++) {
sendMess(anu[i].jid, `[ TRANSMISSÃO DO MY DONO ]\n\n${body.slice(16)}`)
}
reply(`transmição foi enviada a ${bahh.length} grupos e ah ${bahhh.length} pvs`)
}
}else if(args[0].toLowerCase() === '-pvs'){
if (isMedia && !info.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
buffer = await ayumi.downloadMediaMessage(encmedia)
for (i = 0; i < bahhh.length; i++) {
ayumi.sendMessage(bahhh[i].jid, buff, image, {caption: `[ TRANSMIÇÃO DE MY DONO ]\n\n${body.slice(16)}`})
}
reply(`transmição foi enviada para ${bahhh.length} pvs`)
} else {
for (i = 0; i < bahhh.length; i++) {
sendMess(bahhh[i].jid, `[ TRANSMISSÃO DE MY DONO ]\n\n${body.slice(16)}`)
}
reply(`transmição foi enviada a ${bahhh.length} pvs`)
}
} else if(args[0].toLowerCase() === '-gps'){
if (isMedia && !info.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
buffer = await ayumi.downloadMediaMessage(encmedia)
for (i = 0; i < bahh.length; i++) {
ayumi.sendMessage(bahh[i].jid, buffer, image, {caption: `[ TRANSMIÇÃO DE MY DONO ]\n\n${body.slice(16)}`})
}
reply(`transmição foi enviada a ${bahh.length} grupos`)
} else {
for (i = 0; i < bahh.length; i++) {
sendMess(bahh[i].jid, `[ TRANSMISSÃO DE MY DONO ]\n\n${body.slice(16)}`)
}
reply(`transmição foi enviada a ${bahh.length} grupos`)
}
}
break

case 'bcgp':
case 'bcgc':  
if (!isOwner && !issupre && !info.key.fromMe) return reply(enviar.msg.ownerB)
if(!isOwner) return reply(enviar.msg.ownerB)
if (args.length < 1) return reply('.......')
fgp = await groupMembers
var nomor = info.participant
if (isMedia && !info.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
buffer = await ayumi.downloadMediaMessage(encmedia)
for (let _ of fgp) {
ayumi.sendMessage(_.jid, buffer, image, {caption: `*「 TRANSMISSÃO 」*\n\nGrupo: ${groupName}\n Número: wa.me/${(sender.split('@')[0])}\nMensagem : ${body.slice(6)}`})
}
reply('')
} else {
for (let _ of fgp) {
sendMess(_.jid, `*「 TRANSMISSÃO 」*\n\nGrupo : ${groupName}\n Número : wa.me/${(sender.split('@')[0])}\nMensagem : ${body.slice(6)}`)
}
reply('Grupo de transmissão bem-sucedido')
} 
break

case 'dono1':
if (args.length < 1) return
if (!isOwner && !issupre && !info.key.fromMe) return reply(enviar.msg.ownerB)
dono1 = body.slice(8)
nescessario.dono1 = dono1
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${dono1}`)
break

case 'dono2':
if (args.length < 1) return
if (!isOwner && !issupre && !info.key.fromMe) return reply(enviar.msg.ownerB)
dono2 = body.slice(8)
nescessario.dono2 = dono2
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${dono2}`)
break

case 'dono3':
if (args.length < 1) return
if (!isOwner && !issupre && !info.key.fromMe) return reply(enviar.msg.ownerB)
dono3 = body.slice(8)
nescessario.dono3 = dono3
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um terceiro dono(a) alterado com sucesso para: ${dono3}`)
break

case 'dono4':
if (args.length < 1) return
if (!isOwner && !issupre && !info.key.fromMe) return reply(enviar.msg.ownerB)
dono4 = body.slice(8)
nescessario.dono4 = dono4
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um quarto dono(a) alterado com sucesso para: ${dono4}`)
break

case 'dono5':
if (args.length < 1) return
if (!isOwner && !issupre && !info.key.fromMe) return reply(enviar.msg.ownerB)
dono5 = body.slice(8)
nescessario.dono5 = dono5
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono5}`)
break

case 'dono6':
if (args.length < 1) return
if (!isOwner && !issupre && !info.key.fromMe) return reply(enviar.msg.ownerB)
dono6 = body.slice(8)
nescessario.dono6 = dono6
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono6}`)
break

case 'getquoted':
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'donos':
p = `[ Lista de donos do bot ${setting.NomeDoBot} ] 

Dono Oficial do bot: ${setting.numerodono}

- [ 1 ] ${nescessario.dono1}\n- [ 2 ] ${nescessario.dono2}\n- [ 3 ] ${nescessario.dono3}\n- [ 4 ] ${nescessario.dono4}\n- [ 5 ] ${nescessario.dono5}\n- [ 6 ] ${nescessario.dono6} `
reply(p)
break

case 'online':
case 'onlines':  
case 'listonline': 
case 'listonlines':  
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(ayumi.chats.get(ido).presences), ayumi.user.jid]
ayumi.sendMessage(from, '𝒍𝒊𝒔𝒕𝒂 𝒅𝒆 𝒖𝒔𝒖𝒂𝒓𝒊𝒐𝒔 𝒐𝒏𝒍𝒊𝒏𝒆𝒔:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
 quoted: info,
 contextInfo: {
 mentionedJid: online
}
})
break

case 'admins':
case 'listadmins':  
case 'listaadmins':   
if (!isGroup) return reply(enviar.msg.grupo)
ytb = `Lista de admins do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(ytb, groupAdmins, true)
break

case 'ausente': 
if (!isOwner && !issupre && !info.key.fromMe) return reply(`Você não e o wa.me/${setting.NumeroDono} so ele pode usar esse comando kkkk`)
offline = true
waktuafk = Date.now()
anuu = args.join(" ") ? args.join(" ") : 'ativar'
alasanafk = anuu
anu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B2673620DD5947E63E3ABE663F263", 'participant': `${setting.numerodono}@s.whatsapp.net`, 'remoteJid': `${from}`, 'quotedMessage': {"imageMessage": {"caption": `OFFLINE`, 'jpegThumbnail': await getBuffer(`${linklogos}`)}}}}
await ayumi.sendMessage(from, `[❗] AGORA EU ESTOU OFFLINE`,MessageType.text,anu)
await limitAdd(sender)
break 

case 'ativo':
if (!isOwner && !issupre && !info.key.fromMe) return reply(`Você não e o wa.me/${setting.numerodono} so ele pode usar esse comando kkkk`)
offline = false
anu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B2673620DD5947E63E3ABE663F263", 'participant': `${setting.numerodono}@s.whatsapp.net`, 'remoteJid': `${from}`, 'quotedMessage': {"imageMessage": {"caption": `ONLINE`, 'jpegThumbnail': await getBuffer(`${linklogos}`)}}}}
await ayumi.sendMessage(from, `[❗] AGORA ESTOU ONLINE`,MessageType.text,anu)
await limitAdd(sender)
break   

case 'serpremium':
case 'serprem':  
if (!isOwner && !issupre && !info.key.fromMe) return reply(enviar.msg.ownerB)
premium.push(`${setting.numerodono}@s.whatsapp.net`)
fs.writeFileSync('./lib/usuarios/premium.json', JSON.stringify(premium))
reply(`Pronto ${setting.numerodono} você foi adicionado na lista premium.`)
break

case 'addpremium':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isOwner && !issupre && !info.key.fromMe) return reply(enviar.msg.ownerB)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
premium.push(`${mentioned}`)
fs.writeFileSync('./lib/usuarios/premium.json', JSON.stringify(premium))
susp = `👑@${mentioned[0].split('@')[0]} foi adicionado à lista de usuários premium com sucesso👑`
mentions(`${susp}`, mentioned, true)   
break 

case 'delpremium':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isOwner && !issupre && !info.key.fromMe) return  reply(enviar.msg.ownerB)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
premium.splice(`${mentioned}`)
fs.writeFileSync('./lib/usuarios/premium.json', JSON.stringify(premium))
susp = `✖@${mentioned[0].split('@')[0]} foi removido da lista de usuários premium✖`
mentions(`${susp}`, mentioned, true)   
break 

case 'limpar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.admin)
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
ayumi.sendMessage(from, clear , MessageType.text, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
break
case 'clearchat':
case 'limparchat':  
case 'limparmsg':  
if (!isOwner && !issupre && !info.key.fromMe) return reply(enviar.msg.ownerB)
anu = await ayumi.chats.all()
list_chat = await ayumi.chats.all()
for (let chat of list_chat) {
await ayumi.modifyChat(chat.jid, "delete", {includeStarred: false})
}
reply("Chat limpo")
break

case 'addpalavra':
if (!isOwner && !issupre && !info.key.fromMe) return reply(enviar.msg.ownerB)
if (args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
const bw = body.slice(12)
palavra.push(bw)
fs.writeFileSync('./lib/grupos/palavras.json', JSON.stringify(palavra))
reply('Palavrão adicionado com sucesso!')
await limitAdd(sender)
break

case 'delpalavra':
if (!isOwner && !issupre && !info.key.fromMe) return reply(enviar.msg.ownerB)
if (args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
let dbw = body.slice(12)
palavra.splice(dbw)
fs.writeFileSync('./lib/grupos/palavras.json', JSON.stringify(palavra))
reply('Palavrão removido da lista com sucesso!')
await limitAdd(sender)
break

case 'listapalavrão': case 'listapalavra':
case 'listpalavra':
let lbw = `Esta é a lista de palavrão\nTotal : ${palavra.length}\n`
for (let i of palavra) {
lbw += `➸ ${i.replace(palavra)}\n`
}
await reply(lbw)
await limitAdd(sender)
break 

case 'legendasaiu':
if (args.length < 1) return
if (!isOwner && !issupre && !info.key.fromMe) return reply(enviar.msg.ownerB)
legendasaiu = args.join(" ")
nescessario.legendasaiu = legendasaiu
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`A legenda de saiu foi alterada com sucesso para: ${legendasaiu}`)
break

case 'legendabv':
if (args.length < 1) return
if (!isOwner && !issupre && !info.key.fromMe) return reply(enviar.msg.ownerB)
legendabv = args.join(" ")
nescessario.legendabv = legendabv
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`A legenda do bem vindo foi alterada com sucesso para: ${legendabv}`)
break

case 'fundobemvindo':
case 'fundobv':  
if (!isOwner && !info.key.fromMe) return reply(enviar.msg.ownerB)
if (args.length < 1) return reply(`Marque alguma imagem com o comando ${prefix}imgpralink e copie o link e digite\n${prefix}fundobemvindo o link aqui.\nE ${prefix}fundosaiu o link aqui.`)
fundo1 = args[0]
if(budy.includes("  ")) return reply(`Não pode espaço, senão vai bugar, e é link da imagem, marca uma foto com o comando ${prefix}imgpralink, não é texto`)
nescessario.fundo1 = fundo1
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`A imagem de bem vindo foi alterado com sucesso para: ${fundo1}`)
break

case 'fundosaiu':
if (!isOwner && !info.key.fromMe) return reply(enviar.msg.ownerB)
if (args.length < 1) return reply(`Marque alguma imagem com o comando ${prefix}imgpralink e copie o link e digite\n${prefix}fundosaiu o link aqui.\nE ${prefix}fundobemvindo o link aqui.`)
fundo2 = args[0]
if(budy.includes("  ")) return reply(`Não pode espaço, senão vai bugar, e é link da imagem, marca uma foto com o comando ${prefix}imgpralink, não é texto`)
nescessario.fundo2 = fundo2
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`A imagem de saiu foi alterado com sucesso para: ${fundo2}`)
break

case 'test':
if (isUser) return reply(`📌 *Você já está registrado*`)
const namaUser = q.substring(0, q.indexOf('/') - 0)
const serialUser = createSerial(20)
reply('『❗』Esᴘᴇʀᴇ ᴏ ᴘʀᴏᴄᴇssᴀᴍᴇɴᴛᴏ ᴅᴏ sᴇᴜ ʟᴏɢɪɴ')
try {
var ppimg = await ayumi.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buffer = await getBuffer(ppimg)
const tekentod = 
`
╭•❏ 📝 ૨૯g¡ઽƬ૨ѳ
 • ⪧ ⃝༘⃕🐤REGISTRADO(A)
│⪧ ⃝༘⃕⚡ɪᴅ: ${serialUser}
 • Rᴇɢɪsᴛʀᴏ ʙᴇᴍ sᴜᴄᴇᴅɪᴅᴏ!!
│⪧ ⃝༘⃕⏳ʜᴏʀᴀʀɪᴏ: ${time}
 • ⪧ ⃝༘⃕,⚠️ɴᴏᴍᴇ: ${pushname}
│⪧ ⃝༘⃕🐤ɴᴜᴍᴇʀᴏ: wa.me/${sender.split('@')[0]}
╰━━━━━━─ • ─━━━━━━❋ཻུ۪۪⸙
`            
veri = sender
if (isGroup) {
addRegisteredUser(sender, pushname, time, serialUser)
await ayumi.sendMessage(from, buffer, image, {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, caption: `${tekentod}`})              
} else {
addRegisteredUser(from, pushname, time, serialUser)
await ayumi.sendMessage(from, buffer, image, {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, caption: `${tekentod}`})      
}       
break

case 'antiligar':
try {
if (!isOwner && !issupre && !info.key.fromMe) return reply(enviar.msg.ownerB)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAnticall) return reply('Ja esta ativo')
anticall.push('Ativado')
fs.writeFileSync('./lib/usuarios/anticall.json', JSON.stringify(anticall))
reply('Ativou com sucesso o recurso de antiligação no bot✔️')
} else if (Number(args[0]) === 0) {
fs.writeFileSync('./lib/usuarios/anticall.json', JSON.stringify([]))
reply('Desativou com sucesso o recurso de antiligação no bot✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Falha ao ativar')
}
break

case 'antipvon':
if (!isOwner && !issupre && !info.key.fromMe ) return await reply('Apenas Meu Dono')
if (banChats) return await reply('já está ativo o modo antipv')
banChats = true
nescessario.banChats = banChats
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
await ayumi.sendMessage(from, "*Sucesso alterado para modo antipv, pv não poderá ser utilizado" , text)
break

case 'antipvoff':
if (!isOwner && !issupre && !info.key.fromMe) return await reply('Apenas meu dono o owner')
if (!banChats) return await reply('Nao estava ativado ainda')
banChats = false
nescessario.banChats = banChats
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
await ayumi.sendMessage(from, "*Sucesso modo antipv desligado, pv liberado.", text)
break

case 'antipv':
try {
if (!isOwner && !issupre && !info.key.fromMe) return reply(enviar.msg.ownerB)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiPv) return reply('Ja esta ativo')
antipv.push('Ativado')
fs.writeFileSync('./lib/usuarios/antipv.json', JSON.stringify(antipv))
reply('Ativou com sucesso o recurso de antipv no bot✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiPv) return reply('Ja esta Desativado') 
fs.writeFileSync('./lib/usuarios/antipv.json', JSON.stringify([]))
reply('Desativou com sucesso o recurso de antipv no bot✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Falha ao ativar')
}
break

case 'block':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isOwner && !issupre && !info.key.fromMe) return  reply(enviar.msg.ownerB)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./lib/usuarios/banned.json', JSON.stringify(ban))
susp = `🚫@${mentioned[0].split('@')[0]} foi banido e não poderá mais usar os comandos do bot🚫`
mentions(`${susp}`, mentioned, true)   
break

case 'unblock':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isOwner && !issupre && !info.key.fromMe) return  reply(enviar.msg.ownerB)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./lib/usuarios/banned.json', JSON.stringify(ban))
susp = `❎@${mentioned[0].split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot❎`
mentions(`${susp}`, mentioned, true)   
break

case 'blocklist':
ayumi.updatePresence(from, Presence.composing) 
jrc = 'ESTA É A LISTA DE NÚMEROS BLOQUEADOS :\n'
for (let benn of ban) {
jrc += `~> @${benn.split('@')[0]}\n`
}
jrc += `Total : ${ban.length}`
ayumi.sendMessage(from, jrc.trim(), extendedText, {quoted: info, contextInfo: {"mentionedJid": ban}})
break

case 'acess':
if (!isOwner && !issupre && !info.key.fromMe) return reply(enviar.msg.ownerB)
teks = body.slice(7)
exec(teks, (err, stdout) => {
if (err) return ayumi.sendMessage(from, `root@ALEOFC-BOT:~ ${err}`, text, {quoted: info})
if (stdout) {
ayumi.sendMessage(from, stdout, text)
}
})
break

case 'bangp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isOwner && !issupre && !info.key.fromMe) return reply(enviar.msg.ownerB)
if (isBanchat) return reply(`Este grupo ja está banido`)
bancht.push(from)
fs.writeFileSync('./lib/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo banido com sucesso`)
break

case 'unbangp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isOwner && !issupre && !info.key.fromMe) return reply(enviar.msg.ownerB)
let cur = bancht.indexOf(from)
bancht.splice(cur, 1)
fs.writeFileSync('./lib/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo desbanido...`)
break

case 'limitec':
if(!isOwner) return reply(enviar.msg.ownerB)
if (args.length < 1) return
if (!setTimeout && !info.key.fromMe) return reply(enviar.msg.ownerB)
limitefl = args.join(" ")
limitefll.limitefl = limitefl
fs.writeFileSync('./lib/usuarios/flood.json', JSON.stringify(limitefll, null, '\t'))
reply(`${limitefl} foi adicionado como limite de antiflood `)
break

case 'execut':
if(!isOwner && !issupre) return
try{
return eval(`(async() => { ${args.join(' ')}})()`)
}catch (e) {
reply(`${e}`)
}
break

case 'exec':
if(!isOwner && !issupre) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
break

case 'ping':
buttons = [{buttonId:`#bateria`,buttonText:{displayText: 'Bateria'},type:1}]
const timestamp = speed();
const latensi = speed() - timestamp
uptime = process.uptime()
               buttonsMessage = {
               contentText: `*╭─── ❬🦊 P I N G 🦊❭*
 *│➢ Velocidade: ${latensi.toFixed(4)} SEGUNDOS
 *│➢ Ativo por: *${kyun(uptime)}*
*╰───々*`,
               footerText: `${pushname}`,
               buttons: buttons,
               headerType: 1
}
          prep = await ayumi.prepareMessageFromContent(from,{buttonsMessage},{quoted: selo})
               ayumi.relayWAMessage(prep)
               break 

case 'gtts':
if (args.length < 1) return reply('sem linguagem sem audio')
const gtts = require('./lib/gtts')(args[0])
if (args.length < 2) return ayumi.sendMessage(from, 'Falta colocar o código do idioma!', text, {quoted: info})
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
dtt.length > 250
? reply('Para reduzir spam o máximo de letras permitidas são 130!')
: gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buffer = fs.readFileSync(rano)
if (err) return reply('Falha')
ayumi.sendMessage(from, buffer, audio, {quoted: info, ptt:true})
fs.unlinkSync(rano)
})
})
break

case 'playlist':

        if (isBanned) return reply(yag.ban())

mortandela(from)

datuA = await fetchJson(`https://hardianto-chan.herokuapp.com/api/yt/search?query=${args.join(" ")}&apikey=hardianto`)

datuB = datuA.result

datuC = `${datuA.result[0].url}`

datuD = []

datuB.splice(10, datuB.length)

datuB.forEach((datuB, i) =>{

datuD.push({

"rows": [

 {

description: `Titulo: ${datuB.title}`,

"title": " ",

"rowId": `#play ${datuB.url}`

},

], title: i+1 })

})

datuK = ayumi.prepareMessageFromContent(from, {

"listMessage":{

"title": "```Play Yt```",

"description": `Resultados para: ${args.join(" ")}`,

"buttonText": "Escolha sua música🎧",

"listType": "SINGLE_SELECT",

"sections": datuD}}, {}) 

ayumi.relayWAMessage(datuK, {waitForAck: false, quoted: selo})

 break

case 'tagme':
const tagme = {
text: `@${sender.split("@")[0]} ✔️`, contextInfo: {mentionedJid: [sender]}
}
await ayumi.sendMessage(from, tagme, text)
break

case 'blockcmd':
if(!isOwner) return reply(enviar.msg.ownerB)
if(budy.includes("blockcmd blockcmd") || (budy.includes("blockcmd  blockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de bloquear comando?`)
if(getComandoBlock(from).includes(args[0]))return reply('Este comando já está blockeado')
addComandos(from, args[0])
reply(`O comando ${args[0]} Foi blockeado`)
break

case 'unblockcmd':
if(!isOwner) return reply(enviar.msg.ownerB) 
if(budy.includes("blockcmd unblockcmd") || (budy.includes("blockcmd  unblockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de desbloquear comando?`)  
if(!getComandoBlock(from).includes(args[0]))return reply('Este comando já está  desbloqueado')
deleteComandos(from, args[0])
reply(`O comando ${args[0]} Foi desblockeado`)
break

case 'listacomandos':
tkks = '╭─*「 *COMANDOS BLOCK* 」\n'
for (let V of getComandoBlock(from)) {
tkks += `│+  ${V}\n`
}
tkks += `│+ Total : ${getComandoBlock(from).length}\n╰──────*「 *${NomeDoBot}* 」*────`
await ayumi.sendMessage(from, tkks.trim(), extendedText, {quoted: info})
break

case 'avalie':
const avalie = body.slice(8)
if (args.length <= 1) return reply(`Exemplo: ${prefix}avalie "Bot muito bom, parabéns. "`)
if (args.length >= 400) return ayumi.sendMessage(from, 'Máximo 400 caracteres', msgType.text, {quoted: info})
var nomor = info.participant
tdptls = `[ Avaliação ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${avalie}`
var options = {
text: tdptls,
contextInfo: {
mentionedJid: [sender]
},
}
await ayumi.sendMessage(`${setting.numerodono}@s.whatsapp.net`, options, text, {quoted: info})
reply("mensagem enviada ao meu dono, obrigado pela avaliação, iremos melhorar a cada dia.")
break

case 'bug':
const bug = body.slice(5)
if (args.length <= 1) return reply(`Exemplo: ${prefix}bug "ocorreu um erro no comando sticker"`)
if (args.length >= 800) return ayumi.sendMessage(from, 'Máximo 800 caracteres', msgType.text, {quoted: info})
var nomor = info.participant
teks1 = `[ Problema ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\nErro ou bug: ${bug}`
var options = {
text: teks1,
contextInfo: {
mentionedJid: [sender]
},
}
await ayumi.sendMessage(`${setting.numerodono}@s.whatsapp.net`, options, text, {quoted: info})
reply("mensagem enviada ao meu dono, se enviar muitas mensagens repetida por zoueiras, você sera banido de utilizar os comandos do bot.")
break

case 'sugestão':
case 'sugestao':
const sugestao = body.slice(10)
if (args.length <= 1) return reply(`Exemplo: ${prefix}sugestao "Opa, crie um comando tal, que ele funcione de tal maneira, isso será muito bom, não só pra mim, mas pra vários fazer isso.."`)
if (args.length >= 800) return ayumi.sendMessage(from, 'Máximo 800 caracteres', msgType.text, {quoted: info})
var nomor = info.participant
sug = `[ Sugestões ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${sugestao}`
var options = {
text: sug,
contextInfo: {
mentionedJid: [sender]
},
}
await ayumi.sendMessage(`${setting.numerodono}@s.whatsapp.net`, options, text, {quoted: info})
reply("mensagem enviada ao meu dono, obrigado pela sugestão, tentar ouvir o máximo possível de sugestões.")
break

//==========(BAIXAR/PESQUISAS)==========\\

case 'mediafire':
if (args.length < 1) return reply('Digite o link do arquivo que deseja buscar no Mediafire')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Link invalido')
mortandela(from)
teks = args.join(' ')
const resm = await mediafireDl(teks)
result = `*「  MEDIAFIRE DOWNLOAD  」*

*Nome :* ${resm[0].nama}
*Tamanho :* ${resm[0].size}
*Link :* ${resm[0].link}`
reply(result)
sendFileFromUrl(resm[0].link, document, {mimetype: resm[0].mime, filename: resm[0].nama, quoted: info})
break

case 'face':
case 'facemp4':  
linkaq = args.join(" ")
mortandela(from)
face = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/snapsave?url=${linkaq}&apikey=${dapuhykey}`)
if(face.error) return reply('Error!!')
getbf = await getBuffer(face.result.sd)
ayumi.sendMessage(from, getbf, video, {quoted:info, mimetype: 'video/mp4'})
break

case 'pinterest': 
if(!q) return reply(`Digite o nome da imagem que vc quer buscar\nExemplo: ${prefix + command} azul`)
mortandela(from)
pin = await hx.pinterest(q)
ac = pin[Math.floor(Math.random() * pin.length)]
buffer = await getBuffer(ac)
await ayumi.sendMessage(from, buffer, image, {quoted: info, thumbnail: null})
break

case 'gimage':
case 'googleimage':
case 'img':
if (args.length < 1) return reply('O que você deseja procurar?')
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
mortandela(from)
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: info, caption: `*Resultados da pesquisa de : * ${teks}`})
}
}
await limitAdd(sender)
break

case 'imgpralink': case 'tourl': 
const imgbbkey = imgbbb[Math.floor(Math.random() * imgbbb.length)] 
var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
var jnckk = await  ayumi.downloadAndSaveMediaMessage(encmedia)
var imgbb = require('imgbb-uploader')
imgbb(`${imgbbkey}`, jnckk)
.then(data => {
var caps = `╭─「 IMAGEM PARA LINK 」\n│\n│• ID : ${data.id}\n│• Tipo : ${data.image.mime}\n│• Extensão : ${data.image.extension}\n│\n│• LINK : ${data.display_url}\n╰─────────────────────`
ibb = fs.readFileSync(jnckk)
ayumi.sendMessage(from, ibb, image, {quoted: info, caption: caps})
})
.catch(err => {
throw err 
})
await limitAdd(sender)
break

case 'videourl':
case 'videopralink':
case 'gerarlink':  
if ((isMedia && !dev.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
mortandela(from)
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
owgi = await ayumi.downloadMediaMessage(boij)
res = await uploadd(owgi)
reply(res)
} else {
reply(`Mande uma imagem/vídeo com a legenda ${prefix + command}`)
}
break

case 'google':
if (!q) return reply(enviar.wrongFormat)
ss = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=966a90a8125c4862b276f23068b56fd6&url=https://google.com/search?q=${q}`)
mortandela(from)
if(q == undefined || q == ' ') return reply(`*Resultado da pesquisa : ${q}*`)
googleIt({ 'query': q }).then(results => {
vars = `_*Resultado da pesquisa : ${q}*_\n`
for (let i = 0; i < results.length; i++) {
vars +=  `\n═════════════════\n\n*Título:* ${results[i].title}\n\n*Descrição:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
}
ayumi.sendMessage(from, ss, image, {caption: vars, quoted : info})
}).catch(e => {
console.log(e)
reply(`${e}`)
})
break
case 'ytsrc':
case 'ytsrc':
if (args.length < 1) return reply('Cade o txt?')
const srch = args[0];
try {
var aramas = await yts(srch);
} catch {
return await ayumi.sendMessage(from, 'Error!', MessageType.text, dload)
}
aramat = aramas.all 
var tbuff = await getBuffer(aramat[0].image)
var ytresult = '';
ytresult += '「 *YOUTUBE* 」'
ytresult += '\n________________________\n\n'
aramas.all.map((video) => {
ytresult += '❏ Titulo: ' + video.title + '\n'
ytresult += '❏ Link: ' + video.url + '\n________________________\n\n'
});
ytresult += `${setting.NomeDoBot}`
await ayumi.sendMessage(from, tbuff, image, {thumbnail: fs.readFileSync('./media/ayumi.jpg'), quoted: info, caption: ytresult})
break 

case 'ytmp4':
if (!q) return reply('Use o comando juntamente com um link do youtube')
mortandela(from)
ase = await y2mateV(q).catch(e => {
reply('Erro,tente novamente😔')
})
vidionye = await getBuffer(ase[0].link)
await ayumi.sendMessage(from, vidionye, video, {mimetype: 'video/mp4', filename: `${ase[0].output}`, quoted: info})
break

case 'ytmp3':
if (args.length === 0) return reply(`Use assim :  *${prefix + command} [linkYt]*`)
try {
mortandela(from)
yta(args[0])
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesizeF) >= 30000) return sendMediaURL(from, thumb, `*Dados obtidos com sucesso!*\n\n*Titulo* : ${title}\n*Extração* : mp3\n*Tamanho* : ${filesizeF}\n*Link* : ${a.data}\n\n_Para tamanhos superiores a 30 MB, é apresentado na forma de um link_`)
captions = `*「 YOUTUBE MP3 」*\n\n*Titulo* : ${title}\n*Ext* : mp3\n*Tamanho* : ${filesizeF}\n\n_Enviando o áudio..._`
sendMediaURL(from, thumb, captions)
sendMediaURL(from, dl_link).catch(() => reply(enviar.error.api))
})
})
} catch (err) {
reply(enviar.error.api)
}
await limitAdd(sender)
break 

case 'jooxplay':
if (args.length == 0) return reply(`Exemplo: ${prefix + command} Musica Sad`)
query = args.join(" ")
mortandela(from)
get_result = await fetchJson(`https://pencarikode.xyz/download/joox?search=${query}&apikey=pais`)
get_result = get_result.result
ini_mn1k = `Titulo : ${get_result.judul}\n`
ini_mn1k += `Duração : ${get_result.duration}\n`
thumbnail = await getBuffer(get_result.img_url)
await ayumi.sendMessage(from, thumbnail, image, {quoted: info, caption: ini_mn1k })
get_audio = await getBuffer(get_result.mp3_url)
await ayumi.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.judul}.mp3`, quoted: info, thumbnail: null})
break

case 'playstore':
if (args.length == 0) return reply(`Exemplo: ${prefix + command} telegram`)
query = args.join(" ")
get_result = await fetchJson(`https://api-gdr2.herokuapp.com/api/googleplay?q=${query}`)
get_result = get_result.result
ini_mn1k = 'Play Store Pesquisa : \n'
for (var x of get_result) {
buffer = await getBuffer(`${x.icon}`)  
ini_mn1k += `📄 Titulo: ${x.title}\n`
ini_mn1k += `🏦 Empresa: ${x.developerId}\n`
ini_mn1k += `📤 Id da empresa: ${x.appId}\n`
ini_mn1k += `🤵🏻 Criador: ${x.developer}\n`
ini_mn1k += `📓 Resumo: ${x.summary}\n`
ini_mn1k += `🌀 Link: ${x.url}\n`
ini_mn1k += `⛩️ Tipo: ${x.priceText}\n`
ini_mn1k += `📊 Pontuação: ${x.scoreText}\n`
ini_mn1k += `🔎 Total de pontuação: ${x.score}\n`
ini_mn1k += `💵 Preço: ${x.price}\n\n`
}
await ayumi.sendMessage(from, buffer, image, {quoted: info, thumbnail:null, caption: `${ini_mn1k}`})
break

case 'igstalk':
if(args.length < 1) return reply('Cadê o nome?')
usur = args.join(" ")
teste = await fetchJson(`https://pencarikode.xyz/stalk/instagram?username=${usur}&apikey=pais`)
teste = teste.result.user
corno = `Nome : ${teste.username}\n`
corno += `PK : ${teste.pk}\n`
testebf = await getBuffer(`${teste.profile_pic_url}`)
await ayumi.sendMessage(from, testebf, image, {quoted:info, caption: `${corno}`})
break

case 'celular':
if (!q) return reply(`Qual celular você está procurando?`)
teks = args.join(' ')
anu = await fetchJson(`https://api-yogipw.herokuapp.com/api/search/gsmarena?query=${q}`)
const busca_celular = 
`
📝 Titulo: ${anu.judul}
❗Última atualização: ${anu.rilis}
📱 Tamanho do celular: ${anu.ukuran}
⚡ Tipo: ${anu.type}
🗃️ Armazenamento: ${anu.storage}
📴 Tela: ${anu.display}
📳 Polegada: ${anu.inchi}
🔰 Resolução da câmera: ${anu.pixel}
📲 Resolução do video: ${anu.videoPixel}
💭 Ram do celular: ${anu.ram}
👤 Hardware do celular: ${anu.chipset}
⚠️ Bateria: ${anu.batrai}
🔋 Tipo da bateria: ${anu.merek_batre}`
 wew = fs.readFileSync('./media/ayumi.jpg')
await ayumi.sendMessage(from, wew, image, {quoted: info, thumbnail:null, caption: `${busca_celular}`})
break

case '007':  
				 if (args.length < 1) return reply('*qual o nome do video parça?*')
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				ayumi.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:info, caption: '...'})
				returnreply('Se não funcionar ou demorar pra enviar a musica use ${prefix}play2')
					break
case '006':   
				play = body.slice(5)
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)		
				lagu = await getBuffer(anu.result.url_audio)
				ayumi.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: info})
				return reply('Se não funcionar ou demorar pra enviar a musica use ${prefix}play2')
				            
				break

case 'play':
				play = body.slice(5)
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				buffer = await getBuffer(anu.result.thumbnail)
        sendButImage(
          from,
          `opa ${pushname}`,
          `Selecione um formato abaixo`,
          buffer,
          [
            {
              buttonId: `#007 ${q}`,
              buttonText: {
                displayText: `Video`,
              },
              type: 1,
            },
            {
              buttonId:`#006 ${q}`,
              buttonText: {
                displayText: `Audio`,
              },
              type: 1,
            },
          ]
        );
        break

case 'playdoc':                 
if (args.length === 0) return reply(`Use assim *${prefix + command}* _O título da música a ser pesquisada_`)
const playp = await axios.get(`https://bx-hunter.herokuapp.com/api/yt/search?query=${body.slice(10)}&apikey=Ikyy69`)
const mulaikahh = playp.data.result[0].url
try {
mortandela(from)
 yta(mulaikah)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `❏ *PLAYmp3*\n\n❏ *Titúlo* : ${title}\n❏ *Ext* : MP3\n*Tamanho* : ${filesizeF}\n*Link* : ${a.data}\n\n_Desculpe, a duração excede o limite máximo, por favor clique no link acima_`)
sendFileFromUrl(dl_link, document, {mimetype: 'audio/mp3', filename: `${title}.mp3`, quoted: info,thumbnail: dfrply, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:mulaikah}}}).catch(() => reply(enviar.error.api))
})
})
} catch (err) {
reply(enviar.error.api)
}              
break

case 'play2':  
play2 = args.join(" ")
anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play2}&apikey=AriaGanzTzy`)
if (anu.error) return reply(anu.error) 
ayumi.sendMessage(from, 'Enviando sua música, aguarde 🎬',MessageType.text, {quoted: info} )
infomp3 = `*Título:* ${anu.result.title}\n*Fonte:* ${anu.result.source}\n*Tamanho:* ${anu.result.size}`
buffer = await getBuffer(anu.result.thumbnail) 
lagu = await getBuffer(anu.result.url_audio)
ayumi.sendMessage(from, buffer, image, {quoted: info, caption: infomp3})
ayumi.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: info, thumbnail: null})
break

case 'play3':
if (args.length < 1) return reply(`Exemplo : ${prefix}play João e maria chico buarque`)
mortandela(from) 
apykeybysayo = 'akame'
argp = args.join(" ")
anu = await fetchJson(`https://akamer.herokuapp.com/api/yt/playmp3?query=${argp}&apikey=${apykeybysayo}`)
if (anu.error) return reply(anu.error)
infomp3 = `❗MUSÍCA ENCONTRADA\n[❗] enviando sua música aguarde..`				
buffer = await getBuffer(anu.result.thumb)
ayumi.sendMessage(from, buffer, image, {quoted: info, thumbnail: null})					
msc = await getBuffer(anu.result.url)				
ayumi.sendMessage(from, msc, audio, {mimetype: 'audio/mp4', quoted: info})
break

case 'play4': 
if (args.length < 1) return reply(`Exemplo : ${prefix + comando} Plutão`)	
testeki = args.join(" ")
mortandela(from)
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/yt/playmp3?query=${testeki}&apikey=apiteam`)
if (anu.error) return reply(anu.error) 
lagu = await getBuffer(anu.url)
buffer = await getBuffer(anu.thumb)
testekkzu = `💎 Título: ${anu.titulo}\n👾Canal: ${anu.canal}\n📥 Views: ${anu.views}\n📝 Data: ${anu.data}`
ayumi.sendMessage(from, buffer, image, {quoted: info, thumbnail:null, caption: `${testekkzu}`})		
ayumi.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: info})
break

case 'play5':  
if (args.length < 1) return reply('Qual o nome da música?')
play = args.join(" ")
mortandela(from)
play_4 = await fetchJson(`https://api-gdr2.herokuapp.com/api/ytplay?q=${play}`)
buffer = await getBuffer(play_4.result.thumb)
lagu = await getBuffer(play_4.result.url)
ayumi.sendMessage(from, buffer, image, {quoted: info, thumbnail: null, caption: `${play_4.result.title}`})
ayumi.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: info})
break

case 'play6': 
if (args.length < 2) return reply(`Exemplo : ${prefix + command} música sad, tem que conter 2 palavra `)	
testeki = args.join(" ")
mortandela(from)
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/social/play/audio?video=${testeki}`)
if (anu.error) return reply(anu.error) 
lagu = await getBuffer(anu.Link_De_Download)
buffer = await getBuffer(anu.Imagem_Do_Video)
testekkzu = `💎 Título: ${anu.Titulo_Encontrado}\n👾Tamanho: ${anu.Tamanho_Do_Video}\n📥 Duração: ${anu.Duracao_Do_Video}\n📝 Link: ${anu.Link_Do_Video}`
ayumi.sendMessage(from, buffer, image, {quoted: info, thumbnail:null, caption: `${testekkzu}`})		
ayumi.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: info})
break

case 'play7':
try{
if (!q) return reply(`Exemplo : ${prefix + command} musica`)
reply(`Espere estou a procurar sua musica🎧`)
res = await fetchJson(`https://api-gdr2.herokuapp.com/api/ytplay?q=${q}`)
thumbnfo = `*Resultado Encontrado*
               
📜 Título : ${res.result.title}
🌐 Data : ${res.result.published}
🎞️ Views : ${res.result.views}
⚖️ Duração : ${res.duration}
🎥 Video Yt : ${res.url}`

buttons = [{buttonId:`${prefix}playmp4 ${res.urlyt}`,buttonText:{displayText:'🎥VIDEO'},type:1},{buttonId:`${prefix}mp3 ${res.result.url}`,buttonText:{displayText:'🎵AUDIO'},type:1}]

imageMessage = (await ayumi.prepareMessageMedia({url: res.result.thumb},'imageMessage',{thumbnail: fs.readFileSync('./media/ayumi.jpg')})).imageMessage

buttonsMessage = {
contentText: thumbnfo,
footerText:'```ayumi bot```',
imageMessage,
buttons,
headerType:4
}
inibut = await ayumi.prepareMessageFromContent(from,{buttonsMessage},{})
ayumi.relayWAMessage(inibut)
}catch (e){
reply(`desculpe mas não achei eua musica`)
console.log(e)
}
break

case 'mp3':
if(!q) return reply('?')
mortandela(from)
res = await getBuffer(`${q}`).catch(e => {
reply('_[ ! ] Erro [ ! ]_')
})
ayumi.sendMessage(from, res, audio,{mimetype: 'audio/mp4',quoted:info, thumbnail: null})
break

case 'playmp4':
addFilter(from)
if (args.length === 0) return reply(`Use assim : *${prefix + command}* _O título da música_`) 
const uangsaku = Math.floor(Math.random() * 1) + 0.3
mortandela(from)
aramas = await yts(q);
aramat = aramas.all 
mulaikah = aramat[0].url      
console.log(color('[YT PLAY VÍDEO]', 'magenta'), color(`PROCURANDO O VÍDEO NO YT`, 'yellow'))       
try {
ytv(mulaikah)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*「 REPRODUZIR VÍDEOS 」*\n\n*Titulo* : ${title}\n*Extração* : MP3\n*Tamanho do arquivo* : ${filesizeF}\n*Link* : ${a.data}\n\n_Aguarde o envio do arquivo; isso pode levar alguns minutos_`)
const captions = `*「 REPRODUZIR VÍDEOS 」*\n\n*Titulo* : ${title}\n*Extração* : MP4\n*Tamanho* : ${filesizeF}\n*Link para dowload* : ${a.data}\n\n_Aguarde o envio do arquivo; isso pode levar alguns minutos_`
sendMediaURL(from, thumb, captions)
await sendMediaURL(from, dl_link).catch(() => reply('error'))
})                
})
} catch (err) {
reply(enviar.error.api)
}
await limitAdd(sender)
break 

case 'playmp42':
mortandela(from) 
if (args.length == 0) return reply(`Exemplo: ${prefix + command} Musica Sad`)
query = args.join(" ")
get_resullt = await fetchJson(`https://akamer.herokuapp.com/api/yt/playmp4?query=${query}&apikey=akame`)
get_result = get_resullt.result
get_video = await getBuffer(get_result.url)
ayumi.sendMessage(from, get_video, video, {mimetype: Mimetype.mp4, filename: `${get_result.title}.mp4`, quoted: info, thumbnail: null})
break

//============(CASE-BEM-VINDO❬ 🏓 ❭\\

case 'bemvindo':
case 'welcome':
if (!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.ownerB)
if (args.length < 1) return reply('1 pra ligar, 0 pra desligar')
if (Number(args[0]) === 1) {
if (isWelkom) return reply('Já esta ativo.')
welkom.push(from)
fs.writeFileSync('./lib/grupos/welkom.json', JSON.stringify(welkom))
reply('Ativou com sucesso o recurso de boas-vindas neste grupo 😉️')
} else if (Number(args[0]) === 0) {
if (!isWelkom) return reply('Já esta Desativado!!')
welkom.splice(from, 1)
fs.writeFileSync('./lib/grupos/welkom.json', JSON.stringify(welkom))
reply('Desativou com sucesso o recurso de boas-vindas neste grupo 😡️')
} else {
reply('1 para ativar, 0 para desativar, lerdão vc em KAKKKK')
}
break


//=====================================\\



//=================(ANTS)=================\\

case 'antifake':
try {
if (!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.ownerB)
if (args.length < 1) return reply(' 1 Para ativar/ 0 para desativar')
if (Number(args[0]) === 1) {
if (isAntifake) return reply('Já está ativo.')
antifake.push(from)
fs.writeFileSync('./lib/ants/antifake.json', JSON.stringify(antifake))
reply('📝 Ativou com sucesso o recurso de antifake neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntifake) return reply('Já está Desativado.')  
antifake.splice(from, 1)
fs.writeFileSync('./lib/ants/antifake.json', JSON.stringify(antifake))
reply('📝 Desativou com sucesso o recurso de antifake neste grupo ‼️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antiloc':
if (!isGroup) return reply(` SOMENTE EM GRUPOS`)
if (!isBotGroupAdmins) return reply(` O BOT PRECISA SER ADMIN`)
try {														 
if (args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if (Number(args[0]) === 1) {
if(Antiloc) return reply('Já está Ativo.')
antiloc.push(from)
fs.writeFileSync('./lib/ants/antiloc.json', JSON.stringify(antiloc))
reply('Ativou com sucesso o recurso de anti loc neste grupo✔️')
} else if (Number(args[0]) === 0) {
if(!Antiloc) return reply('Já está Desativado.')
antiloc.splice(from, 1)
fs.writeFileSync('./lib/ants/antiloc.json', JSON.stringify(antiloc))
rpely('Desativou com sucesso o recurso de anti loc neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antidocumento':
if (!isGroup) return reply(` SOMENTE EM GRUPOS`)
if (!isBotGroupAdmins) return reply(` O BOT PRECISA SER ADMIN`)
try {														 
if (args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if (Number(args[0]) === 1) {
antidoc.push(from)
fs.writeFileSync('./lib/ants/antidoc.json', JSON.stringify(antidoc))
reply('Ativou com sucesso o recurso de anti documento neste grupo✔️')
} else if (Number(args[0]) === 0) {
antidoc.splice(from, 1)
fs.writeFileSync('./lib/ants/antidoc.json', JSON.stringify(antidoc))
reply('Desativou com sucesso o recurso de antidocumento neste grupo✔️')
 } else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antiimg':
if (!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.ownerB)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiImg) return reply('Já Esta ativo')
antiimg.push(from)
fs.writeFileSync('./lib/ants/antiimg.json', JSON.stringify(antiimg))
reply('Ativou com sucesso o recurso de anti imagem neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiImg) return reply('Ja esta Desativado.')
antiimg.splice(from, 1)
fs.writeFileSync('./lib/ants/antiimg.json', JSON.stringify(antiimg))
reply('Desativou com sucesso o recurso de anti imagem neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antivideo':
if (!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.ownerB)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiVid) return reply('Ja esta ativo')
antivid.push(from)
fs.writeFileSync('./lib/ants/antivideo.json', JSON.stringify(antivid))
reply('Ativou com sucesso o recurso de anti video neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiVid) return reply('Ja esta Desativado')
antivid.splice(from, 1)
fs.writeFileSync('./lib/ants/antivideo.json', JSON.stringify(antivid))
reply('Desativou com sucesso o recurso de anti video neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiaudio':
if (!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.ownerB)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiAudio) return reply('Ja esta ativo')
antiaudio.push(from)
fs.writeFileSync('./lib/ants/antiaudio.json', JSON.stringify(antiaudio))
reply('Ativou com sucesso o recurso de anti audio neste grupo✔️')
} else if (Number(args[0]) === 0) {
antiaudio.splice(from, 1)
fs.writeFileSync('./lib/ants/antiaudio.json', JSON.stringify(antiaudio))
reply('Desativou com sucesso o recurso de anti audio neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'limitecaracteres':
case 'limiteflood':  
if (!isGroup) return reply(enviar.msg.adm)
if(!isOwner) return reply(enviar.msg.ownerB)
if (!isBotGroupAdmins) return reply(enviar. msg.Badmin)
if (args.length < 1) return reply(`Digite ${prefix + command} 1 para ativar`)
if (Number(args[0]) === 1) {
if (isAntiFlood) return reply(`🌀 O recurso limite de caracteres até ${limitefl} já está ativo no grupo 🌀`)
antiflood.push(from)
fs.writeFileSync('./lib/usuarios/antiflood.json', JSON.stringify(antiflood))
reply(`✔️ O recurso limite de caracteres ${limitefl} foi ativado nesse grupo📝`)
} else if (Number(args[0]) === 0) {
 if (!isAntiFlood) return reply('✔️ O recurso limite de caracteres não está ativado no grupo 📝')
let position = false
Object.keys(antiflood).forEach((i) => {
if (antiflood[i] === from) {
position = i
}
})
if (position !== false) {
antiflood.splice(position, 1)
fs.writeFileSync('./lib/usuarios/antiflood.json', JSON.stringify(antiflood))
}
reply('O recurso limite de caracteres foi desativado nesse grupo ✔️')
} else {
reply(`Digite ${prefix + command} 1 para ativar, 0 para desativar o recurso`)
}
break

case 'antilink':
if (!isGroup) return reply('Só em grupo.')
if (!isGroupAdmins) return reply('Você precisa ser adm')
if (args.length < 1) return reply('Digite 1 para ativar\nDigite 0 para desativar')
if (Number(args[0]) === 1) {
if (isAntiLink) return reply('*RECURSOS ANTILINK ESTÁ ATIVO*')
antilink.push(from)
fs.writeFileSync('./lib/ants/antilink.json', JSON.stringify(antilink))
reply('*Antilink ativado com sucesso ✓*')
await ayumi.sendMessage(from, `*Atenção, antilink esta ativo, qualquer um que nao for adm mandar link, sera expulso do gp imediatamente.*`, text)
} else if (Number(args[0]) === 0) {
if (!isAntiLink) return reply('*Já está desativado!!*')
antilink.splice(from)
fs.writeFileSync('./lib/ants/antilink.json', JSON.stringify(antilink))
reply('*Desativado com sucesso anti-link neste grupo ✔️*')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antipalavrão':
case 'antipalavrao':  
if (!isGroup) return reply(`[❗] SOMENTE EM GRUPOS`)
if (!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA SER ADMIN`)
if (args.length < 1) return reply(`[❗] 1 / 0, Exemplo ${prefix + command} 1`)
if (Number(args[0]) === 1) {
if (isPalavrão) return reply('*Já esta ativado...*')
palavrão.push(from)
fs.writeFileSync('./lib/grupos/palavrão.json', JSON.stringify(palavrão))
reply(`[❗] anti palavrão ativado`)
} else if (Number(args[0]) === 0) {
if (!isPalavrão) return reply('*Já esta Desativado...*')  
palavrão.splice(from, 1)
fs.writeFileSync('./lib/grupos/palavrão.json', JSON.stringify(palavrão))
reply(`[❗] anti palavrão desativado...`)
} else {
reply(`[❗] 1 / 0, Exemplo ${prefix + command} 0`)
}
await limitAdd(sender)
break

case 'antilinkhard':
if (!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.ownerB)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntiLinkHard) return reply('Ja esta ativo')
antilinkhard.push(from)
fs.writeFileSync('./lib/ants/antilinkhard.json', JSON.stringify(antilinkhard))
reply('🌀 Ativou com sucesso o recurso de antilink hardcore neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAntiLinkHard) return reply('Ja esta Desativado')  
antilinkhard.splice(from, 1)
fs.writeFileSync('./lib/ants/antilinkhard.json', JSON.stringify(antilinkhard))
reply('‼️ Desativou com sucesso o recurso de antilink harcore neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break  

case 'antifake':
try {
if (!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.ownerB)
if (args.length < 1) return reply(' 1 Para ativar/ 0 para desativar')
if (Number(args[0]) === 1) {
if(isAntifake) return reply('Já está ativo. ')  
antifake.push(from)
fs.writeFileSync('./lib/ants/antifake.json', JSON.stringify(antifake))
reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
} else if (Number(args[0]) === 0) {
antifake.splice(from, 1)
fs.writeFileSync('./lib/ants/antifake.json', JSON.stringify(antifake))
if(isAntifake == 0) return reply('Já está Desativado.')
reply('Desativou com sucesso o recurso de antifake neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'vacilo':
case 'bemvindo2':  
if (!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.ownerB)
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix + command} 1 para ativar `)
if (Number(args[0]) === 1) {
if (isVacilo) return reply('❎O recurso já está ativado no grupo❎')
vacilo.push(from)
fs.writeFileSync('./lib/usuarios/vacilo.json', JSON.stringify(vacilo))
reply('✅O recurso foi ativado✅')
} else if (Number(args[0]) === 0) {
if (!isVacilo) return reply('❎O recurso não está ativado no grupo❎')
let position = false
Object.keys(vacilo).forEach((i) => {
if (vacilo[i] === from) {
position = i
}
})
if (position !== false) {
vacilo.splice(position, 1)
fs.writeFileSync('./lib/usuarios/vacilo.json', JSON.stringify(vacilo))
}
reply('❌O recurso foi desativado❌')
} else {
reply(`Digite da forma correta:\nComando: ${prefix + command} 1, para ativar e 0 para desativar`)
}
break

//==========(Sticker-Stickers)===========\\

case 'emoji':
case 'semoji':
if(!q) return reply(`Exemplo: ${prefix}emoji ☹️/whatsapp`)
emot = q.split('/')[0]
jemot = q.split('/')[1]
if(jemot == 'apple'){
idemot = 0
}
else if(jemot == 'google'){
idemot = 1
}
else if(jemot == 'samsung'){
idemot = 2
}
else if(jemot == 'microsoft'){
idemot = 3
}
else if(jemot == 'whatsapp'){
idemot = 4
}
else if(jemot == 'twitter'){
idemot = 5
}
else if(jemot == 'facebook'){
idemot = 6
}
else if(jemot == 'joypixels'){
idemot = 7
}
else if(jemot == 'openmoji'){
idemot = 8
}
else if(jemot == 'emojidex'){
idemot = 9
}
else if(jemot == 'lg'){
idemot = 10
}
else if(jemot == 'htc'){
idemot = 11
}
else if(!jemot){
idemot = 4
}
else{
return reply(`Exemplo: ${prefix}emoji ☹️/whatsapp`)
}
mortandela(from)
if(idemot == undefined) return
emoji.get(emot)
.then(emoji => {
console.log(emoji.images[idemot]);
sendStickerFromUrl(from,emoji.images[idemot].url, selo)
})
break

case 'rename':
if(!isPremium && !info.key.fromMe) return reply(enviar.msg.premium) 
if (!isQuotedSticker) return reply('Marque uma figurinha...')  
var namaPackss = q.substring(0, q.indexOf('/') - 0)
var authorPackss = q.substring(q.lastIndexOf('/') + 1)
texto = body.slice(7)
if (isDoubleByte(texto)) return reply('[ !  ] Não é permitido letras modificadas nem emojis!!')
mortandela(from)
stiker_wm = JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
dlstiker_wm = await ayumi.downloadAndSaveMediaMessage(stiker_wm)
stickerpackid = "com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2"
packname = namaPackss;
author = authorPackss;
exif321 = getRandom('.exif')
exifst = getRandom('.webp')
googlelink = ` `;
applelink = ` `;
json = {"sticker-pack-id": stickerpackid, "sticker-pack-name": packname, "sticker-pack-publisher": author, "android-app-store-link": googlelink, "ios-app-store-link": applelink}
len = JSON.stringify(json).length
f = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
aaa = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
if (len > 256) {
len = len - 256
aaa.unshift(0x01)
} else {
aaa.unshift(0x00)
}
fff = Buffer.from(aaa)
ffff = Buffer.from(JSON.stringify(json))
if (len < 16) {
len = len.toString(16)
len = "0" + len
} else {
len = len.toString(16)
}
ff = Buffer.from(len, "hex")
wm = Buffer.concat([f, ff, fff, ffff])
fs.writeFile(exif321, wm, function(err) {
if (err) return console.log(err);
exec(`webpmux -set exif ${exif321} undefined.webp -o ${exifst}`, (err) => {
if (err) return console.log(err);
ayumi.sendMessage(from, fs.readFileSync(exifst), sticker, {quoted: info})
fs.unlinkSync(exifst)
fs.unlinkSync(exif321)
fs.unlinkSync('undefined.webp')
})
});
break

case 'sc':
case 'stcirculo':
case 'circlesticker':  
const imgbbkey31 = imgbbb[Math.floor(Math.random() * imgbbb.length)]  
var imgbb = require('imgbb-uploader')
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
mortandela(from)
owgi = await ayumi.downloadAndSaveMediaMessage(ger)
fgh = await imgbb(`${imgbbkey31}`, owgi)
imgtrg = `${fgh.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-exteam.herokuapp.com/api/circle?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
ayumi.sendMessage(from, nobg, sticker, {quoted: info})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
await limitAdd(sender)
break

case 'fstiker': 
case 'fsticker':
case 'f':
await limitAdd(sender)
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
const media = await ayumi.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(enviar.stikga)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
ayumi.sendMessage(from, buffer, sticker, {quoted: info})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && info.message.videoMessage.seconds < 10 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 10) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
const media = await ayumi.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
mortandela(from) 
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(enviar.stikga)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
ayumi.sendMessage(from, buffer, sticker, {quoted: info})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Enviar imagem / vídeo / gif com legenda \n${prefix}sticker (duração do adesivo de vídeo de 1 a 9 segundos)`)
}
break 

case 'st':
case 'sticker':
case 's':
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
const media = await ayumi.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
mortandela(from)
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('bot','Bot')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
reply(enviar.stick)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
ayumi.sendMessage(from, buffer, sticker, {quoted: info})
fs.unlinkSync(rano)
})
} else if ((isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
const media = await ayumi.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('Bot', 'Ale')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
ayumi.sendMessage(from, buffer, sticker, {quoted: info})
fs.unlinkSync(rano)
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break

case 'toimg':
if (!isQuotedSticker) return reply('{ ❗ } *Marque a figurinha*')
mortandela(from)
encmedia = JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await ayumi.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('❌ Falha ao converter adesivos em imagens, não converto gifs ❌')
buffer = fs.readFileSync(ran)
ayumi.sendMessage(from, buffer, image, {quoted: info, caption: 'Está ai, filho(a) da fruta'})
fs.unlinkSync(ran)
})
break

case 'togif':
if (!isQuotedSticker) return reply('*[ ❗ ] Marque a figurinha animada!*')
if ((isMedia && !info.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
const mediaaa = await ayumi.downloadAndSaveMediaMessage(encmediaaa)
mortandela(from)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
await ayumi.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: info, caption: '✅'})
fs.unlinkSync(mediaaa)
}
break

//=============(LOGOS)=============\\
//[API-DAPUHY]\\
//(Folhas-1-6)\\
case 'folha':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
var txt = encodeURI(body.slice(7))
mortandela(from)
anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/nulis?text=${txt}&apikey=${dapuhykey}`)
await ayumi.sendMessage(from, anu, image, {quoted: info, thumbnail: null})
break	

case 'folha2':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
var txt = encodeURI(body.slice())
mortandela(from)
anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/nuliskanan?text=${txt}&apikey=${dapuhykey}`)
await ayumi.sendMessage(from, anu, image, {quoted: info, thumbnail: null})
break	

case 'folha3':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
var txt = encodeURI(body.slice())
mortandela(from)
anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/nuliskiri?text=${txt}&apikey=${dapuhykey}`)
await ayumi.sendMessage(from, anu, image, {quoted: info, thumbnail: null})
break	

case 'folha4':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
var txt = encodeURI(body.slice())
mortandela(from)
anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/foliokanan?text=${txt}&apikey=${dapuhykey}`)
await ayumi.sendMessage(from, anu, image, {quoted: info, thumbnail: null})
break	

case 'folha5':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
var txt = encodeURI(body.slice())
mortandela(from)
anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/foliokiri?text=${txt}&apikey=${dapuhykey}`)
await ayumi.sendMessage(from, anu, image, {quoted: info, thumbnail: null})
break
//========================================\\

case 'neondevil':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
sd = args.join(" ")
mortandela(from)
sad = await getBuffer(`https://dapuhy-api.herokuapp.com/api/textpro/neondevil?text=${sd}&apikey=${dapuhykey}`)
await ayumi.sendMessage(from, sad, image, {quoted: info, thumbnail: null})
break 

case 'show':
if(args.length < 2) return reply(`Exemplo: ${prefix + command} Sad/Tenso/Demais`)
txt = body.slice(6)
jro = txt.split("/")[0];
jru = txt.split("/")[1];
jrp = txt.split("/")[2];
mortandela(from)
tyd = await getBuffer(`https://dapuhy-api.herokuapp.com/api/photofunia/retrowave?text1=${jro}&text2=${jru}&text3=${jrp}&apikey=${dapuhykey}`, {method: 'get'})
await ayumi.sendMessage(from, tyd, image, {quoted: info, thumbnail: null})
break 

case 'bracelet':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
lvc = body.slice(10)
mortandela(from)
lop = await getBuffer(`https://dapuhy-api.herokuapp.com/api/photofunia/bracelet?text=${lvc}&apikey=${dapuhykey}`, {method: 'get'})
await ayumi.sendMessage(from, lop, image, {quoted: info, thumbnail: null})
break
//==========(FIM-DAPUHY-LOGOS)==========\\




//======================================\\

//==========(PLAQUINHAS-LOGOS)===========\\

case 'plaq': //by zanga 
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`)
if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
teks = body.slice(6)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
mortandela(from) //mensagem
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(3).jpeg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=19%25&text.0.size=45&text.0.color=000000&text.0.opacity=55&text.0.font.family=Crimson%20Text&text.0.font.weight=300&text.0.font.style=italic&text.0.outline.opacity=21`)
ayumi.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: selo, thumbnail: null, caption: ' *Plaquinha feita ✓* '})
break

case 'plaq2': //by zanga 
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`)
if (args.length < 1) return reply(`${prefix}plaq2 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
mortandela(from) //mensagem
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(1).jpeg?profile=Zanga%202.0&text.0.text=${teks}`)
await ayumi.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: selo, thumbnail: null, caption: ' *Plaquinha feita ✓* '})
break

case 'plaq3': //by zanga
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`)
if (args.length < 1) return reply(`${prefix}plaq3 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
mortandela(from) //mensagem
buffer = await getBuffer(`https://raptibef.sirv.com/images.jpeg?profile=Zanga%203.0&text.0.text=${teks}&text.0.outline.blur=63`)
await ayumi.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: selo, thumbnail: null, caption: ' *Plaquinha feita ✓* '})
break

case 'plaq4':
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`)  
if (args.length < 1) return reply(`${prefix}plaq7 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres') //maximo de caracteres
mortandela(from) //mensagem
buffer = await getBuffer(`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${teks}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`) //api
plaq = ` *Plaquinha feita ✓* `
await ayumi.sendMessage(from, buffer, image, {caption: plaq, quoted: selo, thumbnail: null, sendEphemeral:true})
break

case 'plaq5':
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`)  
if (args.length < 1) return reply(`${prefix}plaq10 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
mortandela(from) //mensagem
buffer = await getBuffer(`https://umethroo.sirv.com/peito1.jpg?text.0.text=${teks}&text.0.position.x=-4%25&text.0.position.y=-6%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`)
await ayumi.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: selo, thumbnail: null, caption: ' *Plaquinha feita ✓* '})
break

case 'plaq4off': //by zanga
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`)
if (args.length < 1) return reply(`${prefix}plaq4 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
mortandela(from) //mensagem
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(2).jpeg?profile=Zanga%204.0&text.0.text=${teks}`)
await ayumi.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: selo, thumbnail: null, caption: ' *Plaquinha feita ✓* '})
break

case 'placaloli':
if (!q) return reply(enviar.wrongFormat)
reply('Aguarde..')
lod = await fetchJson(`https://nekobot.xyz/api/imagegen?type=kannagen&text=${q}`)
sendStickerFromUrl(from, lod.message, enviar.success)
await limitAdd(sender)
break 

//=======================================\\

//========(HENTAIS)======\\

case 'solo':
try {

   
res = axios.get(`https://nekos.life/api/v2/img/solo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
ayumi.sendMessage(sender, buf, MessageType.image, {quoted: selo})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break 

case 'nsfwconn':
try {

   
res = axios.get(`https://waifu.pics/api/sfw/conn`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
ayumi.sendMessage(sender, buf, MessageType.image, {quoted: selo})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break 


case 'ero':

try {

   
res = axios.get(`https://nekos.life/api/v2/img/ero`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
ayumi.sendMessage(sender, buf, MessageType.image, {quoted: selo})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break 


case 'erofeet':

try {

   
res = axios.get(`https://nekos.life/api/v2/img/erofeet`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
ayumi.sendMessage(sender, buf, MessageType.image, {quoted: selo})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break 

case 'memeotakus':
try {
data = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=memes de anime`, {method: 'get'})
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
ayumi.sendMessage(sender, pok, image, {quoted: selo3, caption: `*....*`})
} catch {
reply(`....`)
}
break 

case 'bcstik':
case 'bcfig':
if (!isOwner) return reply('Quem é Você, Você não é meu dono ???')
if (!isQuotedSticker) return reply('Marque uma figurinha!!!')
bcsticker = await ayumi.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await ayumi.downloadMediaMessage(encmedia)
for (let _ of bcsticker) {
ayumi.sendMessage(_.jid, bc, sticker) 
}
reply(`Figurinha envianda para: ${totalchat.length} chats`)
}
break 

case 'spank':

try {

   
res = axios.get(`https://nekos.life/api/v2/img/spank`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
ayumi.sendMessage(sender, buf, MessageType.image, {quoted: selo})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break 


case 'feet':

try {

   
res = axios.get(`https://nekos.life/api/v2/img/feet`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
ayumi.sendMessage(sender, buf, MessageType.image, {quoted: selo})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break 


case 'classic':

try {

   
res = axios.get(`https://nekos.life/api/v2/img/classic`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
ayumi.sendMessage(sender, buf, MessageType.image, {quoted: selo})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break 


case 'holoero':

try {

   
res = axios.get(`https://nekos.life/api/v2/img/holoero`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
ayumi.sendMessage(sender, buf, MessageType.image, {quoted: selo})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break 


case 'cum':

try {

   
res = axios.get(`https://nekos.life/api/v2/img/cum_jpg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
ayumi.sendMessage(sender, buf, MessageType.image, {quoted: selo})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break 


case 'eroyuri':

try {

   
res = axios.get(`https://nekos.life/api/v2/img/eroyuri`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
ayumi.sendMessage(sender, buf, MessageType.image, {quoted: selo})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break 


case 'eron':

try {

   
res = axios.get(`https://nekos.life/api/v2/img/eron`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
ayumi.sendMessage(sender, buf, MessageType.image, {quoted: selo})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break 


case 'pwankg':

try {

   
res = axios.get(`https://nekos.life/api/v2/img/pwankg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
ayumi.sendMessage(sender, buf, MessageType.image, {quoted: selo})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break 


case 'anal':

try {

   
res = axios.get(`https://nekos.life/api/v2/img/anal`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
ayumi.sendMessage(sender, buf, MessageType.image, {quoted: selo})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break 


case 'lewd':

try {

   
res = axios.get(`https://nekos.life/api/v2/img/lewd`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
ayumi.sendMessage(sender, buf, MessageType.image, {quoted: selo})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break 


case 'lewdkemo':

try {

   
res = axios.get(`https://nekos.life/api/v2/img/lewdkemo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
ayumi.sendMessage(sender, buf, MessageType.image, {quoted: selo})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break 


case 'solog':

try {

   
res = axios.get(`https://nekos.life/api/v2/img/solog`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
ayumi.sendMessage(sender, buf, MessageType.image, {quoted: selo})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break 


case 'lewdk':

try {

   
res = axios.get(`https://nekos.life/api/v2/img/lewdk`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
ayumi.sendMessage(sender, buf, MessageType.image, {quoted: selo})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break 



case 'blowjob':

try {

   
res = axios.get(`https://nekos.life/api/v2/img/blowjob`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
ayumi.sendMessage(sender, buf, MessageType.image, {quoted: selo})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break 


case 'hentai':

try {

   
res = axios.get(`https://nekos.life/api/v2/img/hentai`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
ayumi.sendMessage(sender, buf, MessageType.image, {quoted: selo})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break 


case 'hololewd':

try {

   
res = axios.get(`https://nekos.life/api/v2/img/hololewd`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
ayumi.sendMessage(sender, buf, MessageType.image, {quoted: selo})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break 


case 'trap':

try {

   
res = axios.get(`https://nekos.life/api/v2/img/trap`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
ayumi.sendMessage(sender, buf, MessageType.image, {quoted: selo})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break 


case 'les':

try {

   
res = axios.get(`https://nekos.life/api/v2/img/les`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
ayumi.sendMessage(sender, buf, MessageType.image, {quoted: selo})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break 


case 'smallboobs':

try {

   
res = axios.get(`https://nekos.life/api/v2/img/smallboobs`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
ayumi.sendMessage(sender, buf, MessageType.image, {quoted: selo})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break 


case 'futanari':

try {

   
res = axios.get(`https://nekos.life/api/v2/img/futanari`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
ayumi.sendMessage(sender, buf, MessageType.image, {quoted: selo})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break 


case 'femdom':

try {

   
res = axios.get(`https://nekos.life/api/v2/img/femdom`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
ayumi.sendMessage(sender, buf, MessageType.image, {quoted: selo})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break 


case 'feed':

try {

   
res = axios.get(`https://nekos.life/api/v2/img/feed`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
ayumi.sendMessage(sender, buf, MessageType.image, {quoted: selo})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break 


case'erok':

try {

   
res = axios.get(`https://nekos.life/api/v2/img/erok`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
ayumi.sendMessage(sender, buf, MessageType.image, {quoted: selo})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break 


case'feetg':

try {

   
res = axios.get(`https://nekos.life/api/v2/img/feetg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
ayumi.sendMessage(sender, buf, MessageType.image, {quoted: selo})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break 


case'erokemo':

try {

   
res = axios.get(`https://nekos.life/api/v2/img/erokemo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
ayumi.sendMessage(sender, buf, MessageType.image, {quoted: selo})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break 

case'boobs':

try {

   
res = axios.get(`https://nekos.life/api/v2/img/boobs`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
ayumi.sendMessage(sender, buf, MessageType.image, {quoted: selo})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break 

case 'pussy':

try {

   
axios.get('https://nekos.life/api/v2/img/pussy_jpg').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
ayumi.sendMessage(sender, buf, MessageType.image, {quoted: selo})
})
})
} catch (e) {
e = String(e)
if (!e.includes("marker was not found")) {
reply('[❌] deu error ao enviar o hentai 😞')
} 
}
await limitAdd(sender)
break 

                                         
                

//GIFS
case 'ngif':

try {

   
res = axios.get(`https://nekos.life/api/v2/img/ngif`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
ayumi.sendMessage(sender, buf, MessageType.video, {mimetype: 'video/gif', quoted: selo})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break 

case 'smug':

try {

   
res = axios.get(`https://nekos.life/api/v2/img/smug`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
ayumi.sendMessage(sender, buf, MessageType.image, {quoted: selo})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break

//=========(API-Team-Of-LOGOS)==========\\
case 'thunder':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
vd = body.slice(9)
mortandela(from)
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/thunder?apikey=apiteam&texto=${vd}`)
buffer = await getBuffer(anu.resultado)
await ayumi.sendMessage(from, buffer, image, {quoted: info, thumbnail: null})
break

case 'thunderv2':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
teks = body.slice(11)
mortandela(from)
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/thunderv2?apikey=apiteam&texto=${teks}`)
buffer = await getBuffer(anu.resultado)
await ayumi.sendMessage(from, buffer, image, {quoted: info, thumbnail: null})
break

case 'transformer':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
tv = body.slice(13)
mortandela(from)
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/transformer?apikey=apiteam&texto=${tv}`)
buffer = await getBuffer(anu.resultado)
await ayumi.sendMessage(from, buffer, image, {quoted: info, thumbnail: null})
break

case 'grafity':
if(args.length < 2) return reply(`Exemplo: ${prefix + command} sad/demais`)
txt = body.slice(9)
teks1 = txt.split("/")[0];
teks2 = txt.split("/")[1];
mortandela(from)
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/graffiti?apikey=apiteam&texto1=${teks1}&texto2=${teks2}`)
buffer = await getBuffer(anu.resultado)
await ayumi.sendMessage(from, buffer, image, {quoted: info, thumbnail: null})
break

case 'toxic':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
teks = body.slice(7)
mortandela(from)
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/toxic?apikey=apiteam&texto=${teks}`)
buffer = await getBuffer(anu.resultado)
await ayumi.sendMessage(from, buffer, image, {quoted: info, thumbnail: null})
break

case 'demongreen':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
tdt = args.join(" ")
mortandela(from)
hgf = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/demon?apikey=apiteam&texto=${tdt}`) 
dtd = await getBuffer(hgf.resultado)
await ayumi.sendMessage(from, dtd, image, {quoted: info, thumbnail: null})
break
//========(FIM-Team-Of-LOGOS)==========\\


//❬ 🏓 ❭API-LEYSCODERS-LOGOS)========\\
case 'crossfire': 
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
jdf = args.join(" ")
mortandela(from)
jr = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/crossfire?q=${jdf}&apikey=dappakntlll`)
int = await getBuffer(jr.result.url)
await ayumi.sendMessage(from, int, image, {quoted: info, thumbnail: null})
break
//❬ 🏓 ❭FIM-LEYSCODERS-LOGOS)========\\


//========(API-DOCS-JOJO-LOGOS❬ 🏓 ❭\\
case 'logogame':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
mortandela(from)
game = await getBuffer(`http://docs-jojo.herokuapp.com/api/gaming?text=${body.slice(10)}`)
await ayumi.sendMessage(from, game, image, {quoted: info, thumbnail: null})
break

case 'neon3': 
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
txt = args.join(" ")
mortandela(from)
buffer = await getBuffer(`http://docs-jojo.herokuapp.com/api/neon_light?text=${txt}`)
await ayumi.sendMessage(from, buffer, image, {caption: 'está ai', quoted: info, thumbnail: null})
break 
//========(FIM-DOCS-JOJO-LOGOS❬ 🏓 ❭\\


//==========(API-H4CK3RS-LOGOS)==========\\
case 'goldplay':
case 'silverplay':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
txt = args.join(" ")
mortandela(from)
buffer = await getBuffer(`https://h4ck3rs404-api.herokuapp.com/api/${command}?text=${txt}&apikey=404Api`)
await ayumi.sendMessage(from, buffer, image, {caption: 'Está ai', quoted: info, thumbnail: null})
break 
//===========(FIM-H4CK3RS-LOGOS)==========\\


//========(API-PENCARIKODE-LOGOS❬ 🏓 ❭\\
case 'jokerlogo':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
jkr = body.slice(11)
mortandela(from)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/joker?text=${jkr}&apikey=pais`)
await ayumi.sendMessage(from, jr, image, {quoted: info, thumbnail: null})
break

case 'space':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad/Demais`)
txt = body.slice(7)
ytb = txt.split("/")[0];
ytbs = txt.split("/")[1];
mortandela(from)
spc = await getBuffer(`https://pencarikode.xyz/api/textpro/space-3d?text=${ytb}&text2=${ytbs}&apikey=pais`)
await ayumi.sendMessage(from, spc, image, {quoted: info, thumbnail: null})
break

case 'neve':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
ldw = body.slice(6)
mortandela(from)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/xmas?text=${ldw}&apikey=pais`)
await ayumi.sendMessage(from, jr, image, {quoted: info, thumbnail: null})
break

case 'neon':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
txt = args.join("")
mortandela(from)
buffer = await getBuffer(`https://pencarikode.xyz/api/textpro/neon-light?text=${txt}&apikey=pais`)
await ayumi.sendMessage(from, buffer, image, {quoted: info, thumbnail: null})
break 

case 'fogo':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
txt = args.join("")
mortandela(from)
buffer = await getBuffer(`https://api.zeks.me/api/flametext?apikey=apikaykay&text=${txt}`)
await ayumi.sendMessage(from, buffer, image, {caption: 'está ai', quoted: info, thumbnail: null})
break

case 'stone':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad/Demais`)
txt = body.slice(7)
jrr = txt.split("/")[0];
jrr1 = txt.split("/")[1];
mortandela(from)
buffer = await getBuffer(`https://api.chipa.xyz/api/textpro/stone-text?text=${jrr1}&text2=${jrr1}Api&apikey=7PNA67EXYNKOXKNGOAN6VXD7`)
await ayumi.sendMessage(from, buffer, image, {quoted: info, thumbnail: null})
break 

case 'break':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
txt = args.join(" ")
mortandela(from)
buffer = await getBuffer(`https://pencarikode.xyz/api/textpro/break-wall?text=${txt}&apikey=pais`)
await ayumi.sendMessage(from, buffer, image, {caption: 'está ai', quoted: info, thumbnail: null})
break 

case 'halloween':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
txt = args.join(" ")
mortandela(from)
buffer = await getBuffer(`https://pencarikode.xyz/api/textpro/halloween?text=${txt}&apikey=pais`)
await ayumi.sendMessage(from, buffer, image, {caption: 'está ai', quoted: info, thumbnail: null})
break 

case 'vidro':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
lpr = body.slice(7)
mortandela(from)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/dropwater?text=${lpr}&apikey=pais`)
await ayumi.sendMessage(from, jr, image, {quoted: info, thumbnail: null})
break 

case 'carbon': 
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
sda = body.slice(8)
mortandela(from)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/glossy-carbon?text=${sda}&apikey=pais`)
await ayumi.sendMessage(from, jr, image, {quoted: info, thumbnail: null})
break

case 'metalblue':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
dki = body.slice(10)
mortandela(from)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/glossy-blue?text=${dki}&apikey=pais`)
await ayumi.sendMessage(from, jr, image, {quoted: info, thumbnail: null})
break

case 'pink':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
erl = body.slice(6)
mortandela(from)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/holographic-3d?text=${erl}&apikey=pais`)
await ayumi.sendMessage(from, jr, image, {quoted: info, thumbnail: null})
break 

case 'colaq':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
dfk = body.slice(7)
mortandela(from)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/glue-text?text=${dfk}&apikey=pais`)
await ayumi.sendMessage(from, jr, image, {quoted: info, thumbnail: null})
break

case 'ossos':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
loi = body.slice(7)
mortandela(from)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/skeleton?text=${loi}&apikey=pais`)
await ayumi.sendMessage(from, jr, image, {quoted: info, thumbnail: null})
break

case 'blood':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
dps = body.slice(7)
mortandela(from)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/blood?text=${dps}&apikey=pais`)
await ayumi.sendMessage(from, jr, image, {quoted: info, thumbnail: null})
break

case 'areia':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
sdp = body.slice(7)
mortandela(from)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/sand-engraved?text=${sdp}&apikey=pais`)
await ayumi.sendMessage(from, jr, image, {quoted: info, thumbnail: null})
break

case 'natal':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
lkl = body.slice(7)
mortandela(from)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/christmas?text=${lkl}&apikey=pais`)
await ayumi.sendMessage(from, jr, image, {quoted: info, thumbnail: null})
break

case 'style':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
oip = body.slice(7)
mortandela(from)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/1917-style?text=${oip}&apikey=pais`)
await ayumi.sendMessage(from, jr, image, {quoted: info, thumbnail: null})
break

case 'pornhub': 
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad/Demais`)
txt = body.slice(9)
jrr = txt.split("/")[0];
jrr1 = txt.split("/")[1];
mortandela(from)
buffer = await getBuffer(`https://api.zeks.me/api/phlogo?apikey=apikaykay&text1=${jrr}text2=${jrr1}`)
await ayumi.sendMessage(from, buffer, image, {quoted: info, thumbnail: null})
break 

case 'larva':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
qui = body.slice(7)
mortandela(from)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/lava?text=${qui}&apikey=pais`)
await ayumi.sendMessage(from, jr, image, {quoted: info, thumbnail: null})
break

case 'luxury':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
lx = body.slice(8)
mortandela(from)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/luxury?text=${lx}&apikey=pais`)
await ayumi.sendMessage(from, jr, image, {quoted: info, thumbnail: null})
break

case 'steel':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad/Demais`)
txt = body.slice(7)
jrr = txt.split("/")[0];
jrr1 = txt.split("/")[1];
mortandela(from)
buffer = await getBuffer(`https://pencarikode.xyz/api/textpro/steel?text=${jrr}&text2=${jrr1}&apikey=pais`)
await ayumi.sendMessage(from, buffer, image, {quoted: info, thumbnail: null})
break
//========(FIM-PENCARIKODE-LOGOS)======\\


//============(API-GDR2-LOGOS)===========\\
case 'placa': 
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
jld = body.slice(7)
mortandela(from)
jr = await getBuffer(`https://api-gdr2.herokuapp.com/api/mudeminhaopiniao?text=${jld}`)
await ayumi.sendMessage(from, jr, image, {quoted: info, thumbnail: null})
break

case 'comentariol': 
case 'comentáriol':
txt = body.slice(13)
jrr = txt.split("/")[0];
jrr1 = txt.split("/")[1];
mortandela(from)
buffer = await getBuffer(`https://api-gdr2.herokuapp.com/api/youtubecomment?user=${jrr}&text=${jrr1}&avatar=https://i.ibb.co/BGF5ddc/8a1b991f4918.jpg`)
await ayumi.sendMessage(from, buffer, image, {quoted: info, thumbnail: null})
break 

case 'comporn':
if(args.length < 5) return reply(`Exemplo: ${prefix + command} Pedro/Sou Gay`)
txt = body.slice(9)
jrr = txt.split("/")[0];
jrr1 = txt.split("/")[1];
mortandela(from)
buffer = await getBuffer(`https://api-gdr2.herokuapp.com/api/phubtext?user=${jrr}&texto=${jrr1}&img=https://i.ibb.co/BGF5ddc/8a1b991f4918.jpg`)
await ayumi.sendMessage(from, buffer, image, {quoted: info, thumbnail: null})
break 

case 'flower':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
txt = body.slice(8)
mortandela(from)
post = await fetchJson(`https://api-gdr2.herokuapp.com/api/textmaker/alam?text=${txt}&theme=flower`)
send = await getBuffer(post.result.url)
await ayumi.sendMessage(from, send, image, {quoted: info, thumbnail: null})
break

case 'batle':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad/demais`)
txt = body.slice(7)
teks = txt.split("/")[0];
teks2 = txt.split("/")[1];
mortandela(from)
post = await fetchJson(`https://api-gdr2.herokuapp.com/api/textmaker/game?text=${teks}&text2=${teks2}&theme=battlefield`)
send = await getBuffer(post.result.url)
await ayumi.sendMessage(from, send, image, {quoted: info, thumbnail: null})
break

case 'pubg':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad/demais`)
txt = body.slice(6)
teks = txt.split("/")
teks2 = txt.split("/")
mortandela(from)
post = await fetchJson(`https://api-gdr2.herokuapp.com/api/textmaker/game?text=${teks}&text2=${teks2}&theme=pubg`)
send = await getBuffer(post.result.url)
await ayumi.sendMessage(from, send, image, {quoted: info, thumbnail: null})
break
//=============(FIM-GDR2-LOGOS)===========\\

//============(LOGOS-SEM-API)===========\\
case 'gold':
if (args.length < 1) return reply('onde está o texto?')
mortandela(from)
pGold(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'romantic':
if (args.length < 1) return reply('onde está o texto?')
mortandela(from)
pRomantic(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'wooden':
if (args.length < 1) return reply('onde está o texto?')
mortandela(from)
pWooden(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'madeira':
if (args.length < 1) return reply('onde está o texto?')
mortandela(from)
pMadeira(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'coffe2':
if (args.length < 1) return reply('onde está o texto?')
mortandela(from)
pCoffe2(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'neon2':
if (args.length < 1) return reply('onde está o texto?')
mortandela(from)
pNeon2(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case '8bit':
if (args.length < 1) return reply('onde está o texto?')
tdp = body.slice(6)
if(tdp.length < 5) return reply(`Utilize assim ${prefix + command} sad/sad`) 
p8Bit(args.join(' ').split('/')[0], args.join(' ').split('/')[1])
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'love':
if (args.length < 1) return reply('onde está o texto?')
mortandela(from)
pLoveMsg(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'coffe':
if (args.length < 1) return reply('onde está o texto?')
mortandela(from)
pCoffeCup(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'neon2':
if (args.length < 1) return reply('onde está o texto?')
mortandela(from)
pNeon2(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'copo':
if (args.length < 1) return reply('onde está o texto?')
mortandela(from)
pCup(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'america':
case 'escudo':  
if(args.length < 1) return reply(`Utilize assim ${prefix + command} sad/sad`) 
pCaptain(args.join(' ').split('/')[0], args.join(' ').split('/')[1])
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'glitch':
tdp = body.slice(8)
if(tdp.length < 5) return reply(`Utilize assim ${prefix + command} sad/sad`) 
pGlitch(args.join(' ').split('/')[0], args.join(' ').split('/')[1])
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'googlesg':
case 'googlelogo': 
tdt = args.join(" ")
if(tdt.length < 7) return reply(`Utilize assim ${prefix + command} sad/sad/sad`) 
pGooglesg(args.join(' ').split('/')[0], args.join(' ').split('/')[1], args.join(' ').split('/')[2])
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'butterfly':
if (args.length < 1) return reply('onde está o texto?')
mortandela(from)
pButterfly(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'fire':
frp = body.slice(6)
if (frp.length < 3) return reply(`onde está o texto?, Exemplo: ${prefix + command} sad`)
mortandela(from)
pFogo(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'shadow':
if (args.length < 1) return reply('onde está o texto?')
mortandela(from)
pShadow(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'grass':
if (args.length < 1) return reply('onde está o texto?')
mortandela(from)
pMsgGrass(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'narutologo':
if (args.length < 1) return reply('onde está o texto?')
mortandela(from)
pNaruto(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'metalgold':
if (args.length < 1) return reply('onde está o texto?')
mortandela(from)
pOuro(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break 

case 'cemiterio':
case 'cemitério': 
if (!q) return reply('onde está o texto?')
pSemi(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break 

case 'papel':
if (args.length < 1) return reply('onde está o texto?')
mortandela(from)
pBurnPapper(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break 

case 'lobometal':
if (args.length < 1) return reply('onde está o texto?')
mortandela(from)
pAwolfMetal(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break 

case 'harryp':
if (args.length < 1) return reply('onde está o texto?')
mortandela(from)
pHarryPotter(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break 

//========(SORTEIO-VOTAR-CASES❬ 🏓 ❭\\

case 'delvote':
case 'delvoto':  
if(!info.key.remoteJid) return
delVote(from)
reply('votação deletada com sucesso')
break

case 'votar':
case 'votacao': 
case 'votação': 
if(!isGroup) return reply(enviar.msg.group)
if(!budy.includes("/")) return reply(`Cade a /, exemplo ${prefix}votação @marca/Ele é total gay/ 1`)
if(!q) return reply('*Votação*\n\n'+ prefix+ 'votar @tag marcar / pergunta  / 1 (1 = 1 Minuto)')
if (info.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || info.message.extendedTextMessage.contextInfo == null) {
let id = info.message.extendedTextMessage.contextInfo.mentionedJid[0]
split = args.join(' ').replace('@', '').split('/')
if(!Number(split[2])) return reply('cade os minutos eim?\n\n1 = 1 Minuto')
await mentions('Vote ' +'@'+ id.split('@')[0]+' para' +'\n\n' + `voto = ✅\ndevoto = ❌\n\npergunta: ${split[1]}`,[id],true)
addVote(from,split[1],split[0],split[2],reply)
}
break

case 'infosorteio':
case 'helpsorteio':  
await ayumi.sendMessage(from, infosorteio(prefix), text, {quoted: selo})
break

case 'sorteio':
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteio de 100 R$`)
d = []
teks = `🎉Parabéns, por ganhar o sorteio ${q}:\n\n`
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🔥፝⃟  ➣ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'sorteionumero':
case 'sorteionumeros':  
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteionumero de 100 R$`)
var numerossrt = sortear[Math.floor(Math.random() * sortear.length)] 
d = []
teks =  `🎉Parabéns ao número do sortudo, por ganhar o sorteio ${q}:\n\n`
for(i = 0; i < 1; i++) {
teks += `🔥፝⃟  ➣ ${numerossrt}\n`
d.push(numerossrt)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
//======================================\\



//==========(TTPS/ATTP/TTM)============\\

case 'attp':
if (args.length == 0) return reply(`Exemplo: ${prefix + command} Sad`)
mortandela(from)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
await ayumi.sendMessage(from, buffer, sticker, { quoted: info})
break

case 'attp2':		
case 'attp3': 
case 'attp4':
case 'attp5': 
case 'attp6':  
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp Sad`)
mortandela(from)
url = await getBuffer(`http://brizas-api.herokuapp.com/ttp/${command}?apikey=brizaloka&text=${encodeURI(q)}`)
await ayumi.sendMessage(from, url, sticker, {quoted: info})
break	

case 'ttp':
if (args.length < 1) return reply(`cadê o texto mano?\nexemplo ${prefix + command} sad`)
mortandela(from)
const cor = ["f702ff","ff0202","00ff2e","efff00","00ecff","3100ff","ffb400","ff00b0","00ff95","efff00"] //CORES COLOQUE QUALQUER UMA MAS EM CODE
const fonte = ["Days%20One","Domine","Exo","Fredoka%20One","Gentium%20Basic","Gloria%20Hallelujah","Great%20Vibes","Orbitron","PT%20Serif","Pacifico"]//FONTS NÃO MEXA
sayo = cor[Math.floor(Math.random() * (cor.length))]	 				 
sayo2 = fonte[Math.floor(Math.random() * (fonte.length))]	 		
sayo = `https://huratera.sirv.com/PicsArt_0-01-10.00.42.png?profile=Example-Text&text.0.text=${encodeUrl(body.slice(5))}&text.0.outline.color=000000&text.0.outline.blur=0&text.0.outline.opacity=55&text.0.color=${sayo}&text.0.font.family=${sayo2}&text.0.background.color=ff0000` 
sendStickerFromUrl(from, sayo)
await limitAdd(sender)
break

case 'ttm':
if (args.length < 1) return reply('Cadê o  txt mano?')
but = args.join(" ")
mortandela(from)
anu = await getBuffer(`https://api-gdr2.herokuapp.com/api/ttpmaker?texto=${but}&cor=f0f&fonte=1`, {method: 'get'})
await ayumi.sendMessage(from, anu, image, {quoted: info})
break 

case 'ttm2':
if (args.length < 1) return reply('Cadê o  txt mano?')
buq = args.join(" ")
mortandela(from)
anu = await getBuffer(`https://api-gdr2.herokuapp.com/api/ttpmaker?texto=${buq}&cor=ff0&fonte=7`, {method: 'get'})
await ayumi.sendMessage(from, anu, image, {quoted: info})
break  

case 'ttm3':
if (args.length < 1) return reply('Cadê o  txt mano?')
bud = args.join(" ")
mortandela(from)
anu = await getBuffer(`https://api-gdr2.herokuapp.com/api/ttpmaker?texto=${bud}&cor=0ff&fonte=3`, {method: 'get'})
await ayumi.sendMessage(from, anu, image, {quoted: info})
break  

case 'ttm4':
if (args.length < 1) return reply('Cadê o  txt mano?')
bup = args.join(" ")
mortandela(from)
anu = await getBuffer(`https://api-gdr2.herokuapp.com/api/ttpmaker?texto=${bup}&cor=0ff&fonte=6`, {method: 'get'})
await ayumi.sendMessage(from, anu, image, {quoted: info})
break  

//======================================\\



//===(ZOUEIRAS/BRINCADEIRAS/HUMOR)===\\

case 'modonsfw':
case 'nsfw':  
if (!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.ownerB)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isNsfw) return reply('O modo nsfw já está ativo')
nsfw.push(from)
fs.writeFileSync('./lib/grupos/nsfw.json', JSON.stringify(nsfw))
reply(`\`\`\`✓Ativado com sucesso o modo nsfw +18 no grupo\`\`\` *${groupMetadata.subject}*`)
} else if (Number(args[0]) === 0) {
if (!isNsfw) return reply('O modo nsfw já está Desativado')  
nsfw.splice(from, 1)
fs.writeFileSync('./lib/grupos/nsfw.json', JSON.stringify(nsfw))
reply(`\`\`\`✓Modo Nsfw +18 desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
} else {
reply('1 para ativar, 0 para desligar')
}
break 

case 'modobrincadeira':
case 'modobrincadeiras':  
if (!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.ownerB)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isModobn) return reply('o modobrincadeira já está ativo')
modobn.push(from)
fs.writeFileSync('./lib/grupos/brincadeiras.json', JSON.stringify(modobn))
reply(`\`\`\`✓Ativado com sucesso o modobrincadeiras no grupo\`\`\` *${groupMetadata.subject}*`)
} else if (Number(args[0]) === 0) {
if (!isModobn) return reply('o modobrincadeira já está Desativado')  
modobn.splice(from, 1)
fs.writeFileSync('./lib/grupos/brincadeiras.json', JSON.stringify(modobn))
reply(`\`\`\`✓Modo brincadeiras desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
} else {
reply('1 para ativar, 0 para desligar')
}
break 

case 'fazernick': 
teks = body.slice(11)
send = await fetchJson(`http://brizas-api.herokuapp.com/gerador/fancytext?apikey=Tictac009&text=${teks}`)
teks = ` 🧙🏻‍♂️NICKS GERADOS COM SUCESSO!🧙🏻‍♂️
🍙Primeiro ${send.random_1} 
🍙Segundo ${send.random_2} 
🍙Térceiro ${send.random_3} 
🍙Quarto ${send.random_4} 
🍙Quinto ${send.random_5}
 
   👾EXTRAS👾
 👾${send.squares}
 👾${send.inverted_squares}
 👾${send.italic}
 👾${send.bold}
 👾${send.future_alien}
 👾${send.asian_1}
 👾${send.asian_2}
 👾${send.squiggle}
 👾${send.squiggle_2}
 👾${send.squiggle_3}
 👾${send.squiggle_4}
 👾${send.neon}
 
 
➣    ▉║█▐▉▉▐▐▍█║▍▉▏▍▍
➣    ▉║█▐▉▉▐▐▍█║▍▉▏▍▍
    
    © ${setting.NomeDoBot}
 `
ayumi.sendMessage(from, teks, text, {quoted: info})
break

case 'chance':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)  
ayumi.updatePresence(from, Presence.composing)
var avb = body.slice(7)
if (args.length < 1) return ayumi.sendMessage(from, `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do luuck ser gay`, text, {quoted: info})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(8)}\n\né de... ${random}%`
await ayumi.sendMessage(from, hasil, text, {quoted: info, contextInfo: {mentionedJid: [sender]}
})
break

case 'gay':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
rate = body.slice(5)
reply(' ❰ Pesquisando a sua ficha de gay : '+rate+' aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imggay}`)
zxzz = 
await ayumi.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 110)}`
feio = random
boiola = random
if (boiola < 20 ) {bo = 'hmm... você é hetero😔'} else if (boiola == 21 ) {bo = '+/- boiola'} else if (boiola == 23 ) {bo = '+/- boiola'} else if (boiola == 24 ) {bo = '+/- boiola'} else if (boiola == 25 ) {bo = '+/- boiola'} else if (boiola == 26 ) {bo = '+/- boiola'} else if (boiola == 27 ) {bo = '+/- boiola'} else if (boiola == 2 ) {bo = '+/- boiola'} else if (boiola == 29 ) {bo = '+/- boiola'} else if (boiola == 30 ) {bo = '+/- boiola'} else if (boiola == 31 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 32 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 33 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 34 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 35 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 36 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 37 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 3 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 39 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 40 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 41 ) {bo = 'você é né?😏'} else if (boiola == 42 ) {bo = 'você é né?😏'} else if (boiola == 43 ) {bo = 'você é né?😏'} else if (boiola == 44 ) {bo = 'você é né?😏'} else if (boiola == 45 ) {bo = 'você é né?😏'} else if (boiola == 46 ) {bo = 'você é né?😏'} else if (boiola == 47 ) {bo = 'você é né?😏'} else if (boiola == 4 ) {bo = 'você é né?😏'} else if (boiola == 49 ) {bo = 'você é né?😏'} else if (boiola == 50 ) {bo = 'você é ou não?🧐'} else if (boiola > 51) {bo = 'você é gay🙈'
}
await ayumi.sendMessage(from, wew, image, { quoted: info, caption: '  O quanto você é gay? \n\n 「 '+rate+' 」Você é: ❰ '+random+'% ❱ gay 🏳️‍🌈\n\n '+bo+' ', thumbnail:null})
}, 7000)
break

case 'menu':
   uptime = process.uptime()
               buttons = [{buttonId: `#buybot`,buttonText:{displayText: 'Buy bot'},type:1}, {buttonId: `#ping`,buttonText:{displayText: 'Ping'},type:1}]

               imageMsg = (await ayumi.prepareMessageMedia(fs.readFileSync(`./media/hamsil.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/hentai.jpg`)})).imageMessage

               buttonsMessage = {
               contentText: `╭────────────╮
│    ❬🦊❭  𝗜   𝗡  𝗙  𝗢     ❬🦊❭  
╰╺╺╺╺╺╺╺╺╺╺╺╺╯
╭────────────╮
│➢ 🍨 ɴɪᴄᴋ : ${pushname}
│➢ 📈 ʟᴇᴠᴇʟ : ${getLevelingLevel(sender)}
│➢ 🔋 xᴘ : ${getLevelingXp(sender)}
│➢ 🌌 ʀᴀɴᴋ : ${patt}
╰───々
╭────────────╮
│    ❬ 🔖❭  𝗕   𝗢   𝗧     ❬ 🔖❭  
╰╺╺╺╺╺╺╺╺╺╺╺╺╯
╭────────────╮
│➢ ♨️ ᴘʀᴇғɪxᴏ : #
│➢ 🌙 ᴄʀɪᴀᴅᴏʀ : *↯🔥💸𝕮𝖆𝖇𝖚𝖑𝖔𝖟𝖔𝖘¹⁵⁷🍷🔥↯*
│➢ ☄️ ᴀᴛɪᴠᴀ ᴀ : *${kyun(uptime)}*
│➢ ⏰𝙷𝙾𝚁𝙰́𝚁𝙸𝙾:${time}
╰───々

╭────────────╮
*│  ❬💫❭  G R U P O  ❬💫❭  *
╰╺╺╺╺╺╺╺╺╺╺╺╺╯
╭────────────╮
│➢ ${prefix}infopalavrão
│➢ ${prefix}infolistanegra
│➢ ${prefix}infobancarac
│➢ ${prefix}infovotação
│➢ ${prefix}infocontador
│➢ ${prefix}infosorteio
│➢ ${prefix}infobot
│➢ ${prefix}bug (questione)
│➢ ${prefix}avalie (o quao bom)
│➢ ${prefix}sugestao (dica)
│➢ ${prefix}kick [@] (pra-remover) 
│➢ ${prefix}ban (responder-mensagem)
│➢ ${prefix}promover [@] (promover a adm)
│➢ ${prefix}rebaixar [@] (rebaixar adm)
│➢ ${prefix}totag (menciona-algo)
│➢ ${prefix}grupo f/a
│➢ ${prefix}nomegp (Nome)
│➢ ${prefix}status
│➢ ${prefix}limpar (texto-invisУ­vel-gp)
│➢ ${prefix}atividades (DO-GRUPO)
│➢ ${prefix}linkgp
│➢ ${prefix}grupoinfo
│➢ ${prefix}hidetag (txt) (marcaУЇУЃo)
│➢ ${prefix}marcar (marca tds do gp)
│➢ ${prefix}anagrama 1 / 0
│➢ ${prefix}antidocumento 1 / 0  
│➢ ${prefix}antiloc 1 / 0  
│➢ ${prefix}antilink 1 / 0
│➢ ${prefix}antilinkhard 1 / 0
│➢ ${prefix}antifake 1 / 0
│➢ ${prefix}bemvindo 1 / 0
│➢ ${prefix}antiimg 1 / 0
│➢ ${prefix}antiaudio 1 / 0
│➢ ${prefix}antivideo 1 / 0
│➢ ${prefix}leveling 1 / 0  
│➢ ${prefix}simih 1 / 0
╰───々
*╭─── ❬🦊 H E N T A I S 🦊❭*
│➢ Calma adm q o bot envia no pv kkkk
│➢ ${prefix}holo
│➢ ${prefix}solo (o melhor)
│➢ ${prefix}ero
│➢ ${prefix}erofeet
│➢ ${prefix}spank
│➢ ${prefix}feet
│➢ ${prefix}classic
│➢ ${prefix}holoero
│➢ ${prefix}cum
│➢ ${prefix}eroyuri
│➢ ${prefix}eron
│➢ ${prefix}pwankg
│➢ ${prefix}anal
│➢ ${prefix}lewd
│➢ ${prefix}lewdkemo
│➢ ${prefix}solog
│➢ ${prefix}lewdk
│➢ ${prefix}blowjob
│➢ ${prefix}hentai_
│➢ ${prefix}hololewd
│➢ ${prefix}trap
│➢ ${prefix}les
│➢ ${prefix}smallboobs
│➢ ${prefix}futanari
│➢ ${prefix}femdom
│➢ ${prefix}erok
│➢ ${prefix}feetg
│➢ ${prefix}erokemo
│➢ ${prefix}boobs
│➢ ${prefix}pussy
╰───々
*╭─── ❬🦊 P E S Q U I S A 🦊❭*
│➢ ${prefix}play
│➢ ${prefix}play2
│➢ ${prefix}play3
│➢ ${prefix}play4
│➢ ${prefix}jooxplay
│➢ ${prefix}playmp4
│➢ ${prefix}ytmp4
│➢ ${prefix}ytmp3
│➢ ${prefix}facemp4
│➢ ${prefix}playstore
│➢ ${prefix}ytsearch
│➢ ${prefix}mediafire (url)
│➢ ${prefix}imgpralink
│➢ ${prefix}videopralink
╰───々
*╭─── ❬🦊 I N F O 🦊❭*
│➢ ${prefix}ping (velo)
│➢ ${prefix}bateria
│➢ ${prefix}atividade
│➢ ${prefix}rankativo
│➢ ${prefix}checkativo @marca
│➢ ${prefix}tabela (tabela-letras)
│➢ ${prefix}ranklevel (de todos)
╰───々
*╭─── ❬🦊 J O G O S 🦊❭*
│➢ ${prefix}ppt (papel-tesoura) 
│➢ ${prefix}jogodavelha @marca
│➢ ${prefix}quizanime (ADM-ATIVAR)
│➢ ${prefix}quizanimais (ADM-ATIVAR)
┊> Pra os quiz /revelarAnimal /revelarAnime
│➢ ${prefix}cassino
│➢ ${prefix}anagrama
╰───々
*╭─── ❬🦊 F I G 🦊❭*
│➢ ${prefix}fsticker
│➢ ${prefix}sticker
│➢ ${prefix}togif
│➢ ${prefix}toimg
╰───々
*╭─── ❬🦊 A T T P 🦊❭*
│➢ ${prefix}attp  (txt)
│➢ ${prefix}ttp (txt)
│➢ ${prefix}attp2 (txt)
│➢ ${prefix}attp3 (txt)
│➢ ${prefix}attp4 (txt)
│➢ ${prefix}attp5 (txt)
│➢ ${prefix}attp6 (txt)
│➢ ${prefix}ttm   (txt)
│➢ ${prefix}ttm2  (txt)
│➢ ${prefix}ttm3  (txt)
│➢ ${prefix}ttm4  (txt)
╰───々
*╭─── ❬🦊 B A S I C O 🦊❭*
│➢ ${prefix}gtts (linguagem)
│➢ ${prefix}tagme
│➢ ${prefix}emoji
│➢ ${prefix}tabela
│➢ ${prefix}conselhobiblico
│➢ ${prefix}simi (fale algo) 
│➢ ${prefix}perfil
│➢ ${prefix}tomp3 
│➢ ${prefix}frases
│➢ ${prefix}fazernick (nick)
│➢ ${prefix}bot
╰───々
*╭─── ❬🦊 L O G O S🦊❭*
│➢  ${prefix}plaq
│➢  ${prefix}plaq2
│➢  ${prefix}plaq3
│➢  ${prefix}plaq4
│➢  ${prefix}plaq5
│➢  ${prefix}placaloli (txt)
│➢  ${prefix}transformer (txt)
│➢  ${prefix}narutologo (txt)
│➢  ${prefix}thunderv2 (txt)
│➢  ${prefix}thunder (txt)
│➢  ${prefix}lobometal (txt)   
│➢  ${prefix}glitch (txt)
│➢  ${prefix}america (txt)
│➢  ${prefix}demongreen (txt)
│➢  ${prefix}metalgold (txt)
│➢  ${prefix}crossfire (txt)  
│➢  ${prefix}shadow (txt)      
│➢  ${prefix}wetglass (txt)    
│➢  ${prefix}butterfly (txt)   
│➢  ${prefix}grass (txt)       
│➢  ${prefix}logogame (txt)    
│➢  ${prefix}goldplay (txt)    
│➢  ${prefix}silverplay (txt)  
│➢  ${prefix}folha (txt)   
│➢  ${prefix}folha2 (txt)      
│➢  ${prefix}folha3 (txt)      
│➢  ${prefix}folha4 (txt)      
│➢  ${prefix}folha5 (txt)      
│➢  ${prefix}neondevil (txt)   
│➢  ${prefix}show (txt)        
│➢  ${prefix}bracelet (txt)    
│➢  ${prefix}placa (txt)       
│➢  ${prefix}copo (txt)        
│➢  ${prefix}papel (txt)       
│➢  ${prefix}madeira (txt)     
│➢  ${prefix}grafity (txt)     
│➢  ${prefix}toxic (txt)       
│➢  ${prefix}harryp (txt)      
│➢  ${prefix}glitch (txt)      
│➢  ${prefix}wooden (txt)      
│➢  ${prefix}romantic (txt)    
│➢  ${prefix}Gold (txt)   
│➢  ${prefix}neon (txt) 
│➢  ${prefix}neon2 (txt)
│➢  ${prefix}neon3 (txt)   
│➢  ${prefix}neon4 (txt)     
│➢  ${prefix}comporn (txt)     
│➢  ${prefix}comentarioL (txt) 
│➢  ${prefix}8bit (txt)        
│➢  ${prefix}cemiterio (txt)   
│➢  ${prefix}googlelogo (txt)  
│➢  ${prefix}grass (txt)       
│➢  ${prefix}flower (txt)      
│➢  ${prefix}batle (txt)       
│➢  ${prefix}coffe (txt)       
│➢  ${prefix}coffe2 (txt)      
│➢  ${prefix}pubg (txt)        
│➢  ${prefix}horror (txt)      
│➢  ${prefix}fire (txt)        
│➢  ${prefix}stone (txt)       
│➢  ${prefix}break (txt)       
│➢  ${prefix}hallowen (txt)    
│➢  ${prefix}vidro (txt)       
│➢  ${prefix}carbon (txt)      
│➢  ${prefix}metalblue (txt)   
│➢  ${prefix}pink (txt)        
│➢  ${prefix}colaq (txt)       
│➢  ${prefix}ossos (txt)       
│➢  ${prefix}blood (txt)       
│➢  ${prefix}areia (txt)       
│➢  ${prefix}natal (txt)       
│➢  ${prefix}style (txt)       
│➢  ${prefix}neve (txt)        
│➢  ${prefix}pornhub (txt)     
│➢  ${prefix}space (txt)       
│➢  ${prefix}jokerlogo (txt)  
│➢  ${prefix}love (txt)      
│➢  ${prefix}larva (txt)        
│➢  ${prefix}luxury (txt)      
│➢  ${prefix}steel (txt)  
╰───々
*╭─── ❬🦊 B R I N K S 🦊❭*
│➢ ${prefix}gay (marca (@))
│➢ ${prefix}feio (marca (@))
│➢ ${prefix}corno (marca (@))
│➢ ${prefix}vesgo (marca (@))
│➢ ${prefix}bebado (marca (@))
│➢ ${prefix}gostoso (marca (@))
│➢ ${prefix}gostosa (marca (@))
│➢ ${prefix}beijo (marca (@))
│➢ ${prefix}matar (marca (@))
│➢ ${prefix}tapa (marca (@))
│➢ ${prefix}chute (marca (@))
│➢ ${prefix}dogolpe (marca (@))   
│➢ ${prefix}nazista (marca (@))
│➢ ${prefix}chance (fale algo) 
│➢ ${prefix}casal    
│➢ ${prefix}rankgay      
│➢ ${prefix}rankgado
│➢ ${prefix}rankcorno  
│➢ ${prefix}rankgostoso
│➢ ${prefix}rankgostosa
│➢ ${prefix}ranknazista
│➢ ${prefix}rankotakus
│➢ ${prefix}rankpau
│➢ ${prefix}calunia @marca/bla/bla
╰───々
*╭─── ❬🦊 T I C O L E🦊❭*
│➢  ${prefix}infocontador
│➢  ${prefix}blockcmd  (cmd)
│➢  ${prefix}unblockcmd (cmd)
│➢  ${prefix}legendabv (oq qr)
│➢  ${prefix}legendasaiu (oq qr)
│➢  ${prefix}fundobemvindo (link-img)
│➢  ${prefix}fundosaiu (link-img)
│➢  ${prefix}serpremium
│➢  ${prefix}listabt
│➢  ${prefix}listagp
│➢  ${prefix}limparmsg (chat-do-bot)
│➢  ${prefix}antipalavrУЃo 1 / 0
│➢  ${prefix}antiligar 1 / 0
│➢  ${prefix}antipv 1 / 0 (esse da block)
│➢  ${prefix}addpalavra (palavrУЃo)
│➢  ${prefix}delpalavra (palavrУЃo)
│➢  ${prefix}antipvon
│➢  ${prefix}antipvoff
│➢  ${prefix}ativo
│➢  ${prefix}ausente (fale-oq-faz)
│➢  ${prefix}delpremium @(marca)
│➢  ${prefix}addpremium @(marca)
│➢  ${prefix}clonar [@] (rouba ft de prf)
│➢  ${prefix}fotobot (img, = foto do BT)
│➢  ${prefix}descriУЇУЃogp (digite-algo)
│➢  ${prefix}limpar (limpa tds conversas)
│➢  ${prefix}block [@] (bloq de usar cmds) 
│➢  ${prefix}unblock [@] (desbloquear) 
│➢  ${prefix}setprefix  (prefixo-novo)
│➢  ${prefix}bangp
│➢  ${prefix}unbangp
│➢  ${prefix}dono2 @marca
│➢  ${prefix}dono3 @marca
│➢  ${prefix}dono4 @marca
│➢  ${prefix}dono5 @marca
│➢  ${prefix}bcgp (TM pra tds do gp)
│➢  ${prefix}transmitir -all / -pvs / -gps
│➢  ${prefix}transmitir2 (marcar)
╰───々
*╭─── ❬🦊 P R E M 🦊❭*
│➢ ${prefix}delete (Bot deleta (algo) )
│➢ ${prefix}destrava
│➢ ${prefix}destrava2
│➢ ${prefix}ddd (numero)
│➢ ${prefix}cep (numero)
│➢ ${prefix}gerarcpf
│➢ ${prefix}premiumlist
│➢ ${prefix}rename 
│➢ ${prefix}metadinha
│➢ ${prefix}lerfoto (marca)
│➢ ${prefix}encurtalink (link)
╰───々
*╭─── ❬🦊 E F E C T S 🦊❭*
│➢ ${prefix}triggered (marcar)-(img)
│➢ ${prefix}paisagem (marcar)-(img)
│➢ ${prefix}qbcabeУЇa (marcar)-(img)
│➢ ${prefix}legenda (marcar)-(img)
│➢ ${prefix}vidroqb (marcar)-(img)
│➢ ${prefix}deletef (marcar)-(img)
│➢ ${prefix}figupet (marcar)-(img)
│➢ ${prefix}zombie (marcar)-(img)
│➢ ${prefix}arteft (marcar)-(img)
│➢ ${prefix}effect (marcar)-(img)
│➢ ${prefix}wanted (marcar)-(img)
│➢ ${prefix}hitler (marcar)-(img)
│➢ ${prefix}firef (marcar)-(img)
│➢ ${prefix}preso (marcar)-(img)
│➢ ${prefix}trash (marcar)-(img)
│➢ ${prefix}cubof (marcar)-(img)
│➢ ${prefix}figuborrada (marcar-(img) 
│➢ ${prefix}arma (marcar)-(img)
│➢ ${prefix}gtav (marcar)-(img)
│➢ ${prefix}rip (marcar)-(img) 
│➢${prefix}videolento (marca)
│➢${prefix}videorapido (marca)
│➢${prefix}videocontrario (marca)
│➢${prefix}audiolento (marca)
│➢${prefix}audiorapido (marca)
│➢${prefix}grave (marca)
│➢${prefix}grave2 (marca)
│➢${prefix}fast (marca)
│➢${prefix}esquilo (marca)
│➢${prefix}estourar (marca)
│➢${prefix}bass (marca)
│➢${prefix}bass2 (marca)
│➢${prefix}vozmenino (marca)
╰───々`,
               footerText: 'ayumi bot', imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}

               prep = await ayumi.prepareMessageFromContent(from,{buttonsMessage},{quoted: selo})
               ayumi.relayWAMessage(prep)
               break 

case 'buybot':
buttons = [{buttonId:`#comprar1`,buttonText:{displayText: '1° O P Ç Ã O'},type:1},{buttonId:`#comprar2`,buttonText:{displayText: '2° O P Ç Ã O'},type:1}]
               buttonsMessage = {
               contentText: `╓───「👮‍♂️ 𝗣 𝗥 𝗘 𝗖 𝗢 𝗦 👮‍♀️」
║ *➛ Descriptografado : 15 R$ *
║ *➛ Descript e editado com suas preferencias : 25 R$ *
╙───々`,
               footerText: `${pushname}`,
               buttons: buttons,
               headerType: 1
}
          prep = await ayumi.prepareMessageFromContent(from,{buttonsMessage},{quoted: selo})
               ayumi.relayWAMessage(prep)
               break 

case 'comprar1':

reply(`O Sacole entrara em contato...`)
ayumi.sendMessage(`5521986359322@s.whatsapp.net`, `『 P E D I D O』\n𝗻𝘂𝗺𝗲𝗿𝗼: wa.me/${senderr.split('@')[0]},\n*pedido: bot descriptografado*`, MessageType.text, {contextInfo: info})    
break 

case 'comprar2':

reply(`O Sacole entrara em contato...`)
ayumi.sendMessage(`5521986359322@s.whatsapp.net`, `『 P E D I D O』\n𝗻𝘂𝗺𝗲𝗿𝗼: wa.me/${senderr.split('@')[0]},\n*pedido: bot descriptografado e editado*`, MessageType.text, {contextInfo: info})       
break 

case 'feio':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
rate = body.slice(6)
reply(' ❰ Pesquisando a sua ficha de feio : '+rate+', aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imgfeio}`)
zxzz = 
await ayumi.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 110)}`
feio = random
if (feio < 20 ) {bo = 'É não é feio'} else if (feio == 21 ) {bo = '+/- feio'} else if (feio == 23 ) {bo = '+/- feio'} else if (feio == 24 ) {bo = '+/- feio'} else if (feio == 25 ) {bo = '+/- feio'} else if (feio == 26 ) {bo = '+/- feio'} else if (feio == 27 ) {bo = '+/- feio'} else if (feio == 2 ) {bo = '+/- feio'} else if (feio == 29 ) {bo = '+/- feio'} else if (feio == 30 ) {bo = '+/- feio'} else if (feio == 31 ) {bo = 'Ainda tá na média'} else if (feio == 32 ) {bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if (feio == 33 ) {bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if (feio == 34 ) {bo = 'É fein, mas tem baum coração'} else if (feio == 35 ) {bo = 'Tá na média, mas não deixa de ser feii'} else if (feio == 36 ) {bo = 'Bonitin mas é feio com orgulho'} else if (feio == 37 ) {bo = 'Feio e preguiçoso(a), vai se arrumar praga feia'} else if (feio == 3 ) {bo = 'tenho '} else if (feio == 39 ) {bo = 'Feio, mas um banho E se arrumar, deve resolver'} else if (feio == 40 ) {bo = 'FeiN,  mas não existe gente feia, existe gente que não conhece os produtos jequity'} else if (feio == 41 ) {bo = 'você é Feio, mas é legal, continue assim'} else if (feio == 42 ) {bo = 'Nada que uma maquiagem e se arrumar, que não resolva 🥴'} else if (feio == 43 ) {bo = 'Feio que dói de ver, compra uma máscara que melhora'} else if (feio == 44 ) {bo = 'Feio mas nada que um saco na cabeça não resolva né!?'} else if (feio == 45 ) {bo = 'você é feio, mas tem bom gosto'} else if (feio == 46 ) {bo = 'Feio mas tem muitos amigos'} else if (feio == 47 ) {bo = 'Feio mas tem lábia pra pegar várias novinha'} else if (feio == 4 ) {bo = 'Feio e ainda não sabe se vestir, vixi'} else if (feio == 49 ) {bo = 'Feiooo'} else if (feio == 50 ) {bo = 'você é Feio, mas não se encherga 🧐'} else if (feio > 51) {bo = 'você é Feio demais 🙈'} 

await ayumi.sendMessage(from, wew, image, { quoted: info, caption: '  O quanto você é feio? \n\n 「 '+rate+' 」Você é: ❰ '+random+'% ❱ feio\n\n '+bo+' ' })
 }, 7000)
break 

case 'matar':
case 'mata':  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('marque o alvo que você quer matar')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você Acabou de matar o(a) @${mentioned[0].split('@')[0]} 😈👹` 
const jrpp = fs.readFileSync('./media/matar.mp4')
await ayumi.sendMessage(from, jrpp,  MessageType.video, {mimetype: 'video/gif', quoted: info, caption: susp})
break 

case 'corno':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
rate = body.slice(7)
reply(' ❰ Pesquisando a ficha de corno : '+rate+', aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imgcorno}`)
zxzz = 
await ayumi.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 110)}`
await ayumi.sendMessage(from, wew, image, { quoted: info, caption: '  O quanto você é corno? \n\n 「 '+rate+' 」Você é: ❰ '+random+'% ❱  corno 🐃'})
}, 7000)
break

case 'vesgo':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
rate = body.slice(7)
reply(' ❰ Pesquisando a ficha de vesgo : '+rate+', aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imgvesgo}`)
zxzz = 
await ayumi.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 110)}`
await ayumi.sendMessage(from, wew, image, { quoted: info, caption: 'O quanto você é vesgo? \n\n「 '+rate+' 」Você é: ❰ '+random+'% ❱  Vesgo 🙄😆'})
}, 7000)
break 

case 'bebado':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
rate = body.slice(7)
reply(' ❰ Pesquisando a ficha de bebado : '+rate+', aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imgbebado}`)
zxzz = 
await ayumi.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 110)}`
await ayumi.sendMessage(from, wew, image, { quoted: info, caption: 'O quanto você é bebado? \n\n「 '+rate+' 」Você é: ❰ '+random+'% ❱ Bêbado 🤢🥵🥴'})
}, 7000)
break 

case 'gado':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
rate = body.slice(6)
reply(' ❰ Pesquisando a ficha de gado : '+rate+', aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imggado}`)
zxzz = 
await ayumi.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 110)}`
await ayumi.sendMessage(from, wew, image, { quoted: info, caption: 'O quanto você é gado? \n\n「 '+rate+' 」Você é: ❰ '+random+'% ❱  gado 🐂'})
}, 7000)
break 

case 'gostoso':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
rate = body.slice(9)
reply(' ❰ Pesquisando a sua ficha de gostoso : '+rate+' aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imggostoso}`)
zxzz = 
await ayumi.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 110)}`
await ayumi.sendMessage(from, wew, image, { quoted: info, caption: '  O quanto você é gostoso? 😏\n\n「 '+rate+' 」Você é: ❰ '+random+'% ❱ gostoso 😝', Mimetype: 'video/gif'})
}, 7000)
break 

case 'gostosa':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
rate = body.slice(9)
reply(' ❰ Pesquisando a sua ficha de gostosa : '+rate+' aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imggostosa}`)
zxzz = 
await ayumi.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 110)}`
await ayumi.sendMessage(from, wew, image, { quoted: info, caption: 'O quanto você é gostosa? 😏\n\n「 '+rate+' 」Você é: ❰ '+random+'% ❱  gostosa 😳'})
}, 7000)
break

case 'beijo':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque alguém que vc quer da um beijo')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você deu um beijo gostoso na(o) @${mentioned[0].split('@')[0]} 😁👉👈❤` 
wew = fs.readFileSync('./media/beijo.mp4')
await ayumi.sendMessage(from, wew, video, {mimetype: 'video/gif', quoted: info, caption: susp})
break

case 'tapa':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá o tapa')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você Acabou de da um tapa na raba da😏 @${mentioned[0].split('@')[0]} 🔥` 
const jrq = fs.readFileSync('./media/tapa.mp4')
await ayumi.sendMessage(from, jrq,  MessageType.video, {mimetype: 'video/gif', quoted: info, caption: susp})
break

case 'chute':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá um chute')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você Acabou de da um chute em @${mentioned[0].split('@')[0]} 🤡` 
const jry = fs.readFileSync('./media/chute.mp4')
await ayumi.sendMessage(from, jry,  MessageType.video, {mimetype: 'video/gif', quoted: info, caption: susp})
break 

case 'dogolpe':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
if (args.length < 1) return await ayumi.sendMessage(from, 'coloca um nome', text, {quoted: info})
pkt = body.slice(9)
await ayumi.updatePresence(from, Presence.composing)
random = `${Math.floor(Math.random() * 100)}`
jpr = `*GOLPISTA ENCONTRADO👉🏻*\n\n*GOLPISTA* : *${args[0]}*\n*PORCENTAGEM DO GOLPE* : ${random}%😂\n\nEle(a) gosta de ferir sentimentos 😢`
reply(jpr)
break

case 'casal':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
membr = []
const suamae11 = groupMembers
const suamae21 = groupMembers
const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
jet = `*Hmmm.... Eu Shipo eles 2💘💘*\n\n1= @${teupai11.jid.split('@')[0]}\ne esse\n2= @${teupai21.jid.split('@')[0]}\ncom uma porcentagem de: ${shipted}`
membr.push(teupai11.jid)
membr.push(teupai21.jid)
mentions(jet, membr, true)
break

case 'nazista':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
rate = body.slice(9)
reply(' ❰ Pesquisando a sua ficha de nazista : '+rate+' aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imgnazista}`)
zxzz = 
await ayumi.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 110)}`
await ayumi.sendMessage(from, wew, image, { quoted: info, caption: 'O quanto você é nazista? \n\n「 '+rate+' 」Você é: ❰ '+random+'% ❱  nazista 卐'})
}, 7000)
break 

case 'rankativo':
case 'rankativos':  
if (!isGroup) return reply(enviar.msg.group)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if(countMessage[ind].numbers.length < 3) return reply('Necessita do registro de 3 usuarios')
countMessage[ind].numbers.sort((a, b) => (a.messages < b.messages) ? 1 : -1)
mentioned_jid = []
boardi = '🔥፝⃟    Ranking dos membros mais ativos:\n\n'
try {
for (let i = 0; i < 5; i++) {
if (i == 0) boardi += `${i + 1}º 🥇 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 1) boardi += `${i + 1}º 🥈 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 2) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 3) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`	
else if (i == 4) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`			
				
mentioned_jid.push(countMessage[ind].numbers[i].jid)
} 
mentions(boardi, mentioned_jid, true)
} catch (err) {
			console.log(err)
await ayumi.sendMessage(from, `É necessário 5 jogadores para se construir um ranking`, text, {quoted: info})
}
break

case 'checkativo':
if (!isGroup) return reply(enviar.msg.group)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque o número que deseja puxar a atividade')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(numbersIds.indexOf(mentioned[0]) >= 0) {
var indnum = numbersIds.indexOf(mentioned[0])
mentions(`𖣘⃟ᗒ Consulta das atividade de\n𖣘⃟ᗒ @${mentioned[0].split('@')[0]} no grupo\n??⃟ᗒ Mensagens: ${countMessage[ind].numbers[indnum].messages}\n𖣘⃟ᗒ Comandos dados: ${countMessage[ind].numbers[indnum].cmd_messages}`, mentioned, true)
}
else {
mentions(`⋆⃟ۣۜ᭪➣ Consulta da atividade de ⋆⃟ۣۜ᭪➣ @${mentioned[0].split('@')[0]} no grupo\n⋆⃟ۣۜ᭪➣ Mensagens: 0\n⋆⃟ۣۜ᭪➣ Comandos dados: 0`, mentioned, true)
}
break

case 'listabt'://case by: Bielzinho-Bot
if (!isOwner && !info.key.fromMe) return reply('```SOMENTE MEU DONO LINDÃO```')
tdtpt = await ayumi.chats.all()
dpy = await getpc(tdtpt)
sdpt = `*L I S T A  D E  B A T E - P A P O S*\n*Total de Chats* : ${dpy.length}\n\n`
for(let i=0; i<dpy.length; i++){
conts = info.key.fromMe ? info.user.jid : ayumi.contacts[dpy[i]] || {notify: jid.replace(/@.+/, '')}
nomes = ayumi.contacts[dpy[i]] != undefined ? ayumi.contacts[dpy[i]].vname || ayumi.contacts[dpy[i]].notify : undefined
sdpt += `• *Nome* : ${nomes}\n• *Tag* : @${dpy[i].split("@")[0]}\n• *Wame* : wa.me//${dpy[i].split("@")[0]}\n\n----------------------------------\n\n`
}
mentions( sdpt, dpy, true)
break 

case 'listagp': //case by: Bielzinho-Bot
if (!isOwner && !info.key.fromMe) return reply('```SOMENTE MEU DONO LINDÃO```')
tdufg = await ayumi.chats.all()
ingfoo = await getGroup(tdufg)
teks1 = `*L I S T A  D E  G R U P O S*\n*Total de Grupos* : ${ingfoo.length}\n\n`
for (let i = 0; i < ingfoo.length; i++){
teks1 += `• *Nome do Grupo* : ${ingfoo[i].subject}\n• *Id do Grupo* : ${ingfoo[i].id}\n• *Criado* : ${moment(`${ingfoo[i].creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\n• *Total de Membros* : ${ingfoo[i].participants.length}\n\n`
}
reply(teks1)
break

case 'ranklevel':
case 'rl':
case 'rank':
_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
let leaderboardlvl = '    🏆《 Rank Niveis 》🏆\n\n'
let nom = 0
try {
for (let i = 0; i < 10; i++) {
nom++
leaderboardlvl += `
┏ ✘🌖 ${setting.NomeDoBot} 🌘✘┓
┃•────•───────•───•
┣❲🏆❳ [${nom}] ϟ➠ ${_level[i].jid.replace('@s.whatsapp.net', '')}
┣❲🏆❳「xp」: ϟ${_level[i].xp}
┣❲🏆❳「Level」 :ϟ➠ ${_level[i].level}
┗ ──────「★」──────┚\n`

}
leaderboardlvl += `×•-•-•⟮ 🏆Ranking Level🏆⟯•-•-•×`
ayumi.sendMessage(from, leaderboardlvl, text, {sendEphemeral: true, quoted: selo})
} catch (err) {
console.error(err)
await reply(`Deve conter 10 pessoas com level, e o leveling deve está ativado para que aconteça a evolução de level dos membros, após as interações`)
}
break

case 'rankgay':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
try{
d = []
ret = '🏳️‍🌈 Rank dos mais gays\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `🏳️‍🌈❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(ret, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankgado':
case 'rankgados':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
try{
d = []
ret = '🐂🐂 Rank dos mais gados do grupo \n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `🐂❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(ret, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankcorno':
case 'rankcornos':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
membr = []
const corno1 = groupMembers
const corno2 = groupMembers
const corno3 = groupMembers
const corno4 = groupMembers
const corno5 = groupMembers
const cornos1 = corno1[Math.floor(Math.random() * corno1.length)]
const cornos2 = corno2[Math.floor(Math.random() * corno2.length)]
const cornos3 = corno3[Math.floor(Math.random() * corno3.length)]
const cornos4 = corno4[Math.floor(Math.random() * corno4.length)]
const cornos5 = corno5[Math.floor(Math.random() * corno5.length)]
var porcentagemcorno = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `O chifre desse ai bate na lua ksksksk`]
const porcentagemc = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcentag = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcent = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcl = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const prg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
ytb = `
Esses são os cornos do grupo ${groupName}\n@${cornos1.jid.split('@')[0]}\nCom uma porcentagem de ${porcent}\n@${cornos2.jid.split('@')[0]}\nCom uma porcentagem de ${porcentag}\n@${cornos3.jid.split('@')[0]}\nCom uma porcentagem de ${porcl}\n@${cornos4.jid.split('@')[0]}\nCom uma porcentagem de ${porg}\n@${cornos5.jid.split('@')[0]}\nCom uma porcentagem de ${prg}\n\n⚡ ${setting.NomeDoBot} ⚡`
membr.push(cornos1.jid)
membr.push(cornos2.jid)
membr.push(cornos3.jid)
membr.push(cornos4.jid)
membr.push(cornos5.jid)
mentions(ytb, membr, true)
break

case 'rankgostosos':
case 'rankgostoso':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
member = []
const p01 = groupMembers
const p02 = groupMembers
const p03 = groupMembers
const p04 = groupMembers
const p05 = groupMembers
const o01 = p01[Math.floor(Math.random() * p01.length)]
const o02 = p02[Math.floor(Math.random() * p02.length)]
const o03 = p03[Math.floor(Math.random() * p03.length)]
const o04 = p04[Math.floor(Math.random() * p04.length)]
const o05 = p05[Math.floor(Math.random() * p05.length)]
luy = `
Parados!🤚🤚\n\n1=🤚🤭@${o01.jid.split('@')[0]}🤚🤭\n\n\n2=🤚🤭@${o02.jid.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o03.jid.split('@')[0]}🤚🤭\n\n\n4=🤚🤭@${o04.jid.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o05.jid.split('@')[0]}🤚🤭\n\n\nMulta por serem gostosos dms😳 pague pena trabalhando em nossa agência de modelos 😊 by: ${NomeDoBot}`
member.push(o01.jid)
member.push(o02.jid)
member.push(o03.jid)
member.push(o04.jid)
member.push(o05.jid)
mentions(luy, member, true)
break

case 'rankgostosas':
case 'rankgostosa':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
member = []
const p1 = groupMembers
const p2 = groupMembers
const p3 = groupMembers
const p4 = groupMembers
const p5 = groupMembers
const o1 = p1[Math.floor(Math.random() * p1.length)]
const o2 = p2[Math.floor(Math.random() * p2.length)]
const o3 = p3[Math.floor(Math.random() * p3.length)]
const o4 = p4[Math.floor(Math.random() * p4.length)]
const o5 = p5[Math.floor(Math.random() * p5.length)]
luy = `
Paradas!🤚🤚\n\n1=🤚🤭@${o1.jid.split('@')[0]}🤚🤭\n\n\n2=🤚🤭@${o2.jid.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o3.jid.split('@')[0]}🤚🤭\n\n\n4=🤚🤭@${o4.jid.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o5.jid.split('@')[0]}🤚🤭\n\n\nMultas por serem gostosas dms😳 pague pena enviando nud no PV do dono😊 by Bot`
member.push(o1.jid)
member.push(o2.jid)
member.push(o3.jid)
member.push(o4.jid)
member.push(o5.jid)
mentions(luy, member, true)
break

case 'ranknazista':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
try{
if(!isGroup) return reply(enviar.msg.grupo)
d = []
teks = '💂‍♂️Rank dos mais nazistas do gp\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `💂‍♂️❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankotakus':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
membr = []
const otaku1 = groupMembers
const otaku2 = groupMembers
const otaku3 = groupMembers
const otaku4 = groupMembers
const otaku5 = groupMembers
const otaku6 = groupMembers
const otaku7 = groupMembers
const otaku = groupMembers
const otaku9 = groupMembers
const otaku10 = groupMembers
const otakus1 = otaku1[Math.floor(Math.random() * otaku1.length)]
const otakus2 = otaku2[Math.floor(Math.random() * otaku2.length)]
const otakus3 = otaku3[Math.floor(Math.random() * otaku3.length)]
const otakus4 = otaku4[Math.floor(Math.random() * otaku4.length)]
const otakus5 = otaku5[Math.floor(Math.random() * otaku5.length)]
const otakus6 = otaku6[Math.floor(Math.random() * otaku6.length)]
const otakus7 = otaku7[Math.floor(Math.random() * otaku7.length)]
const otakus = otaku[Math.floor(Math.random() * otaku.length)]
const otakus9 = otaku9[Math.floor(Math.random() * otaku9.length)]
const otakus10 = otaku10[Math.floor(Math.random() * otaku10.length)]
ytb = `esses são os otakus fedidos do grupo\n@${otakus1.jid.split('@')[0]}\n@${otakus2.jid.split('@')[0]}\n@${otakus3.jid.split('@')[0]}\n@${otakus4.jid.split('@')[0]}\n@${otakus5.jid.split('@')[0]}\n@${otakus6.jid.split('@')[0]}\n@${otakus7.jid.split('@')[0]}\n@${otakus.jid.split('@')[0]}\n@${otakus9.jid.split('@')[0]}\n@${otakus10.jid.split('@')[0]}\n\n⚡ ${setting.NomeDoBot} ⚡`
membr.push(otakus1.jid)
membr.push(otakus2.jid)
membr.push(otakus3.jid)
membr.push(otakus4.jid)
membr.push(otakus5.jid)
membr.push(otakus6.jid)
membr.push(otakus7.jid)
membr.push(otakus.jid)
membr.push(otakus9.jid)
membr.push(otakus10.jid)
mentions(ytb, membr, true)
break

case 'rankpau':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
membr = []
const pauz1 = groupMembers
const pauz2 = groupMembers
const pauz3 = groupMembers
const pauz4 = groupMembers
const pauz5 = groupMembers
const paus1 = pauz1[Math.floor(Math.random() * pauz1.length)]
const paus2 = pauz2[Math.floor(Math.random() * pauz2.length)]
const paus3 = pauz3[Math.floor(Math.random() * pauz3.length)]
const paus4 = pauz4[Math.floor(Math.random() * pauz4.length)]
const paus5 = pauz5[Math.floor(Math.random() * pauz5.length)]
var pcpau1 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau2 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau3 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau4 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau5 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
const pc1 = pcpau1[Math.floor(Math.random() * pcpau1.length)]
const pc2 = pcpau2[Math.floor(Math.random() * pcpau2.length)]
const pc3 = pcpau3[Math.floor(Math.random() * pcpau3.length)]
const pc4 = pcpau4[Math.floor(Math.random() * pcpau4.length)]
const pc5 = pcpau5[Math.floor(Math.random() * pcpau5.length)]
pdr = `Esses são os caras com o menor e maior pau do Grupo\n${groupName}\n\n@${paus1.jid.split('@')[0]}\n${pc1}\n@${paus2.jid.split('@')[0]}\n${pc2}\n@${paus3.jid.split('@')[0]}\n${pc3}\n@${paus4.jid.split('@')[0]}\n${pc4}\n@${paus5.jid.split('@')[0]}\n${pc5}\n\n ${setting.NomeDoBot}`
membr.push(paus1.jid)
membr.push(paus2.jid)
membr.push(paus3.jid)
membr.push(paus4.jid)
membr.push(paus5.jid)
mentions(pdr, membr, true)
break 

case 'jogodavelha':
if(!isGroup) return reply('comando apenas para grupos')
if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
     
[❗] Alguém está jogando no momento...\n\n@${boardnow.X} VS @${boardnow.O}
     
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
     
 Sua vez : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
ayumi.sendMessage(from, chatMove, MessageType.text, {quoted: info,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
],
},
});
return;
}
if (argss.length === 1)
return reply(`*⟅❗⟆ Jogue com Alguem!!!!*
*para inicar a partida : ${prefix + command} @membro do gp*`);
const boardnow = setGame(`${from}`);
console.log(`Start Tictactore ${boardnow.session}`);
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = argss[1].replace("@", "");
fs.writeFileSync(`./lib/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const strChat = `*『📌ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ⚔️』*
     
@${sender.replace("@s.whatsapp.net",
"")} _está te desafiando para uma partida de jogo da velha..._
_[ ${argss[1]} ] Use *『S』* para aceitar ou *『N』* para não aceitar..._
     `;
ayumi.sendMessage(from, strChat, MessageType.text, {quoted: info,
contextInfo: {
mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
},
});
break

case 'resetarvelha':
case 'resetavelha':  
case 'resetarv':
case 'resetav': 
case 'rv': 
if (!isGroupAdmins) return reply(`Fale com algum adm para resetar o jogo, digite ${prefix}admins pra acordar esses vagaba`)
if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {
fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");
reply(`Jogo da velha resetado com sucesso nesse grupo!`);
} else {
reply(`Não a nenhuma sessão em andamento...`);
}
break

case "ppt":
if (args.length < 1) return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
ppt = ["pedra", "papel", "tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
if ((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
}
if (vit == "vitoria") {
var tes = "Vitória do jogador"
}
if (vit == "derrota") {
var tes = "A vitória é do BOT"
}
if (vit == "empate") {
var tes = "O jogo terminou em empate"
}
reply(`${NomeDoBot} jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
reply(pph)
}
break

case 'cassino':
ayumi.updatePresence(from, Presence.composing) //CASSINO
 const soto = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍇',
'🍊 : 🍋 : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : ??',		
'🍐 : 🍒 : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔',
'🍒 : 🍒 : 🍒',
'🍌 : 🍌 : 🍌'
]		
const somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
if ((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '🍉 : 🍉 : 🍉') ||(somtoy2 == '🍓 : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : 🍐 : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '🍇 : 🍇 : 🍇')) {
var Vitória = "Você ganhou!!!"
} else {
var Vitória = "Você perdeu..."
}
	const cassino = `
┏━━━━❪🎰❫━━━━
┣► ${somtoy2}◄┛
┗━━━━❪💰❫━━━━

*${Vitória}*`
reply(cassino)
if (Vitória == "Você ganhou!!!") {
reply('Parabéns')
}
await limitAdd(sender)
break

case 'quizanime':
case 'quiz':  
if(!isGroup) return reply('Comando apenas para grupos')
const animequiz = Math.floor(Math.random() * quizanime.length)
if(!isGroupAdmins) return reply('Comando apenas para admins')
if(args.length == 0) return reply('use 1 para ativar o jogo do quizanime\npara desativar use quizanime 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./lib/quizanime-${from}.json`)) {
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./lib/quizanime-${from}.json`))
imagemtexto =`                             「❓Quiz❓」`
wew = await getBuffer(`${dataAnagrama2.foto}`)   
await ayumi.sendMessage(from, wew, image, {quoted: selo, caption: imagemtexto, thumbnail: wew})
} else {
fs.writeFileSync(`./lib/quizanime-${from}.json`, `${JSON.stringify(quizanime[animequiz])}`)

imagemtexto =`                             「❓Quiz❓」`
wew = await getBuffer(`${dataAnagrama2.foto}`)   
await ayumi.sendMessage(from, wew, image, {quoted: selo, caption: imagemtexto, thumbnail: wew})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./lib/quizanime-${from}.json`)) return reply('Não tem como desativar o jogo pôs ele não foi ativado')
fs.unlinkSync(`./lib/quizanime-${from}.json`)
reply("Desativado com sucesso")
}
await limitAdd(sender)
break

case 'quizanimais':
if(!isGroup) return reply('Comando apenas para grupos')
const animaisquiz = Math.floor(Math.random() * quizanimais.length)
if(!isGroupAdmins) return reply('Comando apenas para admins')
if(args.length == 0) return reply('use 1 para ativar o jogo \npara desativar use quizanimais 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./lib/quizanim-${from}.json`)) {
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./lib/quizanim-${from}.json`))
imagemtexto =`                             「❓Quiz❓」`
wew = await getBuffer(`${dataAnagrama2.foto}`)   
await ayumi.sendMessage(from, wew, image, {quoted: selo, caption: imagemtexto, thumbnail: wew})
} else {
fs.writeFileSync(`./lib/quizanim-${from}.json`, `${JSON.stringify(quizanimais[animaisquiz])}`)
imagemtexto =`                             「❓Quiz❓」`
wew = await getBuffer(`${dataAnagrama2.foto}`)   
await ayumi.sendMessage(from, wew, image, {quoted: selo, caption: imagemtexto, thumbnail: wew})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./lib/quizanim-${from}.json`)) return reply('Não tem como desativar o jogo pôs ele não foi ativado')
fs.unlinkSync(`./lib/quizanim-${from}.json`)
reply("Desativado com sucesso")
}
await limitAdd(sender)
break

case 'anagrama':
if(!isGroup) return reply('comando apenas para grupos')
const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
if(!isGroupAdmins) return reply('comando apenas para admins')
if(args.length == 0) return reply('use 1 para ativar o jogo do anagrama\npara desativar use anagrama 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./lib/anagrama-${from}.json`)) {
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./lib/anagrama-${from}.json`))
reply(`o jogo já foi iniciado neste grupo:
palavra: ${dataAnagrama2.embaralhada}
dica: ${dataAnagrama2.dica}
`)} else {
fs.writeFileSync(`./lib/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)
ayumi.sendMessage(from, `
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${palavrasANA[anaaleatorio].embaralhada}
│➽ DICA: ${palavrasANA[anaaleatorio].dica}
╰────────────────────────
`,MessageType.text)
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./lib/anagrama-${from}.json`)) return reply('não tem como desativar o jogo do anagrama pôs ele não foi ativado')
fs.unlinkSync(`./lib/anagrama-${from}.json`)
reply("desativado com sucesso")
}
await limitAdd(sender)
break

case 'revelaranime':
case 'revelaanime':  
if (!isGroupAdmins) return reply('somente adms')
let dataAnagrama = JSON.parse(fs.readFileSync(`./lib/quizanime-${from}.json`))
reply (`${dataAnagrama.original}`)
break

case 'revelaranimal':
case 'revelaanimal':  
if (!isGroupAdmins) return reply('somente adms')
let dataAnagramaa = JSON.parse(fs.readFileSync(`./lib/quizanim-${from}.json`))
reply (`${dataAnagramaa.original}`)
break

//❬ 🏓 ❭FIM-BRINCADEIRAS-JOGOS)========\\



//=(CASE-SIMIH-INTELIGÊNCIA-ARTIFICIAL)=\\

case 'simi':
if(isSimi) return reply('Desativado')
sduy = args.join(" ")
data = await fetchJson(`https://api.simsimi.net/v2/?text=${sduy}&lc=pt`, {method: 'get'})
simi = `${data.success}`  
reply(simi)
break

case 'simih':
if (!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.ownerB)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isSimi) return reply('O modo Simi está ativo')
samih.push(from)
fs.writeFileSync('./lib/usuarios/simi.json', JSON.stringify(samih))
reply('Ativado com sucesso o modo simi neste grupo 😗️')
} else if (Number(args[0]) === 0) {
if(!isSimi) return reply('Já está Desativado.')
samih.splice(from, 1)
fs.writeFileSync('./lib/usuarios/simi.json', JSON.stringify(samih))
reply('Desativado modo simi com sucesso neste grupo 😡️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc em KKKKK')
}
break

//========================================\\


//==(AUDIOS/DE-MUSICA/ZOUEIRA/ETC..)===\\

case 'bot':
const soundft = fs.readFileSync('audios/qviado.mp3')
await ayumi.sendMessage(from, soundft, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
break

case 'infobot':
const cmdoo = fs.readFileSync('audios/infobot.mp3')
await ayumi.sendMessage(from, cmdoo, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
break 

//=======================================\\


//=====(ALTERADOR-DE-AUDIO/VIDEO)=======\\

case 'videocontrario':
case 'reversevid':
if (!isQuotedVideo) return reply('Marque um vídeo')
mortandela(from)
encmedia = JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await ayumi.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
ayumi.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: info })
fs.unlinkSync(ran)
})
break 

case 'videolento':
case 'slowvid':  
if (!isQuotedVideo) return reply('Marque um vídeo')
mortandela(from) 
encmedia = JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await ayumi.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
ayumi.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: info })
fs.unlinkSync(ran)
})
break

case 'videorapido':
case 'fastvid':  
if (!isQuotedVideo) return reply('Marque um vídeo')
mortandela(from)
encmedia = JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await ayumi.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
ayumi.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: info })
fs.unlinkSync(ran)
})		
break

case 'grave2':
if (!isQuotedAudio) return reply('Marque um áudio')
mortandela(from)
muk = JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo
gem = await ayumi.downloadAndSaveMediaMessage(muk)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
ayumi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: info})
fs.unlinkSync(ran)
})
break

case 'grave':
if (!isQuotedAudio) return reply('Marque um áudio')
mortandela(from)
low = JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo
slo = await ayumi.downloadAndSaveMediaMessage(low)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${slo} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(slo)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
ayumi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: info})
fs.unlinkSync(ran)
})
break

case 'adolesc':
case 'vozmenino':  
if (!isQuotedAudio) return reply('Marque um áudio')
mortandela(from)
encmedia = JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await ayumi.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
ayumi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: info})
fs.unlinkSync(ran)
})
break  

case 'tomp3':
ayumi.updatePresence(from, Presence.composing) 
if (!isQuotedVideo) return reply('Marque o video pfv')
mortandela(from)
encmedia = JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await ayumi.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('❌ Falha ao converter vídeo para mp3 ❌')
buffer = fs.readFileSync(ran)
ayumi.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: info})
fs.unlinkSync(ran)
})
break

case 'bass3':
if (!isQuotedAudio) return reply('Marque um áudio')
mortandela(from)
ass = JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await ayumi.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
ayumi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: info})
fs.unlinkSync(ran)
})
break

case 'bass': 
if (!isQuotedAudio) return reply('Marque um áudio')
mortandela(from)
ass = JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await ayumi.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
ayumi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: info})
fs.unlinkSync(ran)
})
break

case 'bass2': 
if (!isQuotedAudio) return reply('Marque um áudio')
mortandela(from)
encmedia = JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await ayumi.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
ayumi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: info})
fs.unlinkSync(ran)
})
break

case 'estourar': 
if (!isQuotedAudio) return reply('Marque um áudio')
mortandela(from)
ass = JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await ayumi.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
ayumi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: info})
fs.unlinkSync(ran)
})
break

case 'fast':
case 'audiorapido':  
if (!isQuotedAudio) return reply('Marque um áudio')
mortandela(from)
encmedia = JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await ayumi.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Erro')
hah = fs.readFileSync(ran)
ayumi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: info})
fs.unlinkSync(ran)
})
break

case 'esquilo':
if (!isQuotedAudio) return reply('Marque um áudio')
mortandela(from)
pai = JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo
tup = await ayumi.downloadAndSaveMediaMessage(pai)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${tup} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(tup)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
ayumi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: info})
fs.unlinkSync(ran)
})
break

case 'audiolento': 
case 'slow':
if (!isQuotedAudio) return reply('Marque um áudio')
mortandela(from)
low = JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo
slo = await ayumi.downloadAndSaveMediaMessage(low)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${slo} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(slo)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
ayumi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: info})
fs.unlinkSync(ran)
})
break

//=========(FIM-ALTERAR-AUDIO)===========\\

//==========(EFEITOS-MARCAR)==========\\

case 'triggered':
const imgbbkey1 = imgbbb[Math.floor(Math.random() * imgbbb.length)]  
var imgbb = require('imgbb-uploader')
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
mortandela(from)       
owgi = await ayumi.downloadAndSaveMediaMessage(ger)
dsr = await imgbb(`${imgbbkey1}`, owgi)
imgtrg = `${dsr.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/triggered?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
ayumi.sendMessage(from, nobg, sticker, {quoted: info})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'rip':
const imgbbkey2 = imgbbb[Math.floor(Math.random() * imgbbb.length)]   
var imgbb = require('imgbb-uploader')
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
mortandela(from)    
owgi = await ayumi.downloadAndSaveMediaMessage(ger)
qhy = await imgbb(`${imgbbkey2}`, owgi)
imgtrg = `${qhy.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/rip?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
ayumi.sendMessage(from, nobg, sticker, {quoted: info})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break 

case 'trash':
case 'lixo': 
const imgbbkey3 = imgbbb[Math.floor(Math.random() * imgbbb.length)]   
var imgbb = require('imgbb-uploader')
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
mortandela(from)                     
owgi = await ayumi.downloadAndSaveMediaMessage(ger)
der = await imgbb(`${imgbbkey3}`, owgi)
imgtrg = `${der.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/trash?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
ayumi.sendMessage(from, nobg, sticker, {quoted: info})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'preso':
const imgbbkey4 = imgbbb[Math.floor(Math.random() * imgbbb.length)]   
var imgbb = require('imgbb-uploader')
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
mortandela(from)      
owgi = await ayumi.downloadAndSaveMediaMessage(ger)
lder = await imgbb(`${imgbbkey4}`, owgi)
imgtrg = `${lder.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/jail?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
ayumi.sendMessage(from, nobg, sticker, {quoted: info})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'legenda': 
const imgbbkey5 = imgbbb[Math.floor(Math.random() * imgbbb.length)]   
gh = body.slice(9)           
var top = gh.split('/')[0]
var bottom = gh.split('/')[1]
if(!gh.includes("/")) return reply(`Cade a / mano?\nExemplo: ${prefix + command} Sad/Demais`)
var imgbb = require('imgbb-uploader')
if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info 
owgi = await  ayumi.downloadAndSaveMediaMessage(ger)
anu = await imgbb(`${imgbbkey5}`, owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
sendStickerFromUrl(from, `${anu1}`)
} else {
reply('Marque uma foto com o comando!')
}
await limitAdd(sender)
break

case 'gtav':
const imgbbkey6 = imgbbb[Math.floor(Math.random() * imgbbb.length)]   
var imgbb = require('imgbb-uploader')
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
mortandela(from)                 
owgi = await ayumi.downloadAndSaveMediaMessage(ger)
anu = await imgbb(`${imgbbkey6}`, owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/gtav?url=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
ayumi.sendMessage(from, nobg, image, {
quoted: info
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'zombie':
const imgbbkey7 = imgbbb[Math.floor(Math.random() * imgbbb.length)]   
var imgbb = require('imgbb-uploader')
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
mortandela(from)                 
owgi = await ayumi.downloadAndSaveMediaMessage(ger)
anu = await imgbb(`${imgbbkey7}`, owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://jonaz-api-v2.herokuapp.com/zombie?url=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.resultado)
ayumi.sendMessage(from, nobg, image, {
quoted: info
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'firef':
const imgbbkey8 = imgbbb[Math.floor(Math.random() * imgbbb.length)]   
var imgbb = require('imgbb-uploader')
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
mortandela(from)                 
owgi = await ayumi.downloadAndSaveMediaMessage(ger)
anu = await imgbb(`${imgbbkey8}`, owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/fireAnimation?url=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
ayumi.sendMessage(from, nobg, image, {
quoted: info
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'borra':
case 'figuborrada':
addFilter(from)
const imgbbkey30 = imgbbb[Math.floor(Math.random() * imgbbb.length)]
if (isLimit(sender)) return webPage(linguagem.cash_adquirir(pushname, p), {quoted: info})
var imgbb = require('imgbb-uploader')
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
mortandela(from)
owgi = await ayumi.downloadAndSaveMediaMessage(ger)
anu = await imgbb(`${imgbbkey30}`, owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/pixelate?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
ayumi.sendMessage(from, nobg, sticker, {quoted: info})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
await requestCash(sender)
break

case 'vidroqb':
const imgbbkey9 = imgbbb[Math.floor(Math.random() * imgbbb.length)]   
var imgbb = require('imgbb-uploader')
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
mortandela(from)                 
owgi = await ayumi.downloadAndSaveMediaMessage(ger)
anu = await imgbb(`${imgbbkey9}`, owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/brokemirror?url=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
ayumi.sendMessage(from, nobg, sticker, {
quoted: info})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'arteft':
const imgbbkey10 = imgbbb[Math.floor(Math.random() * imgbbb.length)]   
var imgbb = require('imgbb-uploader')
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
mortandela(from)                 
owgi = await ayumi.downloadAndSaveMediaMessage(ger)
anu = await imgbb(`${imgbbkey10}`, owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/artePhoto?url=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
ayumi.sendMessage(from, nobg, image, {
quoted: info
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break

case '2arma':
const imgbbkey11 = imgbbb[Math.floor(Math.random() * imgbbb.length)]   
var imgbb = require('imgbb-uploader')
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
mortandela(from)                 
owgi = await ayumi.downloadAndSaveMediaMessage(ger)
anu = await imgbb(`${imgbbkey11}`, owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`http://brizas-api.herokuapp.com/photooxy/v2/crossgun?apikey=brizaloka&img=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.resultado)
ayumi.sendMessage(from, nobg, image, {
quoted: info
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'armast':
const imgbbkey12 = imgbbb[Math.floor(Math.random() * imgbbb.length)]   
var imgbb = require('imgbb-uploader')
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
mortandela(from)     
owgi = await ayumi.downloadAndSaveMediaMessage(ger)
anu = await imgbb(`${imgbbkey12}`, owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`http://brizas-api.herokuapp.com/photooxy/v2/gunscircle?apikey=brizaloka&text=Bandido(a)&text2=da área&img=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.resultado)
ayumi.sendMessage(from, nobg, image, {quoted: info})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'effect':
const imgbbkey13 = imgbbb[Math.floor(Math.random() * imgbbb.length)]   
var imgbb = require('imgbb-uploader')
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
mortandela(from)     
owgi = await ayumi.downloadAndSaveMediaMessage(ger)
anu = await imgbb(`${imgbbkey13}`, owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://leyscoders-api.herokuapp.com/api/imgmaker/firework?url=${imgtrg}&apikey=dappakntlll`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
ayumi.sendMessage(from, nobg, video, {quoted: info, mimetype: 'video/mp4'})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'paisagem':
const imgbbkey14 = imgbbb[Math.floor(Math.random() * imgbbb.length)]   
var imgbb = require('imgbb-uploader')
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
mortandela(from)                 
owgi = await ayumi.downloadAndSaveMediaMessage(ger)
anu = await imgbb(`${imgbbkey14}`, owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/mixGalaxy?url=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
ayumi.sendMessage(from, nobg, image, {
quoted: info
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'cubof':
const imgbbkey15 = imgbbb[Math.floor(Math.random() * imgbbb.length)]   
var imgbb = require('imgbb-uploader')
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
mortandela(from)                 
owgi = await ayumi.downloadAndSaveMediaMessage(ger)
anu = await imgbb(`${imgbbkey15}`, owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/cuboFoto1?url=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
ayumi.sendMessage(from, nobg, image, {
quoted: info
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'wallimg':
const imgbbkey16 = imgbbb[Math.floor(Math.random() * imgbbb.length)]   
var imgbb = require('imgbb-uploader')
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
mortandela(from)                 
owgi = await ayumi.downloadAndSaveMediaMessage(ger)
anu = await imgbb(`${imgbbkey16}`, owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`http://brizas-api.herokuapp.com/photooxy/v2/phonewallpaper?apikey=brizaloka&img=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.resultado)
ayumi.sendMessage(from, nobg, image, {
quoted: info
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'qbcabeca':
case 'qbcabeça':
const imgbbkey17 = imgbbb[Math.floor(Math.random() * imgbbb.length)]   
var imgbb = require('imgbb-uploader')
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
mortandela(from)                 
owgi = await ayumi.downloadAndSaveMediaMessage(ger)
anu = await imgbb(`${imgbbkey17}`, owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/puzzle?url=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
ayumi.sendMessage(from, nobg, image, {
quoted: info
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'hitler':
const imgbbkey18 = imgbbb[Math.floor(Math.random() * imgbbb.length)]   
var imgbb = require('imgbb-uploader')
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
mortandela(from)       
owgi = await ayumi.downloadAndSaveMediaMessage(ger)
anu = await imgbb(`${imgbbkey18}`, owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/hitler?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
ayumi.sendMessage(from, nobg, sticker, {quoted: info})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'deletef':
const imgbbkey19 = imgbbb[Math.floor(Math.random() * imgbbb.length)]   
var imgbb = require('imgbb-uploader')
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
mortandela(from)       
owgi = await ayumi.downloadAndSaveMediaMessage(ger)
anu = await imgbb(`${imgbbkey19}`, owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/deletarCanvas?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
ayumi.sendMessage(from, nobg, sticker, {quoted: info})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'figupet':
const imgbbkey20 = imgbbb[Math.floor(Math.random() * imgbbb.length)]   
var imgbb = require('imgbb-uploader')
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
mortandela(from)          
owgi = await ayumi.downloadAndSaveMediaMessage(ger)
anu = await imgbb(`${imgbbkey20}`, owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/petpet?url=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
ayumi.sendMessage(from, nobg, sticker, {quoted: info})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break 

case 'heroiimg':
const imgbbkey21 = imgbbb[Math.floor(Math.random() * imgbbb.length)]   
var imgbb = require('imgbb-uploader')
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
mortandela(from)          
owgi = await ayumi.downloadAndSaveMediaMessage(ger)
anu = await imgbb(`${imgbbkey21}`, owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://dapuhy-api.herokuapp.com/api/canvas/crush?img=${imgtrg}&apikey=${dapuhykey}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
ayumi.sendMessage(from, nobg, sticker, {quoted: info})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break 

case 'arma':
case 'figuarma':
const imgbbkey22 = imgbbb[Math.floor(Math.random() * imgbbb.length)]   
var imgbb = require('imgbb-uploader')
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
mortandela(from)       
owgi = await ayumi.downloadAndSaveMediaMessage(ger)
lfy = await imgbb(`${imgbbkey22}`, owgi)
imgtrg = `${lfy.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-exteam.herokuapp.com/api/gun?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
ayumi.sendMessage(from, nobg, sticker, {quoted: info})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'wanted':
const imgbbkey23 = imgbbb[Math.floor(Math.random() * imgbbb.length)]   
var imgbb = require('imgbb-uploader')
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : info
reply('Estou fazendo, espere')  
owgi = await ayumi.downloadAndSaveMediaMessage(ger)
qkl = await imgbb(`${imgbbkey23}`, owgi)
imgtrg = `${qkl.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/wanted?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
ayumi.sendMessage(from, nobg, sticker, {quoted: info})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'calunia':
k = `${body.slice(10)}`
txt1 = k.split("/")[0];
txt2 = k.split("/")[1];
txt3 = k.split("/")[2];
if(!k.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} @marca-a-pessoa/Fala algo como fosse ele/Reação : nossaa..`)
 ayumi.sendMessage(from, `${txt3}`,text,{quoted:{    key: {fromMe: false,participant: `${txt1}@s.whatsapp.net`,},message: { "extendedTextMessage": {"text": `${txt2}`,"title": `Hmm`}}}})
 break

//❬ 🏓 ❭FIM-EFEITOS-MARCAR❬ 🏓 ❭\\

default:

if (budy.length >= limitefl) { 
if(!isAntiFlood) return
if(isOwner) return
if(isGroupAdmins) return
var Kic = `${sender.split("@")[0]}@s.whatsapp.net`  
setTimeout( () => {
if(!isOwner && !issupre && !info.key.fromMe && !isGroupAdmins) return reply('Muitas características enviadas, eu afirmo que pode ser trava, por precauções, eu irei remover.')
console.log(color('deram Spam','red'))
}, 100)
setTimeout( () => {
ayumi.groupRemove(from, [Kic]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
}, 1000)
setTimeout( () => {
}, 0)
}	


//==============(ANTILINK)===============\\

switch(ants){
} 

 //=========[--ANTI PALAVRÃO --]==========\\
if (isGroup && isPalavrão) { //CREDITOS TIAGO
 if (palavra.includes(messagesC)) {
 if (!isGroupAdmins) {
 try { 
 ayumi.sendMessage(from, `SEM PALAVRÃO!! 😠!!`, text , {quoted : info})       
setTimeout( () => {
ayumi.groupRemove(from, [sender])
}, 2000)
reply("2")
setTimeout( () => {
ayumi.updatePresence(from, Presence.composing)
reply("1")
}, 1000)
setTimeout( () => {
ayumi.updatePresence(from, Presence.composing)
ayumi.sendMessage(from, `*「 🗣️ANTI PALAVRÃO🗣️ 」*\nVocê será banido do gp, Na proxima tenha ética ao falar!!`, text , {quoted : info})           							
}, 0)
} catch { ayumi.sendMessage(from, `InFelizmente, não sou um administrador, entt não posso te banir!!`, text , {quoted : info}) }
} else {
return reply(`VOCÊ PODE ${pushname} 😇`)
}
}
}
//=======================================\\


if(budy.includes("https://") || (budy.includes(".net") || (budy.includes(".com" ) || (budy.includes("//s.kwai.app/") || (budy.includes("//vm.tiktok") || (budy.includes("www.") || (budy.includes("chat.whatsapp") || (budy.includes(".xml") || (budy.includes("youtube.com") || (budy.includes("//t.me/") || (budy.includes(".css")))))))))))) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*Vc é admin do gp,fica tranquilo que não irei te banir.*`)
ayumi.updatePresence(from, Presence.composing)
var Kic = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
}, 1100)
setTimeout( () => {
ayumi.groupRemove(from, [Kic]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
}, 1000)
}

//========================================\\

if (document.includes(type)){
if (!Antidoc) return
if (!botNumber) return
if (isGroupAdmins) return reply(`hummmm documento`)     
reply(`Não permitimos envio de documentos no grupo, por questões de segurança de travas e etc..., então por conta disso, terei que ti remover, qualquer dúvida,entre em contato com algum adm.`)
ayumi.groupSettingChange(from, GroupSettingChange.messageSend, true)		
setTimeout(() =>{
ayumi.groupRemove(from, [sender])
}, 1000)
setTimeout( () => {
ayumi.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 2000)
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
ayumi.sendMessage(from, clear , MessageType.text, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
}

if (location.includes(type)){
if (!Antiloc) return
if (isGroupAdmins) return reply(`hummmm localização `)   
reply(`localização detectada, somos severos nessa questão, então terei que remover você, qualquer dúvida, entre em contato com algum adm.`)
ayumi.groupSettingChange(from, GroupSettingChange.messageSend, true)		
setTimeout(() =>{
ayumi.groupRemove(from, [sender])
}, 1000)
setTimeout( () => {
ayumi.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 2000)
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
ayumi.sendMessage(from, clear , MessageType.text, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
}



//==========(SIMIH-FUNCAO)================\\

if (isGroup && isSimi && !info.key.fromMe && budy != undefined) {
console.log(budy)
muehe = await simih(budy)
console.log(muehe)
reply(muehe)

//========================================\\										         
			if (!isCmd) {
					} else {
						try {
         var ppimg = await ayumi.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
               var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
					buff = await getBuffer(ppimg)
               buttons = [{buttonId: `${prefix}menu`,buttonText:{displayText: 'Menu' },type:1}]

               imageMsg = (await ayumi.prepareMessageMedia(buff, "imageMessage", { thumbnail: img2,})).imageMessage
               buttonsMessage = {
               contentText:` Desculpe`,
               footerText: ` O comando ${command} ainda não existe`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}
prep = await ayumi.prepareMessageFromContent(from,{buttonsMessage},{quoted: selo})
               ayumi.relayWAMessage(prep)};
               }

//========================================\\

}
} catch (e) {
			            e = String(e)
			if (e.includes('this.isZero')){
return
}
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
//FIM
