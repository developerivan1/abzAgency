import { FileInput } from 'ngx-material-file-input';

export class User {

  id: number;
  name: string;
  email: string;
  phone: string;
  photo: FileInput;
  position: string;
  position_id: number;
}
