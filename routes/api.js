const router = require('express').Router();
const db = require('../models');

router.get('/api/workouts', (req, res) => {
    db.Workout.find({})
    // .populate("exercises")
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err);
    });
});

module.exports = router;