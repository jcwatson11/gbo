import {PhotoRepo} from './photo.repo';
import {PhotoErrorRepo} from './photoerror.repo';
import {PhotoErrorPhotoRepo} from './photoerrorphoto.repo';
import {PhotoLogRepo} from './photolog.repo';
import {PhotoStatusRepo} from './photostatus.repo';

export const FhRepositoryProviders = [
   PhotoRepo
  ,PhotoErrorRepo
  ,PhotoErrorPhotoRepo
  ,PhotoStatusRepo
  ,PhotoLogRepo
];
