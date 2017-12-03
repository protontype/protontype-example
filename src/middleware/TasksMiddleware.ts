import { ProtonMiddleware, Middleware, MiddlewareFunctionParams } from "protontype";

export class TasksMiddleware extends ProtonMiddleware {

    @Middleware()
    sayHello(params: MiddlewareFunctionParams) {
        console.log("Hello!");
        params.next();
    }
}