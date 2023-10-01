import React from 'react';
import dynamic from 'next/dynamic';

interface ProductProps {
  produtoId: string;
}

const Info = dynamic<ProductProps>(() => import('info/ProductInfo'), { ssr: false });

export const ProductInfoApp: React.FC<ProductProps> = ({ produtoId }) => (
  <Info produtoId={produtoId} />
);
