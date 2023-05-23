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
