import mongoose from "mongoose";

const MONGO_URI =
  "mongodb+srv://sherin:ayzal2020@nextjscrud.xb4nfxh.mongodb.net/?retryWrites=true&w=majority";
const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_URI);
    if (connection.readyState == 1) {
      console.log("Database Connected");
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
export default connectMongo;
