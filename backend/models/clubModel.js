import mongoose from "mongoose";

const clubSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "A club must have a name"],
  },
  profile: {
    type: String,
  },
  description: {
    type: String,
  },
  categories: {
    type: String,
    required: [true, "A club must belong to a category"],
  },
  links: {
    type: Array,
  },
});
