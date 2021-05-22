import express from 'express'
const router = express.Router()
import { addOrderItems, getOrderById, updateOrderToPaid, getOrders } from '../controllers/orderControllers.js'
import { protect, admin } from '../middleware/authMiddleWare.js'

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)

export default router