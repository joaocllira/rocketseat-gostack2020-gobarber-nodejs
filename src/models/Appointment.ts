<<<<<<< HEAD
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
=======
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
>>>>>>> e2f453e67d9a5b42deef0029b59f30019dac63c8

@Entity('appointments')
class Appointment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    provider: string;

    @Column('timestamp with time zone')
    date: Date;
<<<<<<< HEAD

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
=======
>>>>>>> e2f453e67d9a5b42deef0029b59f30019dac63c8
}

export default Appointment;
