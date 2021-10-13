import express from "express";
import { requestLogger, unknownEndpoint } from "./src/middleware";
import { notesRouter } from "./src/controllers";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(requestLogger);
app.use("/api/notes", notesRouter);
app.use(unknownEndpoint);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
