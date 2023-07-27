import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URL || "mongodb://localhost:27017/blog-system",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

export default connectDB;
