import { expect, use } from 'chai';
import chaiAsPromised from 'chai-as-promised';

use(chaiAsPromised);

import {
  PhotoLog
  ,PhotoLogRepo
} from "../main";
import {Sequelize} from "sequelize-typescript";
import * as OriginSequelize from 'sequelize';
import {databaseConfig} from '../../database.config';
const sequelize:Sequelize = new Sequelize(databaseConfig);
const Association:any = OriginSequelize['Association'];

context('PhotoLog',() => {
  let t:PhotoLog;
  let repo:PhotoLogRepo;
  beforeEach(() => {
    t = new PhotoLog();
    repo = new PhotoLogRepo(t);
  });
  it('it has properties',() => {
    expect(repo).to.be.an.instanceof(PhotoLogRepo);
    expect(t).to.be.an.instanceof(PhotoLog);
    expect(t).to.have.property('PhotoLogId');
    expect(t).to.have.property('PhotoId');
    expect(t).to.have.property('LogEntry');
  });

});
