import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Region {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name:'type',
  })
  type: string;
}