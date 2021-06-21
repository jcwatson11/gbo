import {Table, Column, Model, AutoIncrement, CreatedAt, PrimaryKey, UpdatedAt, DeletedAt, ForeignKey} from "sequelize-typescript";
import {Photo} from './Photo.gbo';

@Table({
  "tableName": "PhotoErrorPhoto"
  ,"hasTrigger": true
  ,"timestamps":true
  ,"createdAt": "created_at"
  ,"updatedAt": "updated_at"
  ,"deletedAt": "deleted_at"
  ,"paranoid": true
})
export class PhotoErrorPhoto extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column
  PhotoErrorPhotoId?:number;

  @ForeignKey(() => Photo)
  @Column
  PhotoId:number;

  @Column
  ErrorCode:string;

  @CreatedAt
  CreatedAt?: Date;

  @UpdatedAt
  UpdatedAt?: Date;

  @DeletedAt
  DeletedAt?: Date;
}
