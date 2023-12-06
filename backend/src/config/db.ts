import mongoose from "mongoose";

export const conn = async () => {
  mongoose.set("strictQuery", true);

  try {
    await mongoose.connect(process.env.DATABASE_URL!).then(() => {
      console.log(`Connected to Database`);
    });
  } catch (error) {
    if (error) {
      console.log(`Unable to connect to database with an error of: ${error}`);
    }
  }
};
