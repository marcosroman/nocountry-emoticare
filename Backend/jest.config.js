import 'dotenv/config'
export default {
  testEnvironment: 'node', // Establece el entorno de prueba a Node.js
  roots: ['test'], // Define el directorio raíz donde buscará las pruebas
  moduleFileExtensions: ['js', 'json'], // Extensiones de archivos que Jest debe reconocer
  transform: {
    '^.+\\.js$': 'babel-jest', // Transforma los archivos JavaScript usando babel-jest
  },
};