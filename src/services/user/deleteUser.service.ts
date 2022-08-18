import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"

const deleteUserService = async ( idUser: string) => {

    const userRepository = await AppDataSource.getRepository(User)

    const users = await userRepository.find()
    const userFounded = users.find((user) => user.id === idUser)
    
    if(!userFounded) {
        
        throw new Error("User not found")
    }
    

    await userRepository.delete(userFounded.id)

    return { userDeleted: {...userFounded}, message: "User deleted" }
}

export default deleteUserService