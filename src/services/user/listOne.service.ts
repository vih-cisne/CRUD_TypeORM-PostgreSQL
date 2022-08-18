import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"

const listOneService = async (id: string) => {

    const userRepository = await AppDataSource.getRepository(User)

    const users = await userRepository.find()
    const userFounded = users.find((user) => user.id === id)

    if(!userFounded) {

        throw new Error("User not found")
    }

    return userFounded
}

export default listOneService