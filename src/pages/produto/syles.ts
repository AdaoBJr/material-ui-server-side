import { SxProps, Theme } from '@mui/material';

export const SxContainerProductId: SxProps<Theme> = {
  backgroundColor: 'grey.500',
  p: 5,
  borderRadius: ({ shape: { borderRadius } }) => borderRadius,
  width: { xs: '100%', sm: 'max-content' },
  gap: 5,
};

export const SxTitleProductId: SxProps<Theme> = {
  color: 'text.primary',
  fontSize: ({ spacing }) => ({ xs: spacing(4), sm: spacing(7) }),
};
