import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
  clubname: {},
  title: {
    type: String,
    required: [true, "A event must have a title"],
  },
  Date: {
    type: Date,
    required: [true, "A event must have a date"],
  },
  registrationDate: {
    type: Date,
    required: [true, "A event must have a registration date"],
  },
  image: {
    type: String,
    required: [true, "A event must have a registration image"],
  },
});
