import {Injectable} from "@nestjs/common";
import {PhotoStatus} from "../gbo/PhotoStatus.gbo";
import {BaseRepo} from "./Base.repo";


@Injectable()
export class PhotoStatusRepo extends BaseRepo {
  constructor(
    protected gbo: PhotoStatus
  ) {
    super(gbo);
  }

  getStaticGboClass():any {
    return PhotoStatus;
  }
}
