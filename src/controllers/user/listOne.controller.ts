import { Request, Response } from 'express'
import listOneService from '../../services/user/listOne.service'

const listOneController = async (req: Request, res: Response) => {

    const { id } = req.params

    try {

        const user = await listOneService(id)

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

export default listOneController