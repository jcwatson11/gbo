import {PhotoRepo} from './Photo.repo';
import {PhotoErrorRepo} from './PhotoError.repo';
import {PhotoErrorPhotoRepo} from './PhotoErrorPhoto.repo';
import {PhotoLogRepo} from './PhotoLog.repo';
import {PhotoStatusRepo} from './PhotoStatus.repo';

export const FhRepositoryProviders = [
   PhotoRepo
  ,PhotoErrorRepo
  ,PhotoErrorPhotoRepo
  ,PhotoStatusRepo
  ,PhotoLogRepo
];
