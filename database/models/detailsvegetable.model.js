
import { Schema, Types, model } from "mongoose"


const schema = new Schema({

    benefits: {
        type: String,
        unique: [true, 'benefits is required'],
        trim: true,
        required: true,
    },

    Vegetable: {

        type: Types.ObjectId,
        ref: "Vegetable"

    },

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

export const DetailsVegetable = model('DetailsVegetable', schema)