const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    message: {
      text: { type: String, required: true },
    },
    users: Array,
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
MessageSchema.index({ users: 1, sender: 1 });

module.exports = mongoose.model("Messages", MessageSchema);
