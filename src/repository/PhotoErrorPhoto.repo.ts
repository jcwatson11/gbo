import {Injectable} from "@nestjs/common";
import {PhotoErrorPhoto} from "../gbo/PhotoErrorPhoto.gbo";
import {BaseRepo} from "./Base.repo";


@Injectable()
export class PhotoErrorPhotoRepo extends BaseRepo {
  constructor(
    protected gbo: PhotoErrorPhoto
  ) {
    super(gbo);
  }

  getStaticGboClass():any {
    return PhotoErrorPhoto;
  }
}
