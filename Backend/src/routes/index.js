import registerRoutes from './register.routes.js'
import loginRoutes from './login.routes.js'
import horariosRoutes from './horarios.routes.js'
import agendamientosRoutes from './agendamientos.routes.js'
import swaggerUI from 'swagger-ui-express'
import specs from '../swagger/swagger.js'
console.log(specs)

export default (app) => {
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs))
  app.use(registerRoutes)
  app.use(loginRoutes)
  app.use(horariosRoutes)
  app.use(agendamientosRoutes)
}
