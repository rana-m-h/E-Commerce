import userRouter from "./user/user.routes.js"
import authRouter from "./auth/auth.routes.js"
import fruitRouter from "./fruit/fruit.routes.js"
import detailsfruitRouter from "./detailsfruit/detailsfruit.routes.js"
import vegetableRouter from "./vegetable/vegetable.routes.js"
import detailsvegetableRouter from "./detailsfvegetable/detailsvegetable.routes.js"
import herbsRouter from "./herbs/herbs.routes.js"
import detailsherbsRouter from "./detailsherbs/detailsherbs.routes.js"


export const bootstrap = (app) => {
    app.use('/api/fruits', fruitRouter)
    app.use('/api/vegetables', vegetableRouter)
    app.use('/api/herbs', herbsRouter)
    app.use('/api/detailsfruits', detailsfruitRouter)
    app.use('/api/detailsvegetables', detailsvegetableRouter)
    app.use('/api/detailsherbs', detailsherbsRouter)
    app.use('/api/users', userRouter)
    app.use('/api/auth', authRouter)

}