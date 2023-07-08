import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class State {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  public id: number;

  @Column({
    name:'state',
  })
  public state: string;

  @Column({
    name:'capital',
  })
  public capital: string;

  // @Column()
  // regionId: number;

  // @Column()
  // link: string;
}
