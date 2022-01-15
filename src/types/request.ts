import { Request as ExpressRequest } from "express";

export interface Request<Type> extends ExpressRequest {
    params: { [key: string]: string };
    headers: ExpressRequest["headers"];
    body: Type;
}
