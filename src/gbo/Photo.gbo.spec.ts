import { expect, use } from 'chai';
import chaiAsPromised from 'chai-as-promised';

use(chaiAsPromised);

import {
  Photo
  ,PhotoRepo
  ,PhotoError
  ,PhotoErrorRepo
  ,PhotoErrorPhoto
  ,PhotoErrorPhotoRepo
  ,PhotoLog
  ,PhotoLogRepo
  ,PhotoStatus
  ,PhotoStatusRepo
} from "../main";
import {Sequelize} from "sequelize-typescript";
import * as OriginSequelize from 'sequelize';
import {databaseConfig} from '../../database.config';
const sequelize:Sequelize = new Sequelize(databaseConfig);
const Association:any = OriginSequelize['Association'];

context('Photo',() => {
  let photo:Photo;
  let repo:PhotoRepo;
  beforeEach(() => {
    photo = new Photo();
    repo = new PhotoRepo(photo);
  });
  it('it has properties',() => {
    expect(repo).to.be.an.instanceof(PhotoRepo);
    expect(photo).to.be.an.instanceof(Photo);
    expect(photo).to.have.property('PhotoId');
    expect(photo).to.have.property('StatusCode');
    expect(photo).to.have.property('FileName');
    expect(photo).to.have.property('Analysis');
    expect(photo).to.have.property('Provider');
    expect(photo).to.have.property('FaceBox');
    expect(photo).to.have.property('BodyBox');
    expect(photo).to.have.property('CountryCode');
  });

  it('it has associations',() => {
    expect(Photo)
      .to.have.property('associations')
      .that.has.property('Logs')
      .that.is.an.instanceof(Association['HasMany']);
    expect(Photo)
      .to.have.property('associations')
      .that.has.property('Errors')
      .that.is.an.instanceof(Association['HasMany']);
  });
});
