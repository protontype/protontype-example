import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * @author Humberto Machado
 *
 */
@Entity()
export class UsersModel {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ nullable: true })
    created_at: Date;
    @Column({ nullable: true })
    updated_at: Date;
    @Column({ nullable: false })
    name: string;
    @Column()
    password: string;
    @Column()
    email: string;
}