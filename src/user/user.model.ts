import {Model, Table, Column, DataType} from 'sequelize-typescript'

interface UserCreationAttrs {
    email: string
    password: string
    firstName: string
    lastName: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string

    @Column({type: DataType.STRING})
    password: string

    @Column({type: DataType.STRING, allowNull: false})
    firstName: string

    @Column({type: DataType.STRING, allowNull: false})
    lastName: string
    
}