

// import mongoose from "mongoose"

// export const dbConnection = mongoose.connect(process.env.DB_URL).then(() => {
//     console.log('ok')
// })
import mongoose from "mongoose";

const MONGODB_URI = process.env.DB_URL;

if (!MONGODB_URI) {
    throw new Error("Invalid/Missing environment variable: DB_URL");
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
            console.log("MongoDB Connected");
            return mongoose;
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}
