import { SxProps, Theme } from '@mui/material';

export const SxBody: SxProps<Theme> = {
  height: '100vh',
  backgroundColor: 'grey.900',
};

export const SxBodyWrapper: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: { xs: 'stretch', md: 'center' },
  alignItems: 'center',
  padding: 5,
  width: '100%',
  height: '100%',
};
