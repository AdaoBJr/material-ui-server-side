import { Button } from '@mui/material';
import React from 'react';
import { useProductId } from 'services/talons';

const ProductId: React.FC = () => {
  const { getProduct } = useProductId();

  return (
    <div>
      <Button variant="contained" onClick={() => getProduct()}>
        Buscar Produto
      </Button>
    </div>
  );
};

export default ProductId;
