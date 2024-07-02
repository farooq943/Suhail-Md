const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "Wa.me/923123681151";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/LnHJcpfnyh8B27QPKPW6tJ";
global.website=process.env.GURL || "https://chat.whatsapp.com/LnHJcpfnyh8B27QPKPW6tJ" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923123681251" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923123681251";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/511e7697c22e769c38915.jpg,https://telegra.ph/file/511e7697c22e769c38915.jpg,https://telegra.ph/file/511e7697c22e769c38915.jpg,https://telegra.ph/file/511e7697c22e769c38915.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "𝗡𝗨𝗠𝗕𝗘𝗥 𝗡𝗢 𝗢𝗡𝗟𝗬 𝗕𝗢𝗧 𝗨𝗦𝗜𝗡𝗚";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_49_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA5NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDc0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUxLFxuICAgICAgICA5LFxuICAgICAgICA0MSxcbiAgICAgICAgODcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUyLFxuICAgICAgICA5NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM3LFxuICAgICAgICA4NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDg4LFxuICAgICAgICA0MixcbiAgICAgICAgMjEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDQsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDM2LFxuICAgICAgICA3MixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDk1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxLFxuICAgICAgICAyNDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMixcbiAgICAgICAgNTQsXG4gICAgICAgIDczLFxuICAgICAgICAxODgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAxLFxuICAgICAgICA5NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzksXG4gICAgICAgIDMsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUyLFxuICAgICAgICAxMixcbiAgICAgICAgOTYsXG4gICAgICAgIDExLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTksXG4gICAgICAgIDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNixcbiAgICAgICAgOTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzLFxuICAgICAgICA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODEsXG4gICAgICAgIDU2LFxuICAgICAgICA5OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAwLFxuICAgICAgICA0NixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTksXG4gICAgICAgIDg3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJpOVA0NUx6aE5pN0YxeGc3eTc4S29XUU5hYWkrK2xacDlQSG1hTFpGM0xNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0OURta0lWS1NaSy1xMXJMUUZsTUFRXCIsXG4gIFwicGhvbmVJZFwiOiBcImE2ZDQ4NDI2LTYxYmQtNGU2MS05NzJiLWFiNDI1Y2U2MzFkNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1LFxuICAgICAgMTM4LFxuICAgICAgMTM2LFxuICAgICAgMTYsXG4gICAgICA4MSxcbiAgICAgIDIyOCxcbiAgICAgIDQxLFxuICAgICAgMzksXG4gICAgICA2NixcbiAgICAgIDc5LFxuICAgICAgMzgsXG4gICAgICAyMjUsXG4gICAgICAxMTQsXG4gICAgICAyMSxcbiAgICAgIDYsXG4gICAgICA1OCxcbiAgICAgIDIyNyxcbiAgICAgIDU1LFxuICAgICAgMzAsXG4gICAgICA4OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjIsXG4gICAgICAyMTQsXG4gICAgICAxNTYsXG4gICAgICAyMjYsXG4gICAgICAxNTksXG4gICAgICAzNyxcbiAgICAgIDQ5LFxuICAgICAgNTgsXG4gICAgICAxNzQsXG4gICAgICAxMDMsXG4gICAgICAxMTUsXG4gICAgICAxNjIsXG4gICAgICAxNjMsXG4gICAgICAyNDUsXG4gICAgICAyMzMsXG4gICAgICA2NixcbiAgICAgIDI0MCxcbiAgICAgIDMzLFxuICAgICAgMTYsXG4gICAgICA3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWTDVSWlNOU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMzc3NTA3NzkxOjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiw5dcXG5cXG5cXG7Dl1xcblxcblxcbsOXXFxuXFxuw5dcXG5cXG7Dl1xcblxcbsOXXFxuXFxuw5dcXG5cXG7Dl1xcblxcbsOXXFxuRkFST09RX19aQUtITUlcIixcbiAgICBcImxpZFwiOiBcIjEyMjYzODk5OTUwNjk2MToyOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQUzYwemNRd05XTnRBWVlCQ0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInJwZHYwTW9QTFZuVHU3MWw3cnc2OG5JMkhsdCs4VkpBTS9XUWhsV3RrbFk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYnpUVlM0N2hIOFNaRjJwS3dZUENoV2IwNVV6U1JtRmZDNDhVMWUyemxLS3lpeEdYZGVONVZ5anU1M084SG43WUx1RjFvbTh3SGl6Y3luc2JBYzBwQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWWlsekIySlNBSUpRTTVLajFyQy9kNlRHUmFYaktHR1l5aGR1VWZpSmwxOElZQUcrNnZjZ1V0ZU04eWRQWkxnc002R1RoeHpldFFFRTN6cElvd0tFRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzc3NTA3NzkxOjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5ODg4NTc5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: 𝗙𝗔𝗥𝗢𝗢𝗤-𝗦𝗜𝗡𝗗𝗛𝗜 Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "𝗙𝗔𝗥𝗢𝗢𝗤-𝗦𝗜𝗡𝗗𝗛𝗜" , // ```『 𝗙𝗔𝗥𝗢𝗢𝗤-𝗦𝗜𝗡𝗗𝗛𝗜 』```", //*『𝗙𝗔𝗥𝗢𝗢𝗤-𝗦𝗜𝗡𝗗𝗛𝗜』*Wa.me/923123681251"),
 
  author : process.env.PACK_AUTHER|| "𝗙𝗔𝗥𝗢𝗢𝗤-𝗦𝗜𝗡𝗗𝗛𝗜",
  packname: process.env.PACK_NAME || "♥️𝗟𝗢𝗩𝗘 𝗜𝗦 𝗟𝗜𝗙𝗘",
  botname : process.env.BOT_NAME  || "𝗙𝗔𝗥𝗢𝗢𝗤-𝗦𝗜𝗡𝗗𝗛𝗜",
  ownername:process.env.OWNER_NAME|| "It'x 𝗙𝗔𝗥𝗢𝗢𝗤",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "FAROOQ"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
