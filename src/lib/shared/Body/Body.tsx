import React, { PropsWithChildren } from 'react';
import { Box } from '@mui/material';
import { SxBody, SxBodyWrapper } from './styles';

export const Body: React.FC<PropsWithChildren> = ({ children }) => (
  <Box sx={SxBody}>
    <Box sx={SxBodyWrapper}>{children}</Box>
  </Box>
);
