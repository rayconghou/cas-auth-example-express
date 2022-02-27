import cors from "cors";
import express from "express";
import session from "express-session";
import { isCI, isDevelopment, isTest } from "./utils/environment";
import passport from "./passport";

const bypassCors = isCI() || isDevelopment() || isTest();
const allowList = new Set(["http://localhost:3000"]);

const corsOptions = {
  origin: (origin: string, callback: any) => {
    if (bypassCors || allowList.has(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

const app = express()
  .use(cors(corsOptions))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(
    session({
      secret: "this is totally secret",
      resave: false,
      saveUninitialized: false,
    })
  );

passport(app);

export default app;
