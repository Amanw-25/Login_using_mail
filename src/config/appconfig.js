import { config } from "dotenv";
config();

const appconfig = {
  URI: process.env.DATABASE_URI,
  PORT: process.env.PORT,
  REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,
  ACCESS_TOKEN_KEY: process.env.ACCESS_TOKEN_KEY,
  EMAILJS_USER_ID: process.env.EMAILJS_USER_ID,
  EMAILJS_USER_SECRET: process.env.EMAILJS_USER_SECRET,

};

export { appconfig };
