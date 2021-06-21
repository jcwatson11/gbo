import {Table, Column, Model, AutoIncrement, CreatedAt, PrimaryKey, UpdatedAt, DeletedAt, HasMany} from "sequelize-typescript";
import {PhotoLog} from './PhotoLog.gbo';
import {PhotoErrorPhoto} from './PhotoErrorPhoto.gbo';

@Table({
  "tableName": "Photo"
  ,"hasTrigger": true
  ,"timestamps":true
  ,"createdAt": "created_at"
  ,"updatedAt": "updated_at"
  ,"deletedAt": "deleted_at"
  ,"paranoid": true
})
export class Photo extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column
  PhotoId?:number;

  @Column
  StatusCode?:string;

  @Column
  FileName?:string;

  @Column
  Analysis?:string;

  @Column
  Provider?:string;

  @Column
  FaceBox?:string;

  @Column
  BodyBox?:string;

  @Column
  CountryCode?:string;

  @HasMany(() => PhotoLog)
  Logs?:PhotoLog[];

  @HasMany(() => PhotoErrorPhoto)
  Errors?:PhotoErrorPhoto[];

  @CreatedAt
  CreatedAt?: Date;

  @UpdatedAt
  UpdatedAt?: Date;

  @DeletedAt
  DeletedAt?: Date;
}
