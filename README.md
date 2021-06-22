# NodeJs Food for the Hungry Global Business Objects (GBO)

This is a starting place for a NodeJs implementation of the FH GBO library.
It is a simple proof of concept (POC) demonstrating:

- Unit Tests for GBOs
- Unit Tests for Repositories
- Code Coverage for tests
- Automatic documentation generation

This library also provides provider arrays for inclusion in the NestJs framework.

## Project Origin and Context

The original POC was created to facilitate the FH Vision project, which uses Azure facial
recognition to process child profile photos, providing automatic cropping according to
the golden ratio, auto color balance, and recognition of inappropriate content using
artificial intelligence in order to reduce the number of working hours required to prepare
photos for printed materials in its efforts to acquire new sponsors for children involved
in FH field programs.

## Objects Implemented

Objects currently implemented are:

- Photo
- PhotoError
- PhotoErrorPhoto
- PhotoStatus
- PhotoLog

## Data Sources

The current implementation only gets data from a separated database that was isolated
from all other FH data systems. This is referred to as the "VisionDB".

## Initial Implementation

The first usage of this library was implemented in the NestJs framework.
As such, the usage instructions below will assume usage of that framework.
A more simplified usage example may be provided at a later date depending
on need.

## Usage

```typescript
// File: database.config.ts
import "reflect-metadata";
import * as dotenv from "dotenv";
dotenv.config();
import {Photo} from "./modules/Vision/gbo/Photo.gbo";
import {PhotoStatus} from "./modules/Vision/gbo/PhotoStatus.gbo";
import {PhotoErrorPhoto} from "./modules/Vision/gbo/PhotoErrorPhoto.gbo";
import {PhotoError} from "./modules/Vision/gbo/PhotoError.gbo";
import {SequelizeModuleOptions} from "@nestjs/sequelize";
import {PhotoLog} from "./modules/Vision/gbo/PhotoLog.gbo";
import {Dialect} from "sequelize/types";
import {OperatorAliases} from "@jcwatson11/sequelizeqsfind";

export const databaseConfig:SequelizeModuleOptions = {
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

```
