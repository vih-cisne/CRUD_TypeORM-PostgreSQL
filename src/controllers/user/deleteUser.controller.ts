import { Request, Response } from 'express'
import deleteUserService from '../../services/user/deleteUser.service'


const deleteUserController = async (req: Request, res: Response) => {

    const { id } = req.params

    try {

        const userDeleted = await deleteUserService(id)

        return res.status(200).send(userDeleted)

    } catch (err) {

        if (err instanceof Error) {

            return res.status(404).send({
                "error": err.name,
                "message": err.message
            })
        }
    }

}

export default deleteUserController