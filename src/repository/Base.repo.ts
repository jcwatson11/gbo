import {FindOptions} from 'sequelize';
import {Model, getAssociations, Association} from 'sequelize-typescript';

export interface IRepository {
  save(_gbo:Model,_options?:FindOptions):Promise<Model>;
  findAll(_options:any,options?:FindOptions):Promise<any[]>;
  findOne(_id:number,options?:FindOptions):Promise<any>;
  remove(_id:number):Promise<boolean>;
  exists(_id:number):Promise<boolean>;
  getStaticGboClass():any;
};

export abstract class BaseRepo implements IRepository {

  constructor(
    protected gbo:Model
  ) {}

  async findAll(options:FindOptions):Promise<Model[]> {
    return this.getStaticGboClass().findAll(options);
  }

  async findOne(id:number,options:FindOptions = {}):Promise<Model|null> {
    let c = this.getStaticGboClass();
    let pkey = c.primaryKeyAttribute;
    options.where = options.where ? options.where:{};
    options.where[pkey] = id;
		console.log(options);
    return c.findOne(options);
  }

  async save(data:any,options:FindOptions = {}):Promise<Model> {
    // let c = this.getStaticGboClass();
    // let pkey = c.primaryKeyAttribute;
    let nc:any = data;
    console.log("PHOTO", JSON.stringify(nc));
    let associations = getAssociations(nc);
    await nc.save();
    if(associations) {
      associations.map(async (asoc) => {
        let asocName:string = asoc.getAs().toString();
        return await this.saveAssociation(nc,asoc,data[asocName]);
      });
      let reloadOptions:any = {include:[]};
      associations.map(async (asoc) => {
        let asocName:string = asoc.getAs().toString();
        if(data[asocName]) {
          reloadOptions.include.push({association:asocName});
        }
      });
      if(!options.include) options.include = [];
      reloadOptions = reloadOptions.include.concat(options);
      await nc.reload(reloadOptions as FindOptions);
    }
    return nc;
  }

	// getMethods = (obj:any) => Object.getOwnPropertyNames(obj).filter(item => typeof obj[item] === 'function');

	async saveAssociation(m:any, asoc:any, data:any):Promise<any | any[]> {
    let associationClass:any = asoc.associatedClassGetter();
    let assocOptions:any = asoc.getSequelizeOptions(m.constructor);
	  switch(asoc.association) {
		  case Association.BelongsToMany:
			  break;
		  case Association.BelongsTo:
        // Can't save a belongsTo because it's a parent.
			  break;
		  case Association.HasMany:
		  case Association.HasOne:
        let fkName:any = assocOptions.foreignKey.name;
        let childPkey:string = associationClass.primaryKeyAttribute;
        let associateHas = async(childData:any) => {
            if(childData[childPkey]) {
              let where:any = {where: {}};
              where.where[childPkey] = childData[childPkey];
              let oldChild:any = await associationClass.findOne(where);
			        Object.assign(oldChild, childData);
              await oldChild.save();
              return oldChild;
            } else {
              let child:any = new associationClass(childData);
              child[fkName] = childData[m.constructor.primaryKeyAttribute];
              await child.save(child);
              return child;
            }
        };
        if(Array.isArray(data) && data.length > 0) {
          let children:any[] = data.map(async(childData:any) => {
            await associateHas(childData);
          });
          return children;
        } else if(data) {
            return await associateHas(data);
        }
			  break;
			default:
			  throw 'Association type [' + asoc.association + '] not supported for sub-model save.';
		}
	}

  async exists(id: number):Promise<boolean> {
    let c = this.getStaticGboClass();
    let pkey = c.primaryKeyAttribute;
    let options = {where: {}};
    options.where[pkey] = id;
    let p = await c.findOne(options);
    if(p === null) {
      return  false;
    }
    return true;
  }

  async remove(id: number):Promise<boolean> {
    let c = this.getStaticGboClass();
    let pkey = c.primaryKeyAttribute;
    let options = {where: {}};
    options.where[pkey] = id;
    let p = await c.findOne(options);
    if(p === null) return false;
    p.destroy();
    return true;
  }

  abstract getStaticGboClass():any;
}
