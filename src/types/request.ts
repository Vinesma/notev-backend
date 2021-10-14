export interface Request<Type> extends Express.Request {
    params: { [key: string]: string };
    body: Type;
}
