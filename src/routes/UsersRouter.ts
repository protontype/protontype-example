import { Method, Route, RouterClass, RouterFunctionParams, CrudRouter, Database } from 'protontype';

import { TasksModel } from '../models/TasksModel';
import { UsersModel } from '../models/UsersModel';

/**
 * @author Humberto Machado
 */
@RouterClass({
    baseUrl: "/users",
    model: UsersModel
})
export class UsersRouter extends CrudRouter {

    @Route({
        endpoint: '/:user_id/tasks',
        method: Method.GET,
        useAuth: true
    })
    public async tasksFromUser(params: RouterFunctionParams) {
        let tasksRepository = Database.getBD().getRepository(TasksModel);
        try {
            let tasks = await tasksRepository.find({ where: params.req.params });
            params.res.json(tasks);
        } catch (error) {
            this.sendErrorMessage(params.res, error);
        }
    }
}