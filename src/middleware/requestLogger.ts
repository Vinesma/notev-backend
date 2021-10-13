import { NextFunction, Request, Response } from "express";

const requestLogger = (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    console.info(`
    -LOG-
        Method: ${request.method}
        Path:   ${request.path}
        Body:   ${JSON.stringify(request.body)}
    ---
    `);

    next();
};

export default requestLogger;
