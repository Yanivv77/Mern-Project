//@desc   Get Goals
//route   Get /api/goals
//access  Private
const getGoals = (req, res) => {
  res.status(200).json({ message: 'Get goals' })
}

//@desc   Set Goals
//route   Post /api/goals
//access  Private
const setGoals = (req, res) => {
  res.status(200).json({ message: 'Set goals' })
}

//@desc   Update Goals
//route   Put /api/goals/:id
//access  Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: 'Update goals' })
}

//@desc   Delete Goals
//route   Delete /api/goals/:id
//access  Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` })
}

module.exports = { getGoals, setGoals, updateGoal, deleteGoal }
