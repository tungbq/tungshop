import express from 'express'
const router = express.Router()
import { authUser, getUserProfile,registerUser, updateUserProfile } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleWare.js'

router.post('/', registerUser)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)
router.route('/profile').put(protect, updateUserProfile)

export default router