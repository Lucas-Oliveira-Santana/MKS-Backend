import { Column, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuidV4} from "uuid";

@Entity("movies")
class Movie{
  @PrimaryColumn()
  id?:string

  @Column()
  title:string

  @Column()
  description:string

  @Column()
  released?: Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export{Movie}