const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now(),
    },
    exercises: [

        {
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
        }
    ],
    // totalDuration: {
    //     type: Number,
    //     default: 0,
    // }
})

// WorkoutSchema.methods.addDuration = function() {
//     let duration = 0;
//     console.log("before " + duration)
//     this.exercises.forEach( exercise => {
//        duration = duration + exercise.duration;
//        console.log("during " + duration)
//     });
//     console.log("after " + duration)
//     return this.totalDuration = duration
// };
  

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
