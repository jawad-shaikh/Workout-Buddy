const mongoose = require('mongoose')
const Workout = require('../models/workoutModel')

// get all workout
const getAllWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find().sort({
            _id: -1
        })
        res.json(workouts)
    } catch (error) {
        res.json({
            "error": error.message
        })
    }
}

// get single workout
const getSingleWorkout = async (req, res) => {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.json({
            "error": "no such workout"
        })
    }

    try {
        const workout = await Workout.find({
            _id: id
        })

        if (!workout) {
            return res.json({
                "error": "no such workout"
            })
        }

        res.json(workout)
    } catch (error) {
        res.json({
            "error": error.message
        })
    }
}

// craete new workout
const createWorkout = async (req, res) => {
    try {
        const workout = await Workout.create({
            ...req.body
        })
        res.json(workout)
    } catch (error) {
        res.json({
            "error": error.message
        })
    }
}

// delete workout
const deleteWorkout = async (req, res) => {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.json({
            "error": "no such workout"
        })
    }

    try {
        const workout = await Workout.findOneAndDelete({
            _id: id
        })

        if (!workout) {
            return res.json({
                "error": "no such workout"
            })
        }

        res.json(workout)
    } catch (error) {
        res.json({
            "error": error.message
        })
    }
}

// update workout
const updateWorkout = async (req, res) => {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.json({
            "error": "no such workout"
        })
    }

    try {
        const workout = await Workout.findOneAndUpdate({
            _id: id
        }, {
            ...req.body
        })

        if (!workout) {
            return res.json({
                "error": "no such workout"
            })
        }

        res.json(workout)
    } catch (error) {
        res.json({
            "error": error.message
        })
    }
}

module.exports = {
    getAllWorkouts,
    getSingleWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}