import {Table, Column, Model, AutoIncrement, CreatedAt, PrimaryKey, UpdatedAt, DataType, ForeignKey } from "sequelize-typescript";
import {Photo} from './Photo.gbo';

@Table({
  "tableName": "PhotoLog"
  ,"hasTrigger": true
  ,"timestamps":true
  ,"createdAt": "created_at"
  ,"updatedAt": "updated_at"
})
export class PhotoLog extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column
  PhotoLogId?:number;

  @ForeignKey(() => Photo)
  @Column
  PhotoId:number;

  @Column({ type: DataType.TEXT })
  LogEntry?:string;


  @CreatedAt
  CreatedAt?: Date;

  @UpdatedAt
  UpdatedAt?: Date;

}
