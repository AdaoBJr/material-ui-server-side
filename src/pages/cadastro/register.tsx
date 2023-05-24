import React from 'react';
import { Button, Grid, Stack, TextField } from '@mui/material';

import { Body, Text, Title } from 'lib/shared';
import {
  SxRegister,
  SxButtonRegister,
  SxInputRegister,
  SxTitleRegister,
  SxInputContainerRegister,
} from './styles';
import { register } from 'articles';
import { ArrowForward } from '@mui/icons-material';

const Register: React.FC = () => {
  return (
    <Body>
      <Grid container sx={SxRegister}>
        <Grid item xs={12}>
          <Title variant="h1" sx={SxTitleRegister}>
            {register.title}
          </Title>
        </Grid>
        <Grid item xs={12}>
          <Text variant="body2">{register.subTitle}</Text>
        </Grid>
        <Grid item xs={12} sx={SxInputContainerRegister}>
          <TextField
            name="username"
            fullWidth
            autoComplete="off"
            sx={SxInputRegister}
            label={register.input.username.placeholder}
          />
          <TextField
            name="fullname"
            fullWidth
            autoComplete="off"
            margin="normal"
            sx={SxInputRegister}
            label={register.input.fullname.placeholder}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={SxButtonRegister}
            endIcon={<ArrowForward />}
          >
            {register.button}
          </Button>
        </Grid>
      </Grid>
    </Body>
  );
};

export default Register;
