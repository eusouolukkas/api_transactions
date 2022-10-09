import fs from "fs";
import path from "path";
import { User } from "../models/user";

export class UserRepository {
  private caminho: string = path.dirname(__filename) + "/../data/users.json";

  public create(user: User) {
    //add usuario no user.json
    const lista = this.list();
    lista.push(user);

    const data = JSON.stringify(lista);
    fs.writeFileSync(this.caminho, data);
  }

  public list(): User[] {
    //lista os usuarios de users.json
    const data = fs.readFileSync(this.caminho);
    return JSON.parse(data.toString());
  }
}
