import { expect, use } from 'chai';
import chaiAsPromised from 'chai-as-promised';

use(chaiAsPromised);

import {
  PhotoErrorPhoto
  ,PhotoErrorPhotoRepo
} from "../main";
import {Sequelize} from "sequelize-typescript";
import * as OriginSequelize from 'sequelize';
import {databaseConfig} from '../../database.config';
const sequelize:Sequelize = new Sequelize(databaseConfig);
const Association:any = OriginSequelize['Association'];

context('PhotoErrorPhoto',() => {
  let t:PhotoErrorPhoto;
  let repo:PhotoErrorPhotoRepo;
  beforeEach(() => {
    t = new PhotoErrorPhoto();
    repo = new PhotoErrorPhotoRepo(t);
  });
  it('it has properties',() => {
    expect(repo).to.be.an.instanceof(PhotoErrorPhotoRepo);
    expect(t).to.be.an.instanceof(PhotoErrorPhoto);
    expect(t).to.have.property('PhotoErrorPhotoId');
    expect(t).to.have.property('PhotoId');
    expect(t).to.have.property('ErrorCode');
  });

});
