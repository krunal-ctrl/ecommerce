const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      rquired: true,
      maxlength: 32,
      unique: true,
    },
  },
  { timestamps: true }
);

mdoule.exports = mongoose.model("Category", categorySchema);
