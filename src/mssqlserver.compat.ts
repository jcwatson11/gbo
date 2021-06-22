/**
 * This is a hack to get Sequelize to work with MS SQL Server.
 * The default stringify function assumes compatability with
 * every other RDBMS, without accounting for the MS SQL Server
 * date format. Ain't Microsoft just so special?
 */
import * as DataTypes from 'sequelize-typescript/dist/sequelize/data-type/data-type'

DataTypes.DataType.DATE.prototype._stringify = function _stringify(date:any, options:any) {
  date = this._applyTimezone(date, options);
  return date.format('YYYY-MM-DD HH:mm:ss.SSS');
};
// END Compatability for MS SQL SERVER.

