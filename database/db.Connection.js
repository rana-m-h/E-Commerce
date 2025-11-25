

// import mongoose from "mongoose"

//  export const dbConnection =  mongoose.connect('mongodb://127.0.0.1:27017/ECommerce').then(()=>{
//     console.log('ok')
// })
import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, // زيادة وقت الانتظار
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1); // لو فشل الاتصال، الخروج من التطبيق
    }
};
