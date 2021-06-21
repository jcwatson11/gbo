import {Injectable} from "@nestjs/common";
import {PhotoLog} from "../gbo/PhotoLog.gbo";
import {BaseRepo} from "./Base.repo";


@Injectable()
export class PhotoLogRepo extends BaseRepo {
  constructor(
    protected gbo: PhotoLog
  ) {
    super(gbo);
  }

  getStaticGboClass() {
    return PhotoLog;
  }
}
