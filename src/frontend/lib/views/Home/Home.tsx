import React from 'react';
import Image from 'next/image';
import { Box, Grid, Stack } from '@mui/material';

import { home } from 'frontend/articles';
import { Body, Title } from 'frontend/lib/shared';
import { SxTitleHome, SxSubTitleHome } from './styles';
import ClaimProductId from './components/ClaimProductId';
import calendar from 'frontend/assets/images/calendar.png';

const Home: React.FC = () => {
  return (
    <Body>
      <Grid container spacing={10}>
        <Grid item xs={12} md={6}>
          <Stack rowGap={7} marginLeft={{ xs: 0, sm: 12 }}>
            <Title variant="h1" sx={SxTitleHome}>
              {home.title}
            </Title>
            <Title variant="body2" sx={SxSubTitleHome}>
              {home.subTitle}
            </Title>
            <ClaimProductId />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} marginLeft={{ sm: 12, md: 0 }}>
          <Box sx={{ width: { xs: '100%', sm: '460px' } }}>
            <Image src={calendar} alt="imagem de calendário" style={{ width: '100%' }} />
          </Box>
        </Grid>
      </Grid>
    </Body>
  );
};

export default Home;
