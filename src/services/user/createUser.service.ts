import { IUserToCreate, IUser } from "../../interfaces/user";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";


const createUserService = async (userToCreate: IUserToCreate) => {

    const userRepository = await AppDataSource.getRepository(User) 

    const users = await userRepository.find()

    const { email, name, age } = userToCreate

    const emailAlreadyExists = users.find(user => user.email === email)

    if (emailAlreadyExists) {

        throw new Error("Email already exists")
    }

    const user = new User()
    user.name = name
    user.email = email
    user.age = age
    user.password = userToCreate.password

    await userRepository.create(user)
    const userCreated = await userRepository.save(user)
    
    const { password, ...userInfo } = userCreated

    return {...userInfo}

    /*const newUser: IUser = {
        id: uuidv4(),
        created_at: new Date(),
        updated_at: new Date(),
        ...userToCreate
    }*/

}

export default createUserService