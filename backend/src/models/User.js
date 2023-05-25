import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: false,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    channels: [
      {
        id: {
          type: String,
        },
        name: {
          type: String,
        },
        alias: {
          type: String,
        },
      },
    ],
    categories: [
      {
        id: {
          type: String,
        },
        name: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("User", userSchema);
