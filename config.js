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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_14_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA1MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0LFxuICAgICAgICA4MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTcsXG4gICAgICAgIDk3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAxLFxuICAgICAgICA0LFxuICAgICAgICAxLFxuICAgICAgICAxNSxcbiAgICAgICAgODgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDk0LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDU0LFxuICAgICAgICAxODcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyLFxuICAgICAgICA0MixcbiAgICAgICAgNSxcbiAgICAgICAgODAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTA2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjUxLFxuICAgICAgICA5NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2NixcbiAgICAgICAgOSxcbiAgICAgICAgMTgzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDYxLFxuICAgICAgICA4NyxcbiAgICAgICAgODksXG4gICAgICAgIDE4OSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMSxcbiAgICAgICAgODEsXG4gICAgICAgIDU5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDY0LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NixcbiAgICAgICAgMixcbiAgICAgICAgMTc3LFxuICAgICAgICAzOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjExLFxuICAgICAgICA2MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIsXG4gICAgICAgIDIsXG4gICAgICAgIDM1LFxuICAgICAgICA1MixcbiAgICAgICAgNDcsXG4gICAgICAgIDQ2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkprOXgybjQzbUtHdDFzc284ckpUL0FRUXlzZnhoNmJJZkExK1ZFYUlJRHc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi1tVk1FU3JCU0NTVllEZlpzZ3k0emdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzNlZjFhMzYtZDQ1Ni00MzUyLWIxMjQtYzJjYjU3NWJhZDI2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUxLFxuICAgICAgMjE0LFxuICAgICAgMTk5LFxuICAgICAgNTQsXG4gICAgICA5NSxcbiAgICAgIDE5MSxcbiAgICAgIDcsXG4gICAgICAyMjQsXG4gICAgICAxNzIsXG4gICAgICAxNTcsXG4gICAgICAyMjcsXG4gICAgICA5NyxcbiAgICAgIDY3LFxuICAgICAgMjI4LFxuICAgICAgMTMwLFxuICAgICAgMTI0LFxuICAgICAgODEsXG4gICAgICAxNTgsXG4gICAgICA3NSxcbiAgICAgIDE2MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0LFxuICAgICAgMTkyLFxuICAgICAgMTk5LFxuICAgICAgMTk5LFxuICAgICAgMTksXG4gICAgICAxNzUsXG4gICAgICA3MSxcbiAgICAgIDQxLFxuICAgICAgMjU0LFxuICAgICAgMTYzLFxuICAgICAgMzAsXG4gICAgICAyNDgsXG4gICAgICAyOSxcbiAgICAgIDg4LFxuICAgICAgMTE1LFxuICAgICAgMTQ3LFxuICAgICAgMTk0LFxuICAgICAgODIsXG4gICAgICAyMDMsXG4gICAgICAxODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMjg3WTZZM1NcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjQ4Njk5NTQwNTAyOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLiiYFcXG7iiYFcXG7iiYFcXG7iiYFcXG7iiYFcXG7iiYFcXG7iiYFcXG7iiYFcXG7iiYFcXG7iiYFcXG7iiYFcXG7iiYFcXG7iiYFcXG7iiYFcXG7iiYFcXG7iiYFcXG7iiYFcXG7iiYFcXG7iiYFcXG7iiYFcXG7iiYFcXG7iiYFcXG7iiYFcXG7iiYFcXG7iiYFcXG7iiYFcXG7iiYFcXG7iiYFcXG7iiYHiiYFcXG7iiYFcXG7iiYFcXG7iiYFcXG7iiYFcXG7wnZmO8J2YvPCdmL9fX/CdmL3wnZmK8J2ZlFwiLFxuICAgIFwibGlkXCI6IFwiMTkwNTM4MTU0MjcwODEwOjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUExZbzRzR0VLYjY4YlFHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ6VGFXVVBMaGw5RDEzbU96SnQ0ZFVTMWIya2IzallmVG0zUWNONm93cldzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm9aOFJ6UFJzQzV5cHdqQVhYTUJDNVFSZ0dZM1JYSUs3SGQvOXl2d2VnVFJJNFdoSCtmY3VaWlgvNlRTUDd6WGNRaFhNR1VVb1orRjM0R016M3prTUJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlI0MUdadnN4R25HMkM1S1RXazQ5WTE2UWllcWpqdzUzZ280ei9TcmVTUEpvWTdodUxsQ0tnMDcwLzR3b2xGS1NwTElFN1JlS1N1bWtEd2RLQkpBYUJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjQ4Njk5NTQwNTAyOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE1MzE2OTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPYkNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9iQy5qc29uIjogIntcImtleURhdGFcIjpcIkhIT1dxUnk4RmY3cUJ2S0dDVk9DbG1qN0hTVmVqS1RoQWxYUUN3aUlCTmM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTYzNDI2NjIyNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9" ;


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
