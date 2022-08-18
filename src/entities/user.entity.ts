import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid"


@Entity("users")
export class User {	
    
    //@PrimaryGeneratedColumn
    //@PrimaryColumn('uuid')
    //readonly id: string;

    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column({
        length: 50
    })
    name: string

    @Column({unique: true})
    email: string

    @Column()
    password: string

    @Column({nullable: true})
    age: number;

    @Column()
    readonly created_at: Date

    @Column()
    updated_at: Date

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
        this.created_at = new Date()
        this.updated_at = new Date()
    }
}

        