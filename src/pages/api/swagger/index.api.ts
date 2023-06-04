import path from 'path';
import { withSwagger } from 'next-swagger-doc';

const apiFolder = path.resolve(__dirname, 'src', 'pages', 'api');

const swaggerHandler = withSwagger({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'NextJS Swagger',
      version: '0.1.0',
    },
  },
  apiFolder,
});
export default swaggerHandler();
