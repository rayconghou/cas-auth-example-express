import express from "express";
import passport from "./passport";

const app = express()
  .use(express.json())
  .use(express.urlencoded({ extended: true }));

passport(app);

export default app;
