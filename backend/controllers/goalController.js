const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')

//@desc   Get Goals
//route   Get /api/goals
//access  Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find()
  res.status(200).json(goals)
})

//@desc   Set Goals
//route   Post /api/goals
//access  Private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const goal = await Goal.create({ text: req.body.text })
  res.status(200).json(goal)
})

//@desc   Update Goals
//route   Put /api/goals/:id
//access  Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }
  const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updateGoal)
})

//@desc   Delete Goals
//route   Delete /api/goals/:id
//access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)
  if (!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }
  const deleteGoal = await Goal.findByIdAndDelete(req.params.id)

  res.status(200).json(deleteGoal)
})

module.exports = { getGoals, setGoals, updateGoal, deleteGoal }
