import { SxProps, Theme } from '@mui/material';

export const SxContainerProductId: SxProps<Theme> = {
  backgroundColor: 'grey.500',
  p: 5,
  borderRadius: ({ shape: { borderRadius } }) => borderRadius,
  width: { xs: '125%', md: '1000px' },
};

export const SxTitleProductId: SxProps<Theme> = {
  color: 'text.primary',
  fontSize: ({ spacing }) => spacing(7),
};
