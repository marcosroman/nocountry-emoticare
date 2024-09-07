

export const isAdmin = (req,res, next) => {
  if(req.user && req.user.rol === 'admin') {
    return next()
  }
  return res.status(403).json({ message: 'No tienes permisos para acceder a esta ruta' })
}