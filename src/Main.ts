import { TasksRouter } from './routes/TasksRouter';
import { UsersRouter } from './routes/UsersRouter';
import { ProtonApplication } from 'protontype';
/**
 * @author Humberto Machado
 *
 */
new ProtonApplication()
    .addRouterAs(TasksRouter)
    .addRouterAs(UsersRouter)
    .start();
