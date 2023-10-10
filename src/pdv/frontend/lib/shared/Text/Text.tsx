import React from 'react';
import { Typography } from '@mui/material';
import { TextProps } from 'pdv/frontend/types/shared';

export const Text: React.FC<TextProps> = ({ children, ...rest }) => (
  <Typography {...rest}>{children}</Typography>
);
