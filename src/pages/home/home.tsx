import React from 'react';
import Image from 'next/image';
import { Box, Button, Grid, Stack } from '@mui/material';

import { home } from 'articles';
import { Body, Title } from 'lib/shared';
import calendar from 'assets/images/calendar.png';
import { SxTitleHome, SxButtonHome, SxSubTitleHome } from './styles';

const Home: React.FC = () => {
  return (
    <Body>
      <Grid container spacing={10}>
        <Grid item xs={12} sm={6}>
          <Stack rowGap={7} marginLeft={{ xs: 0, sm: 12 }}>
            <Title variant="h1" sx={SxTitleHome}>
              {home.title}
            </Title>
            <Title variant="body2" sx={SxSubTitleHome}>
              {home.subTitle}
            </Title>
            <Button variant="contained" sx={SxButtonHome}>
              {home.button}
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ width: { xs: '100%', sm: '460px' } }}>
            <Image src={calendar} alt="imagem de calendário" style={{ width: '100%' }} />
          </Box>
        </Grid>
      </Grid>
    </Body>
  );
};

export default Home;
