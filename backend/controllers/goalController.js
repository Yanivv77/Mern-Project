const asyncHandler = require('express-async-handler')

//@desc   Get Goals
//route   Get /api/goals
//access  Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get goals' })
})

//@desc   Set Goals
//route   Post /api/goals
//access  Private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }
  res.status(200).json({ message: 'Set goals' })
})

//@desc   Update Goals
//route   Put /api/goals/:id
//access  Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Update goals' })
})

//@desc   Delete Goals
//route   Delete /api/goals/:id
//access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` })
})

module.exports = { getGoals, setGoals, updateGoal, deleteGoal }
