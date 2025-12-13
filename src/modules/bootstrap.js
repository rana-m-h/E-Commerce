import addressRouter from "./addresses/addresses.routes.js"
import productRouter from "./product/product.routes.js"
import brandRouter from "./brand/brand.routes.js"
import reviewRouter from "./review/review.routes.js"
import userRouter from "./user/user.routes.js"
import wishlistRouter from "./wishlist/wishlist.routes.js"
import authRouter from "./auth/auth.routes.js"
import fruitRouter from "./category/fruit.routes.js"
import detailsfruitRouter from "./detailsfruit/detailsfruit.routes.js"


export const bootstrap = (app) => {
    app.use('/api/fruits', fruitRouter)
    app.use('/api/detailsfruits', detailsfruitRouter)
    app.use('/api/brands', brandRouter)
    app.use('/api/products', productRouter)
    app.use('/api/users', userRouter)
    app.use('/api/auth', authRouter)
    app.use('/api/reviews', reviewRouter)
    app.use('/api/wishlists', wishlistRouter)
    app.use('/api/addresses', addressRouter)
}