

import { Schema, Types, model } from "mongoose"


const schema = new Schema({

    title: {
        type: String,
        unique: [true, 'name is required'],
        trim: true,
        required: true,
        minLength: [2, 'too short category name']
    },

    slug: {
        type: String,
        lowercase: true,
        required: true
    },

    logo: String,

    description: {
        type: String,
        required: true,
        minLength: 30,
        maxLength: 2000,
    },


    imageCover: String,



    images: [String],


    price: {
        type: Number,
        required: true,
        min: 0,
    },



    priceAfterDicsount: {
        type: Number,
        required: true,
        min: 0,
    },


    sold: Number,


    stock: {
        type: Number,
        min: 0,
    },


    category: {
        type: Types.ObjectId,
        ref: 'Category'

    },


    subcategory: {
        type: Types.ObjectId,
        ref: 'SubCategory'

    },


    brand: {
        type: Types.ObjectId,
        ref: 'Brand'

    },


    retAvg: {
        type: Number,
        min: 0,
        max: 5
    },


    rateCount: Number,


    createdBy: {
        type: Types.ObjectId,
        ref: 'User'
    },


  


}, {

    timestamps: {
        createdAt: "publishedDate",
        updatedAt: false
    },
    versionKey: false
})


schema.post('init' , function(doc){

     if(doc.imageCover) doc.imageCover = process.env.BASE_URL + "products/" + doc.imageCover
    if(doc.images) doc.images = doc.images.map(img=>  process.env.BASE_URL + "products/" + img)
    
    })
    


export const Product = model('Product', schema)
