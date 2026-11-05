
import { Schema, Types, model } from "mongoose"


const schema = new Schema({

    // Content used by the fruit detail page.
    description: {
        type: String,
        trim: true,
        default: "",
    },

    nutrition: {
        grams: { type: Number, min: 0 },
        calories: { type: Number, min: 0 },
        fat: { type: Number, min: 0 },
    },

    benefits: [{
        title: { type: String, trim: true, required: true },
        subtitle: { type: String, trim: true, default: "" },
        description: { type: String, trim: true, default: "" },
        icon: { type: String, trim: true, default: "" },
        color: { type: String, trim: true, default: "" },
    }],

    Fruit: {

        type: Types.ObjectId,
        ref: "Fruit",
        required: true,
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
