import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * @author Humberto Machado
 *
 */
@Entity()
export class UsersModel {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ nullable: false })
    name: string;
    @Column()
    password: string;
    @Column()
    email: string;
}