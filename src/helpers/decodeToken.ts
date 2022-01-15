import jwt from "jsonwebtoken";
import { Request } from "express";
import { TokenPayload } from "../types";

const decodeToken = (headers: Request["headers"]): TokenPayload => {
    const { authorization } = headers;

    if (!authorization) throw Error("No authorization header provided.");

    return jwt.decode(authorization.split(" ")[1]) as TokenPayload;
};

export default decodeToken;
