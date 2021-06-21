import {Photo} from "../gbo/Photo.gbo";
import {PhotoRepo} from "../repository/photo.repo";
import {PhotoLog} from "../gbo/PhotoLog.gbo";
import {PhotoLogRepo} from "../repository/photolog.repo";
import {Sequelize} from "sequelize-typescript";
import {databaseConfig} from '../../database.config';
const sequelize:Sequelize = new Sequelize(databaseConfig);

describe.skip('when using VisionFactory',() => {
  beforeEach(() => {
    const photo:Photo = new Photo();
    const repo:PhotoRepo = new PhotoRepo(photo);
    const photolog:PhotoLog = new PhotoLog();
    const logRepo:PhotoLogRepo = new PhotoLogRepo(photolog);
  });
  it('it constructs a VisionApp properly',() => {
    expect(app).toBeDefined();
  });
  it('it can validate a config',() => {
    app.config(config);
    app.validateConfig();
    // If nothing threw an error, then the config was valid
    expect(true).toBe(true);

    // now set db host name to empty
    config.database.host = '';
    try {
      app.validateConfig();
    } catch(e) {
      expect(e).toEqual('VisionAppConfig.database.host cannot be empty.');
    }

    // now set directories.input to empty
    config.directories.input = '';
    try {
      app.validateConfig();
    } catch(e) {
      expect(e).toEqual('VisionAppConfig.directories.input cannot be empty.');
    }

    // now set directories.input to an invalid directory path
    config.directories.input = '/invalid/directory/path';
    try {
      app.validateConfig();
    } catch(e) {
      expect(e).toEqual('Path defined for VisionAppConfig.directories.input (/invalid/directory/path) is not a directory.');
    }
  })
  it('it can generate a secure URL for the photo',() => {
    app.config(config);
    let url:string = app.getUrl('/path/to/file.jpg');
    let token:string = decodeURIComponent(url.split('=').pop());
    let [encodedPayload,sig]:string[] = token.split('.');
    let payload:string = FhExpToken.base64decode(encodedPayload);
    let [file,timestamp]:string[] = payload.split(':');
    expect(file).toEqual('file.jpg');
    expect(parseInt(timestamp)).toEqual(expect.any(Number));
    let fet:FhExpToken = FhExpToken.createFromFile(file,parseInt(timestamp));
    fet.sign();
    expect(fet.signature).toEqual(sig);
  })
  it('it can notice a new file',(done) => {
    config.directories.input = config.directories.input.replace(/input/,'testinput');
    app.config(config);
    let testFilePath = app.appConfig.directories.input + 'test.txt';
    if(fs.existsSync(testFilePath)) {
      fs.removeSync(testFilePath);
    }
    let handler = jest.fn();
    app.on('FILE_FOUND',handler);
    let fn = () => {
      try {
        fs.writeFileSync(testFilePath, 'this is a test file.');
      } catch (e) {
        throw 'File write failed: ' + e;
      }
    };
    app.watch();
    setTimeout(fn,500);

    let testOver = () => {
      expect(handler).toHaveBeenCalledWith(testFilePath,expect.any(Object));
      app.watcher.close().then(() => {
        console.log('closed watcher');
        done();
      });
      if(fs.existsSync(testFilePath)) {
        fs.removeSync(testFilePath);
      }
    };
    setTimeout(testOver,4000);
  })
});
