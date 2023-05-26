import React from 'react';
import dynamic from 'next/dynamic';

const Info = dynamic(() => import('info/ProductInfo'), { ssr: false });

export const ProductInfoApp: React.FC = () => <Info />;
