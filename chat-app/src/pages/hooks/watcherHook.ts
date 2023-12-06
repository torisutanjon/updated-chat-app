import { MongoClient } from "mongodb";
import { env } from "@/env.mjs";

const watcherHook = () => {
  // const client = new MongoClient(env.DATABASE_URL);
  // client
  //   .connect()
  //   .then(() => console.log("Connected to database"))
  //   .catch((err) => console.log("Unable to connect to databse", err));
  // const db = client.db("chat-app-t3");
  // const collection = db.collection("Notification");
  // const changeStream = collection.watch();
  // changeStream.on("change", (change) => {
  //   console.log(change);
  // });
};

export default watcherHook;
