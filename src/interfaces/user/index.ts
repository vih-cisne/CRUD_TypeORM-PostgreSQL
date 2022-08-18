export interface IUserToCreate {
    name: string
    email: string
    age: number
    password: string
}

export interface IUser extends IUserToCreate {
    id: string
    created_at: Date
    updated_at: Date
}

export interface IinfosToUpdate {
    id?: string
    name?: string
    email?: string
    age?: number
    password?: string
}