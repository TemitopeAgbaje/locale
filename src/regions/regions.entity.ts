import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Region {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name:'name'
  })
  name: string;

  @Column({
    name: 'code'
  })
  @Index({ unique: true })
  code: string;

  @Column({
    name: 'link'
  })
  link: string;
  // Add more properties as needed
}
