import express from 'express'
const router = express.Router()
import { addOrderItems } from '../controllers/orderControllers.js'
import { protect } from '../middleware/authMiddleWare.js'

router.route('/').post(protect, addOrderItems)

export default router