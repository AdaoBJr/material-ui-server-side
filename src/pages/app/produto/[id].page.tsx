import React from 'react';
import { Grid } from '@mui/material';

import { product } from 'frontend/articles';
import { useProductId } from 'frontend/services/talons';
import { Body, Title, Text, Row } from 'frontend/lib/shared';
import { SxContainerProductId, SxTitleProductId } from './syles';

const formatCurrency = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  style: 'currency',
  currency: 'BRL',
};
const ProductId: React.FC = () => {
  const { isLoading, data } = useProductId();

  if (isLoading) return <Title sx={SxTitleProductId}>Loading...</Title>;
  return (
    <Body>
      <Grid container spacing={10} sx={SxContainerProductId}>
        <Grid item xs={12}>
          <Title variant="h1" sx={SxTitleProductId} textAlign={'center'}>
            {product.title}
          </Title>
        </Grid>
        <Grid item xs={12}>
          <Text variant="h6" textAlign={'center'}>
            {data?.body.title}
          </Text>
        </Grid>
        <Grid item xs={12}>
          <Row columnGap={6}>
            <Title variant="h6" children="Preço:" />
            <Text>{data?.body.price.toLocaleString('pt-BR', formatCurrency)}</Text>
          </Row>
        </Grid>
      </Grid>
    </Body>
  );
};

export default ProductId;
