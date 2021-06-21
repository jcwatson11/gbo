import {Table, Column, Model, AutoIncrement, CreatedAt, PrimaryKey, UpdatedAt, DeletedAt} from "sequelize-typescript";

@Table({
  "tableName": "PhotoStatus"
  ,"hasTrigger": true
  ,"timestamps":true
  ,"createdAt": "created_at"
  ,"updatedAt": "updated_at"
  ,"deletedAt": "deleted_at"
  ,"paranoid": true
})
export class PhotoStatus extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column
  StatusId?:number;

  @Column
  StatusCode:string;

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
