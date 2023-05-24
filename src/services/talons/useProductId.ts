import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { HttpResponse, apiBFF, useBFFVendas } from 'services/infra';
import { GetProduct } from 'types/domain';

export const useProductId = () => {
  const { query } = useRouter();

  const { getProductData } = useBFFVendas();
  const [data, setData] = useState<HttpResponse<GetProduct> | null>(null);
  console.log('data', data);
  const getProduct = async () => {
    const data = await getProductData(query.id as string);
    setData(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return { data, getProduct };
};
