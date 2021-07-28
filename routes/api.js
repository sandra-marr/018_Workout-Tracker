const router = require('express').Router();
const db = require('../models');


//getLastWorkout() from api.js
//called when the homepage is loaded
router.get('/api/workouts', (req, res) => {
    db.Workout.find({})
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
router.put('api/workouts/:id', (req, res) => {
    db.Workout.updateOne(
        {
            id: mongojs.ObjectId(req.params.id)
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
    db.Workout.insert({})
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
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
        console.log(dbWorkout);
    })
    .catch((err) => {
        res.json(err);
    });
});

module.exports = router; 