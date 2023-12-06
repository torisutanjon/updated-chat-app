import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    roomName: {
      type: String,
    },
    roomTypes: {
      type: String,
    },
    roomPassword: {
      type: String,
    },
    participants: {
      type: Array<string>,
      required: true,
      default: [],
    },
  },
  {
    collection: "Room",
  }
);

export default mongoose.model("rooms", RoomSchema);
