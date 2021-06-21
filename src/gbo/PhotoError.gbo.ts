import {Table, Column, Model, CreatedAt, UpdatedAt, DeletedAt, PrimaryKey, AutoIncrement} from "sequelize-typescript";

@Table({
  "tableName": "PhotoError"
  ,"hasTrigger": true
  ,"timestamps":true
  ,"createdAt": "created_at"
  ,"updatedAt": "updated_at"
  ,"deletedAt": "deleted_at"
  ,"paranoid": true
})
export class PhotoError extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column
  ErrorId?:number;

  @Column
  Trace:string;
  
  @Column
  ErrorCode:string;

  @Column
  Display:string;

  @Column
  Description:string;

  @CreatedAt
  CreatedAt?: Date;

  @UpdatedAt
  UpdatedAt?: Date;

  @DeletedAt
  DeletedAt?: Date;
}
