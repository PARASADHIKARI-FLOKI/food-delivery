import express from 'express'
import upload from '../middleware/multer.js'
import { addProduct, listProduct, removeProduct, singleProduct } from '../controller/productController.js'

const productRouter = express.Router()

productRouter.post(
  '/add',
  upload.fields([{ name: 'image', maxCount: 1 }]), 
  addProduct
)

productRouter.post('/remove', removeProduct)
productRouter.post('/list', listProduct)
productRouter.post('/single', singleProduct)

export default productRouter
