import { RouterClass, TypeORMCrudRouter } from 'protontype';

import { TasksModel } from '../models/TasksModel';

/**
 * @author Humberto Machado
 * Router example
 */
@RouterClass({
    baseUrl: "/tasks",
    model: TasksModel
})
export class TasksRouter extends TypeORMCrudRouter {

}