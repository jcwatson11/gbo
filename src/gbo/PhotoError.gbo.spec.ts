import { expect, use } from 'chai';
import chaiAsPromised from 'chai-as-promised';

use(chaiAsPromised);

import {
  PhotoError
  ,PhotoErrorRepo
} from "../main";
import {Sequelize} from "sequelize-typescript";
import * as OriginSequelize from 'sequelize';
import {databaseConfig} from '../../database.config';
const sequelize:Sequelize = new Sequelize(databaseConfig);
const Association:any = OriginSequelize['Association'];

context('PhotoError',() => {
  let t:PhotoError;
  let repo:PhotoErrorRepo;
  beforeEach(() => {
    t = new PhotoError();
    repo = new PhotoErrorRepo(t);
  });
  it('it has properties',() => {
    expect(repo).to.be.an.instanceof(PhotoErrorRepo);
    expect(t).to.be.an.instanceof(PhotoError);
    expect(t).to.have.property('ErrorId');
    expect(t).to.have.property('Trace');
    expect(t).to.have.property('ErrorCode');
    expect(t).to.have.property('Display');
    expect(t).to.have.property('Description');
  });

});
