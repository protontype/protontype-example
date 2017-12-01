import { TasksRouter } from './routes/TasksRouter';
import { UsersRouter } from './routes/UsersRouter';
import { ProtonApplication } from 'protontype';
/**
 * @author Humberto Machado
 *
 */
new ProtonApplication()
    .addRouter(new TasksRouter())
    .addRouter(new UsersRouter())
    .bootstrap();
