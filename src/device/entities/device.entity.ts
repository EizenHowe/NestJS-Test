import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    VersionColumn,
    CreateDateColumn,
    OneToMany,
    ManyToOne
} from 'typeorm';

@Entity()
export class DeviceRepository {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: "varchar", length: 255}) 
    namaPerangkat: string;

    @Column({type: "integer"})
    ram: number;

    @Column({type: "integer"})
    storage: number;

    @Column({type: "varchar"})
    os: string;
    
    @CreateDateColumn({type: 'timestamp with time zone', nullable: false})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp with time zone', nullable: false})
    updatedAt: Date;

    @DeleteDateColumn({type: 'timestamp with time zone', nullable: false})
    deletedAt: Date;
}