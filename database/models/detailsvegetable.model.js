
import { Schema, Types, model } from "mongoose"

const benefitsSchema = new Schema({
    overview: { type: String, required: true, trim: true },
    heart: [{ type: String }],
    cancer: [{ type: String }],
    digestive: [{ type: String }],
    otherBenefits: [{ type: String }],
    nutritionalValue: [{ type: String }]
});


const schema = new Schema({

    benefits: {
        type: benefitsSchema,
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