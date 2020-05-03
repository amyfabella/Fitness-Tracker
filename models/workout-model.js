const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for exercise"
  },
  type: {
    type: String,
    trim: true,
    required: "Enter type of exercise"
  },
  weight: {
    type: Number,
    required: "Enter weight"
  },
  sets: {
    type: Number,
    required: "Enter number of sets"
  },
  reps: {
    type: Number,
    required: "Enter number of reps"
  },
  duration: {
    type: Number,
    required: "Enter duration of exericse"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;