import mongoose from 'mongoose'

const productSchema=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,},
    category:{type:String,required:true},
    image:{type:String,required:true},
   price :{type:Object,required:true},
    date:{type:Number,required:true},
    size:{type:Array,required:true},
    popular:{type:Boolean},
})

const productModel =mongoose.models.product || mongoose.model('product',productSchema)
export default productModel