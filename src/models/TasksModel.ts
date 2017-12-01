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
    created_at: Date;
    @Column({ nullable: true })
    updated_at: Date;
    @Column({ nullable: false })
    title: string;
    @Column()
    done: boolean;
    @Column()
    userId: number;
}