import mongoose from "mongoose";
import validator from "validator";

const notesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This file should have a name"],
    },
    fileLink: {
      type: String,
      required: [true, "This file should have a link"],
    },
    uploadedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      require: [true, "A file must be uploaded by a user"],
    },
    avgRating: {
      type: Number,
      default: 4.5,
    },
    subject: {
      type: String,
      require: [true, "A file must have a subject"],
    },
    branch: {
      type: String,
      require: [true, "A file must have a branch"],
    },
    semester: {
      type: Number,
      require: [true, "A file must have a year"],
    },
    isPreviousYearPaper: Boolean,
    paperYear: String,
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Notes = mongoose.model("Notes", notesSchema);

export default Notes;
