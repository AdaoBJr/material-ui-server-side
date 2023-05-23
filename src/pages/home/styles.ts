import { SxProps, Theme } from '@mui/material';

export const SxHome: SxProps<Theme> = {
  backgroundColor: 'grey.900',
};

export const SxTitleHome: SxProps<Theme> = {
  color: 'text.primary',
  fontSize: ({ spacing }) => ({ xs: spacing(8), sm: spacing(12) }),
};

export const SxSubTitleHome: SxProps<Theme> = {
  fontSize: ({ spacing }) => spacing(6),
};

export const SxButtonHome: SxProps<Theme> = {
  backgroundColor: 'warning.main',
  paddingX: 3,
  paddingY: 7,
  width: { xs: '100%', sm: '220px' },
  height: '46px',
  borderRadius: '6px',
  textTransform: 'initial',
  fontSize: ({ spacing }) => spacing(5),
  '&:hover': {
    backgroundColor: 'warning.dark',
  },
};
