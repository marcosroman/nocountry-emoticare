import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Telemedicina',
      version: '1.0.0',
    },
  },
  apis: ["./src/swagger/*.yml"], // Ruta de los archivos YAML que contienen la documentación
};

const specs = swaggerJsdoc(options);

export default specs;