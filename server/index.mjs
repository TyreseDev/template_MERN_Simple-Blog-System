import dotenv from "dotenv";
import app from "./app.mjs";
import dbConnect from "./utils/dbconnect.mjs";

dotenv.config();

dbConnect();

const port = process.env.PORT || 5000;
const host = process.env.HOSTNAME || "localhost";

app.listen(port, host, () => {
  console.log(`Server is running on port: ${host}:${port}`);
});
