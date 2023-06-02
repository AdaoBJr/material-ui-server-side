import React from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { DevTool } from '@hookform/devtools';

import { claim } from 'frontend/articles';
import { useClaimProductId } from './useClaimProductId';
import { SxFormClaim, SxButtonClaim, SxInputClaim } from './styles';

const ClaimProductId: React.FC = () => {
  const { control, errors, msg, register, handleSubmit, handleClaimProductId } =
    useClaimProductId();

  return (
    <Box
      component="form"
      sx={SxFormClaim}
      onSubmit={handleSubmit(handleClaimProductId)}
      noValidate
    >
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            autoComplete="off"
            placeholder={claim.input.placeholder}
            sx={SxInputClaim}
            {...register('productId', { required: msg.productId })}
            error={!!errors.productId}
            helperText={errors.productId?.message}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={SxButtonClaim}
            endIcon={<ArrowForward />}
          >
            {claim.button}
          </Button>
        </Grid>
        <DevTool control={control} />
      </Grid>
    </Box>
  );
};

export default ClaimProductId;
