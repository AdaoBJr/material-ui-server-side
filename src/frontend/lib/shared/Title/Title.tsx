import React from 'react';
import { Typography } from '@mui/material';
import { TitleProps } from 'frontend/types/shared';

export const Title: React.FC<TitleProps> = ({ children, ...rest }) => (
  <Typography {...rest}>{children}</Typography>
);
