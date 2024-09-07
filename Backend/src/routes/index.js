import registerRoutes from './register.routes.js'
import loginRoutes from './login.routes.js'
import logoutRoutes from './logout.routes.js'
import authRoutes from './auth.routes.js'
import adminRoutes from './admin.routes.js'
import patientRoutes from './patient.routes.js'
import doctorRoutes from './doctor.routes.js'
import swaggerUI from 'swagger-ui-express'
import specs from '../swagger/swagger.js'
export default (app) => {
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs))
  app.use(registerRoutes)
  app.use(loginRoutes)
  app.use(logoutRoutes)
  app.use(authRoutes)
  app.use(adminRoutes)
  app.use(patientRoutes)
  app.use(doctorRoutes)
}