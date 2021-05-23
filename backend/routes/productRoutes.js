import express from 'express'

const router = express.Router()
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts
} from '../controllers/productController.js'

import { protect, admin } from '../middleware/authMiddleWare.js'

router.route('/')
  .get(getProducts)
  .post(protect, admin, createProduct)

router.route('/top').get(getTopProducts)

router.route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)

router.route('/:id/review').post(protect, createProductReview)


export default router