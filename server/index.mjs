import dotenv from "dotenv";
import app from "./app.mjs";
import dbConnect from "./utils/dbconnect.mjs";

dotenv.config();

dbConnect();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
