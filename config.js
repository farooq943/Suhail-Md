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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_37_06_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg5LFxuICAgICAgICA2NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM4LFxuICAgICAgICA4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDUxLFxuICAgICAgICA4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkzLFxuICAgICAgICA1NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0LFxuICAgICAgICAzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDYyLFxuICAgICAgICA3NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjI5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDY5LFxuICAgICAgICA4MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYzLFxuICAgICAgICA3MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEwLFxuICAgICAgICA0NixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyNixcbiAgICAgICAgMTI5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzksXG4gICAgICAgIDcyLFxuICAgICAgICAyMzksXG4gICAgICAgIDQwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTksXG4gICAgICAgIDU5LFxuICAgICAgICA2NixcbiAgICAgICAgMTcsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTksXG4gICAgICAgIDU1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDgsXG4gICAgICAgIDE2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjksXG4gICAgICAgIDMwLFxuICAgICAgICAyMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg2LFxuICAgICAgICA4MixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDc0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjA1LFxuICAgICAgICA4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDU5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAzMSxcbiAgICAgICAgODYsXG4gICAgICAgIDExLFxuICAgICAgICAxNTksXG4gICAgICAgIDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJaT1FhQWlUVGZmQ3NQQVZYR2FCNlBQU043aEtwMTBSRGNVMGQ3cFFqUWdRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQd3hPZDM4UlRwYTJWRXNGOHFKSlZRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjAzYTYyNTg5LWJkZTktNGM1Yi04NWQwLTkwMTZlYzZlMWE4N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NyxcbiAgICAgIDEwNixcbiAgICAgIDQ1LFxuICAgICAgMjQsXG4gICAgICAyMjksXG4gICAgICA1OCxcbiAgICAgIDE3NCxcbiAgICAgIDE5MCxcbiAgICAgIDEwNyxcbiAgICAgIDIzNCxcbiAgICAgIDIzNyxcbiAgICAgIDE4OSxcbiAgICAgIDE3MSxcbiAgICAgIDE4MyxcbiAgICAgIDI0NyxcbiAgICAgIDM5LFxuICAgICAgMTYwLFxuICAgICAgMTcxLFxuICAgICAgNzcsXG4gICAgICAxMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODksXG4gICAgICAxNDksXG4gICAgICAyMTMsXG4gICAgICAyMDUsXG4gICAgICAxNDIsXG4gICAgICAyOCxcbiAgICAgIDEzNSxcbiAgICAgIDYyLFxuICAgICAgMTczLFxuICAgICAgNzYsXG4gICAgICA0NixcbiAgICAgIDI0MCxcbiAgICAgIDY4LFxuICAgICAgOTEsXG4gICAgICAxNzIsXG4gICAgICAyNCxcbiAgICAgIDY2LFxuICAgICAgMjEsXG4gICAgICAxNzgsXG4gICAgICAxOTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS1hGUkpBQ0FcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzM3NzUwNzc5MToxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIsOXXFxuXFxuXFxuw5dcXG5cXG5cXG7Dl1xcblxcbsOXXFxuXFxuw5dcXG5cXG7Dl1xcblxcbsOXXFxuXFxuw5dcXG5cXG7Dl1xcbu+8tO+8r++8uO+8qe+8o19fX19f77yi77yv77y56pSqXCIsXG4gICAgXCJsaWRcIjogXCIxMjI2Mzg5OTk1MDY5NjE6MTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEc2MHpjUXVhbnRzd1lZQXlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJycGR2ME1vUExWblR1NzFsN3J3NjhuSTJIbHQrOFZKQU0vV1FobFd0a2xZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIi80ZnNwQ2t0QmROa0hDaXE4RkMxVENlNkdJdEhDZmNEdHh6enV2a211MUVzWlpEY3JPOTJBLzV4THFyL0x3aHhnRWVWODlXNFRlRnU4VGhkb3hIK0JRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVNalZWOFFkdkZNUDVKRHJ2eFNMRFZZTVVYZ2t5RndCMTZCVTNvT1VqT1EvcGh1ZkxPOUZhM2I5bXR1RnRielMrYU9wVnRnNnR2SU9kd1FKdnJ1bGdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzM3NzUwNzc5MToxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzc3NTA3NzkxOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MzU4NjUyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRDl0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEOXQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5cTZPeCtDMXlrdS8xM0RqRy8wZmNnd2RSQm81bTMzN2ErTkoybFp6eHZ3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNjcxMDc2NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9" ;


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
