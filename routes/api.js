const router = require('express').Router();
const Workout = require('../models/workout.js');


//getLastWorkout() from api.js
//called when the homepage is loaded
router.get('/api/workouts', (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
        console.log(dbWorkout);
    })
    .catch((err) => {
        res.json(err);
    });
});

//addExercise(data) from api.js
//called on exercise.js in the form submission
router.put('/api/workouts/:id', (req, res) => {

    console.log(req);
    Workout.updateOne(
        {
            _id: req.params.id
        },
        {
            $push: { exercises: 
                {
                type: req.body.type,
                name: req.body.name,
                duration: req.body.duration,
                weight: req.body.weight,
                reps: req.body.reps,
                sets: req.body.sets,
                distance: req.body.distance,
                }
            }
          },
        (err, data) => {
            console.log(data);
        if (err) {
          console.log(err);
        } else {
        console.log(data);
          res.json(data);
        }
      })
});

//createWorkout(data = {}) from api.js
//called on exercise.js file under initExercise();
router.post('/api/workouts', (req, res) => {
    Workout.create(req.body)
    .then(dbWorkout => {
        res.json(dbWorkout);
        console.log(dbWorkout);
    })
    .catch((err) => {
        res.json(err);
    });
});

//getWorkoutsInRange() from api.js
router.get('/api/workouts/range', (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
        console.log(dbWorkout);
    })
    .catch((err) => {
        res.json(err);
    });
});

module.exports = router; 