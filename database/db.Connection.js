

import mongoose from "mongoose"

export const dbConnection = mongoose.connect('mongodb+srv://rana29638_db_user:mtS6vWuiT9InqIty@cluster0.zgydhbr.mongodb.net/?ecommerce=Cluster0').then(() => {
    console.log('ok')
})
