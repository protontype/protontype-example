import { BaseMiddleware, Middleware, MiddlewareFunctionParams } from "protontype";

export class TasksMiddleware extends BaseMiddleware {

    @Middleware(true)
    sayHello(params: MiddlewareFunctionParams) {
        console.log("Hello!");
    }
}