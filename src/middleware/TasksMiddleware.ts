import { ProtonMiddleware, Middleware, MiddlewareFunctionParams } from "protontype";

export class TasksMiddleware extends ProtonMiddleware {

    @Middleware(true)
    sayHello(params: MiddlewareFunctionParams) {
        console.log("Hello!");
    }
}