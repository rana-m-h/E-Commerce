

// import mongoose from "mongoose"

// export const dbConnection = mongoose.connect(process.env.UPSTASH_REDIS_REST_URL).then(() => {
//     console.log('ok')
// })
// // 'mongodb://127.0.0.1:27017/ECommerce'
import { Redis } from '@upstash/redis';

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_URL,
    token: process.env.UPSTASH_REDIS_TOKEN
});
