const requestLogger = (request, _, next) => {
    console.info(`
    -LOG-
        Method: ${request.method}
        Path:   ${request.path}
        Body:   ${JSON.stringify(request.body)}
    ---
    `);

    next();
};

module.exports = requestLogger;
