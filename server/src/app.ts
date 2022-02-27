import express from "express";
import session from "express-session";

import passport from "./passport";

const app = express()
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
