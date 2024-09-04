import registerRoutes from './register.routes.js'
import loginRoutes from './login.routes.js'
import swaggerUI from 'swagger-ui-express'
import specs from '../swagger/swagger.js'
console.log(specs)
export default (app) => {
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs))
  app.use(registerRoutes)
  app.use(loginRoutes)
}