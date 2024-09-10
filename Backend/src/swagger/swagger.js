import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API Telemedicina',
      version: '1.0.0',
    }
  },
  apis: ["./src/swagger/*.yml"],
};

const specs = swaggerJsdoc(options);

export default specs;
