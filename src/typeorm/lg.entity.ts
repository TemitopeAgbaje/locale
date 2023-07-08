import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LGA {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @Column({
    name:'lg_name',
  })
  lg_name: string;

}