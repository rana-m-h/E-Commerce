

// import mongoose from "mongoose"

// export const dbConnection = mongoose.connect('mongodb+srv://rana29638_db_user:mtS6vWuiT9InqIty@cluster0.zgydhbr.mongodb.net/?appName=Cluster0').then(() => {
//     console.log('ok')
// })
import mongoose from "mongoose";

const MONGODB_URL = process.env.DB_URL;

if (!MONGODB_URL) {
    throw new Error("❌ MONGODB_URL is missing");
}

let isConnected = false;

export const connectDB = async () => {
    if (isConnected) return;

    try {
        const db = await mongoose.connect(MONGODB_URL, {
            serverSelectionTimeoutMS: 5000,
        });

        isConnected = db.connections[0].readyState === 1;
        console.log("✅ MongoDB Connected");
    } catch (err) {
        console.error("❌ MongoDB Connection Error", err);
    }
};
