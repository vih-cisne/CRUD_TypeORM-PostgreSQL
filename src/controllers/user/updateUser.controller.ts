import { Request, Response } from 'express'
import updateUserService from '../../services/user/updateUser.service'


const updateUserController = async (req: Request, res: Response) => {

    const { id } = req.params

    try {

        const user = await updateUserService(id, req.body)

        return res.status(200).send(user)

    } catch (err) {

        if (err instanceof Error) {

            return res.status(404).send({
                "error": err.name,
                "message": err.message
            })
        }
    }

}

export default updateUserController