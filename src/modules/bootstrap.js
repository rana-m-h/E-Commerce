import productRouter from "./product/product.routes.js"
import userRouter from "./user/user.routes.js"
import authRouter from "./auth/auth.routes.js"
import fruitRouter from "./fruit/fruit.routes.js"
import detailsfruitRouter from "./detailsfruit/detailsfruit.routes.js"
import vegetableRouter from "./vegetable/vegetable.routes.js"


export const bootstrap = (app) => {
    app.use('/api/fruits', fruitRouter)
    app.use('/api/detailsfruits', detailsfruitRouter)
    app.use('/api/vegetable', vegetableRouter)
    app.use('/api/products', productRouter)
    app.use('/api/users', userRouter)
    app.use('/api/auth', authRouter)

}