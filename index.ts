import express from "express";
import dotenv from "dotenv";
import { requestLogger, unknownEndpoint } from "./src/middleware";
import { loginRouter, notesRouter, usersRouter } from "./src/controllers";

const envResult = dotenv.config();
if (envResult.error) throw Error(".env parse error.");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(requestLogger);
app.use("/api/login", loginRouter);
app.use("/api/notes", notesRouter);
app.use("/api/users", usersRouter);
app.use(unknownEndpoint);

const server = app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});

process.on("SIGTERM", () => {
    console.debug("SIGTERM received: closing server.");
    server.close(() => {
        console.debug("HTTP server closed.");
    });
});
