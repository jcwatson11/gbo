import {Injectable} from "@nestjs/common";
import {PhotoError} from "../gbo/PhotoError.gbo";
import {BaseRepo} from "./Base.repo";


@Injectable()
export class PhotoErrorRepo extends BaseRepo {

  constructor(
    protected readonly gbo: PhotoError
  ) {
    super(gbo);
  }

  getStaticGboClass():any {
    return PhotoError;
  }
}
