import {Injectable} from "@nestjs/common";
import {Photo} from "../gbo/Photo.gbo";
import {BaseRepo} from "./Base.repo";


@Injectable()
export class PhotoRepo extends BaseRepo {
  constructor(
    protected gbo: Photo
  ) {
    super(gbo);
  }

  getStaticGboClass() {
    return Photo;
  }
}
