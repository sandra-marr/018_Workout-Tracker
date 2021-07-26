const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: {
        type: String,
        required: "Please select a workout type."
    },
    name: {
        type: String,
        required: "Please enter the exercise name."
    },
    duration: {
        type: Number,
        required: "Please enter a duration."
    },
    weight: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    sets: {
        type: Number,
    },
    distance: {
        type: Number,
    }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
