


import { Schema, Types, model } from "mongoose"


const schema = new Schema({

    name: {
        type: String,
        unique: [true, 'name is required'],
        trim: true,
        required: true,
        minLength: [2, 'too short category name']
    },

    slug: {
        type: String,
        lowercase: true,
        required: true,
        unique: [true, 'name is required'],
    },

    logo: String,

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

    doc.logo =  process.env.BASE_URL +  "brands/" + doc.logo
    
    })
    




export const Brand = model('Brand', schema)
