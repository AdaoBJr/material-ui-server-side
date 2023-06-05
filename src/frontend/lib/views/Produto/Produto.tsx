import React from 'react';
import { Grid } from '@mui/material';

import { ApiError } from 'bff/core';
import { product } from 'frontend/articles';
import { GetProdutoIdService } from 'bff/types/response';
import { Body, Title, Text, Row } from 'frontend/lib/shared';
import { SxContainerProductId, SxTitleProductId } from './syles';

const formatCurrency = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  style: 'currency',
  currency: 'BRL',
};

interface ProductIdProps extends GetProdutoIdService {}

const ProductId: React.FC<ProductIdProps> = ({ data }) => {
  // const { isLoading, data } = useProductId();

  // if (isLoading) return <Title sx={SxTitleProductId}>Loading...</Title>;
  if (data instanceof ApiError) return <Title sx={SxTitleProductId}>Error...</Title>;
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
            {data?.title}
          </Text>
        </Grid>
        <Grid item xs={12}>
          <Row columnGap={6}>
            <Title variant="h6" children="Preço:" />
            <Text>{data?.price.toLocaleString('pt-BR', formatCurrency)}</Text>
          </Row>
        </Grid>
      </Grid>
    </Body>
  );
};

export default ProductId;
