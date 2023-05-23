import React from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

import { claim } from 'articles';
import { SxFormClaim, SxButtonClaim, SxInputClaim } from './styles';

const ClaimUserName: React.FC = () => {
  return (
    <Box component="form" sx={SxFormClaim}>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6}>
          <TextField placeholder={claim.input.placeholder} fullWidth sx={SxInputClaim} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            fullWidth
            variant="contained"
            sx={SxButtonClaim}
            endIcon={<ArrowForward />}
          >
            {claim.button}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ClaimUserName;
