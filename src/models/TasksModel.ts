import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * @author Humberto Machado
 *
 */
@Entity()
export class TasksModel {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ nullable: true })
    title: string;
    @Column()
    done: boolean;
    @Column()
    userId: number;
}