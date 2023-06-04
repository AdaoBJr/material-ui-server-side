import path from 'path';
import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Box } from '@mui/material';

import 'swagger-ui-react/swagger-ui.css';
/* @ts-ignore */
const SwaggerUI = dynamic<{ url: string }>(import('swagger-ui-react'), {
  ssr: false,
});

const swaggerFolder = path.resolve(__dirname, 'api', 'swagger');

const Swagger: React.FC = () => (
  <Box>
    <Head>
      <title>Swagger</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <SwaggerUI url={swaggerFolder} />
  </Box>
);
export default Swagger;
