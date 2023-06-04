import { withSwagger } from 'next-swagger-doc';
import { getEnv } from 'environment';

const env = getEnv();
const apiFolder = env.SERVER_ENV === 'local' ? 'src/pages/api' : 'pages/api';

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
