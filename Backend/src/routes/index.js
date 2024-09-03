import registerRoutes from './register.routes.js'
import loginRoutes from './login.routes.js'

export default (app) => {
  app.use(registerRoutes)
  app.use(loginRoutes)
}