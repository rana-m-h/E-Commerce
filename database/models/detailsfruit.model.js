
import { Schema, Types, model } from "mongoose"


const schema = new Schema({

    benefits: {
        type: String,
        unique: [true, 'benefits is required'],
        trim: true,
        required: true,
    },

    Fruit: {

        type: Types.ObjectId,
        ref: "Fruit"

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

export const DetailsFruit = model('DetailsFruit', schema)