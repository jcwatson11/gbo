import { expect, use } from 'chai';
import chaiAsPromised from 'chai-as-promised';

use(chaiAsPromised);

import {
  PhotoStatus
  ,PhotoStatusRepo
} from "../main";
import {Sequelize} from "sequelize-typescript";
import * as OriginSequelize from 'sequelize';
import {databaseConfig} from '../../database.config';
const sequelize:Sequelize = new Sequelize(databaseConfig);
const Association:any = OriginSequelize['Association'];

context('PhotoStatus',() => {
  let t:PhotoStatus;
  let repo:PhotoStatusRepo;
  beforeEach(() => {
    t = new PhotoStatus();
    repo = new PhotoStatusRepo(t);
  });
  it('it has properties',() => {
    expect(repo).to.be.an.instanceof(PhotoStatusRepo);
    expect(t).to.be.an.instanceof(PhotoStatus);
    expect(t).to.have.property('StatusId');
    expect(t).to.have.property('StatusCode');
    expect(t).to.have.property('Display');
    expect(t).to.have.property('Description');
  });

});
