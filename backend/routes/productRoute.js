import express from 'express'
import upload from '../middleware/multer.js'
import { addProduct, listProduct, removeProduct, singleProduct } from '../controller/productController.js'
import adminAuth from '../middleware/adminAuth.js'

const productRouter = express.Router()

productRouter.post(
  '/add',adminAuth,
  upload.fields([{ name: 'image', maxCount: 1 }]), 
  addProduct
)

productRouter.post('/remove',adminAuth, removeProduct)
productRouter.post('/list', listProduct)
productRouter.get('/single', singleProduct)

export default productRouter
