import "reflect-metadata";
import * as dotenv from "dotenv";
dotenv.config();
import {Photo, PhotoStatus, PhotoErrorPhoto, PhotoError, PhotoLog} from "./src/main";
import {OperatorAliases} from "@jcwatson11/sequelizeqsfind";
import {SequelizeOptions} from "sequelize-typescript";
import {Dialect} from "sequelize/types";


export const databaseConfig:SequelizeOptions = {
   dialect: process.env.DB_DRIVER as Dialect
  ,host: process.env.DB_HOST
  ,port: +process.env.DB_PORT
  ,username: process.env.DB_USER
  ,password: process.env.DB_PASS
  ,database: process.env.DB_NAME
  ,models: [
     Photo
    ,PhotoErrorPhoto
    ,PhotoError
    ,PhotoStatus
    ,PhotoLog
  ]
  ,operatorsAliases: OperatorAliases
};
