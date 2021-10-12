const express = require("express");
const app = express();
const requestLogger = require("./src/middleware/requestLogger");
const unknownEndpoint = require("./src/middleware/unknownEndpoint");
const notesRouter = require("./src/controllers/notes.route");

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(requestLogger);
app.use("/api/notes", notesRouter);
app.use(unknownEndpoint);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
