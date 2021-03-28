
import { DBEntity, setName, DBSYMBOL_TABLE_NAME } from "./_db";


@setName("user")
class User extends DBEntity {
  firstName: string;
  lastName: string;

  email: string;
  

}

export default User;