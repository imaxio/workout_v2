const express = require('express');
const goalController = require('../controllers/goalController');
const router = express.Router();

router.post('/user/:user_id/', goalController.createGoal); // Create a new goal
router.get('/user/:user_id/', goalController.getUserGoals); // Get a goals user
router.get('/', goalController.getAllGoals); // Get all goals
router.get('/:id', goalController.getGoalById); // Get goal by ID
router.put('/:id', goalController.updateGoal); // Update goal by ID
router.delete('/:id', goalController.deleteGoal); // Delete goal by ID

module.exports = router;
