import { GetServerSideProps } from 'next';

import { ApiError } from 'bff/core';
import { findProdutoService } from 'bff/services';
import { GetProdutoIdService } from 'bff/types/response';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const produto = query.id as string;

  const getProducts = async () => {
    let response: GetProdutoIdService | ApiError;
    try {
      response = await findProdutoService.execute({ produto });
    } catch (e) {
      if (e instanceof ApiError) {
        response = { status: e.status, data: e };
      } else {
        throw new Error(`Unexpected error: Get Produto`);
      }
    }
    return response;
  };

  const { data, status } = await getProducts();

  return {
    props: {
      data,
      status,
    },
  };
};
