import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { GetProduct } from 'pdv/frontend/types/domain';
import { HttpResponse, useBFFVendas } from 'pdv/frontend/services/infra';

export const useProductId = () => {
  const { isReady, query } = useRouter();
  const { getProductData } = useBFFVendas();
  const [data, setData] = useState<HttpResponse<GetProduct> | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getProduct = async () => {
    const data = await getProductData(query.id as string);
    setIsLoading(false);
    setData(data);
  };

  useEffect(() => {
    isReady && getProduct();
  }, [isReady]);

  return { isLoading, data };
};
