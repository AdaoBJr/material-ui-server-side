import { SxProps, Theme } from '@mui/material';

export const SxRegister: SxProps<Theme> = {
  display: 'grid',
  placeItems: 'center',
  gap: 7,
  width: { xs: '100%', sm: '572px' },
  padding: 5,
  borderRadius: '6px',
};

export const SxTitleRegister: SxProps<Theme> = {
  color: 'text.primary',
  fontSize: ({ spacing }) => ({ xs: spacing(4), sm: spacing(7) }),
};

export const SxInputContainerRegister: SxProps<Theme> = {
  backgroundColor: 'grey.500',
  borderRadius: '6px',
  padding: 5,
  width: '100%',
};

export const SxInputRegister: SxProps<Theme> = {
  backgroundColor: 'grey.900',
  borderRadius: '6px',
};

export const SxButtonRegister: SxProps<Theme> = {
  backgroundColor: 'secondary.main',
  paddingX: 7,
  paddingY: 7,
  height: '48px',
  marginTop: 4,
  borderRadius: '6px',
  textTransform: 'initial',
  fontSize: ({ spacing }) => spacing(5),
};
