import { SxProps, Theme } from '@mui/material';

export const SxFormClaim: SxProps<Theme> = {
  display: 'flex',
  backgroundColor: 'grey.500',
  p: 5,
  borderRadius: ({ shape: { borderRadius } }) => borderRadius,
  width: { xs: '100%', sm: 'max-content' },
  gap: 5,
};

export const SxInputClaim: SxProps<Theme> = {
  '& .MuiInputBase-root': {
    height: '48px',
  },
};

export const SxButtonClaim: SxProps<Theme> = {
  backgroundColor: 'secondary.main',
  paddingX: 7,
  paddingY: 7,
  height: '48px',
  borderRadius: '6px',
  textTransform: 'initial',
  fontSize: ({ spacing }) => spacing(5),
};
