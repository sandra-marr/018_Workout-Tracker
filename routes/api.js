const router = require('express').Router();
const Workout = require('../models/workout.js');


//getLastWorkout() from api.js
//called when the homepage is loaded
router.get('/api/workouts', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
              totalDuration: {
                $sum: '$exercises.duration',
              },
            },
          },
    ])
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err);
    });
});

//addExercise(data) from api.js
//called on exercise.js in the form submission
router.put('/api/workouts/:id', (req, res) => {
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
        if (err) {
          console.log(err);
        } else {
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
    })
    .catch((err) => {
        res.json(err);
    });
});

//getWorkoutsInRange() from api.js
router.get('/api/workouts/range', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
              totalDuration: {
                $sum: '$exercises.duration',
              },
            },
          },
    ])
   .sort({day: -1}).limit(7).sort({day: 1})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err);
    });
});

module.exports = router; 