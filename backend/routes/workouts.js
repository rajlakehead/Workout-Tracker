const express = require('express')
const Workout = require('../models/workoutModel')
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deletWorkout,
  updateWorkout
} = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deletWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)

module.exports = router