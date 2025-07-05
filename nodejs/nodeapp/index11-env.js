//install npm i dotenv
import dotenv from "dotenv"
dotenv.config()
//encodeURIComponent= used because sometime its take randome character between varaible so by this fnx we trim that unwanted character (in deploy)
const dbuser = encodeURIComponent(process.env.DBUSER)
const dbpass = encodeURIComponent(process.env.DBPASS)
console.log(dbuser, dbpass);