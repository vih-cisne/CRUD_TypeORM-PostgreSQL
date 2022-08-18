import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { IinfosToUpdate } from "../../interfaces/user"

const updateUserService = async ( idUser: string, infosToUpdate : IinfosToUpdate ) => {

    const userRepository = await AppDataSource.getRepository(User)

    const users = await userRepository.find()
    const userFounded = users.find((user) => user.id === idUser)
    
    if(!userFounded) {
        
        throw new Error("User not found")
    }
    
    const { id } = infosToUpdate
    if(id && id !== userFounded.id ) {

        throw new Error("You can't change the id")

    }

    const dateUpdate = new Date()

    await userRepository.update(userFounded.id, {...infosToUpdate, updated_at: new Date()})

    return { userUpdated: {...userFounded, ...infosToUpdate, updated_at: dateUpdate}, message: "User updated"}
    
}

export default updateUserService