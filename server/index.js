const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user.routes");
const roleRouter = require("./routes/role.routes");
const jobRouter = require("./routes/job.routes");
const responseRouter = require("./routes/response.routes");
const interviewRouter = require("./routes/interview.routes");

const PORT = process.env.PORT || 8081;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", userRouter);
app.use("/api", roleRouter);
app.use("/api", jobRouter);
app.use("/api", responseRouter);
app.use("/api", interviewRouter);

app.listen(PORT, () => console.log(`server started on post ${PORT}`));
