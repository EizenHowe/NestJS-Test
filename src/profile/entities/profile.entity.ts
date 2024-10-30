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
export class ProfileRepository {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: "varchar", length: 255}) 
    nama: string;

    @Column({type: "text"})
    usia: number;

    @Column({type: "text"})
    alamat: string;

    @Column({type: "varchar", length: 50})
    email: string

    @Column({type: "varchar", length: 30})
    password: string

    @Column()
    salt: string

    @CreateDateColumn({type: 'timestamp with time zone', nullable: false})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp with time zone', nullable: false})
    updatedAt: Date;

    @DeleteDateColumn({type: 'timestamp with time zone', nullable: false})
    deletedAt: Date;
}