
import { Schema, Types, model } from "mongoose"


const schema = new Schema({

    details: {
        type: String,
        unique: [true, 'details is required'],
        trim: true,
        required: true,
    },

    Herbs: {

        type: Types.ObjectId,
        ref: "Herbs"

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

export const DetailsHerbs = model('DetailsHerbs', schema)