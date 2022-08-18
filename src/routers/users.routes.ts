import { Router } from "express";
import createUserController from "../controllers/user/createUser.controller";
import deleteUserController from "../controllers/user/deleteUser.controller";
import listOneController from "../controllers/user/listOne.controller";
import listUsersController from "../controllers/user/listUsers.controller";
import updateUserController from "../controllers/user/updateUser.controller";

const routes = Router()

routes.post('', createUserController)
routes.get('', listUsersController)
routes.get('/:id', listOneController)
routes.patch('/:id', updateUserController)
routes.delete('/:id', deleteUserController)


export default routes
