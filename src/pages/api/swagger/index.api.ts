import fs from 'fs';
import path from 'path';
import { withSwagger } from 'next-swagger-doc';

// const pathApi = fs.readFileSync(path.join(__dirname, 'pages', 'api'), 'utf8');
const apiFolder = path.join(__dirname, 'src', 'pages', 'api');

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
