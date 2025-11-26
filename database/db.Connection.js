

// import mongoose from "mongoose"

// export const dbConnection = mongoose.connect('mongodb+srv://rana29638_db_user:mtS6vWuiT9InqIty@cluster0.zgydhbr.mongodb.net/?appName=Cluster0').then(() => {
//     console.log('ok')
// })
import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_UR);
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("MongoDB Error:", error);
    }
};
