import express from 'express'
const router = express.Router()
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser
} from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleWare.js'

router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)
router.route('/profile').put(protect, updateUserProfile)
router.route('/:id').delete(protect, admin, deleteUser)

export default router