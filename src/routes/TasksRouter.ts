import { RouterClass, CrudRouter, BodyParserMiddleware } from 'protontype';

import { TasksModel } from '../models/TasksModel';
import { TasksMiddleware } from '../middleware/TasksMiddleware';

/**
 * @author Humberto Machado
 * Router example
 */
@RouterClass({
    baseUrl: "/tasks",
    model: TasksModel,
    middlewares: [new TasksMiddleware()]
})
export class TasksRouter extends CrudRouter {

}