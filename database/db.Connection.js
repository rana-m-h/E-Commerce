

import mongoose from "mongoose"

export const dbConnection = mongoose.connect('mongodb+srv://rana29638_db_user:PASSWORD@cluster0.zgydhbr.mongodb.net/ecommerce?retryWrites=true&w=majority').then(() => {
    console.log('ok')
})
