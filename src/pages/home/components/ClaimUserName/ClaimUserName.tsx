import React from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { DevTool } from '@hookform/devtools';

import { claim, validation } from 'articles';
import { useClaimUserName } from './useClaimUserName';
import { SxFormClaim, SxButtonClaim, SxInputClaim } from './styles';

const ClaimUserName: React.FC = () => {
  const { control, errors, msg, register, handleSubmit, handleClaimUsername } =
    useClaimUserName();

  return (
    <Box
      component="form"
      sx={SxFormClaim}
      onSubmit={handleSubmit(handleClaimUsername)}
      noValidate
    >
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            autoComplete="off"
            placeholder={claim.input.placeholder}
            sx={SxInputClaim}
            {...register('username', { required: msg.username })}
            error={!!errors.username}
            helperText={errors.username?.message}
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

export default ClaimUserName;
