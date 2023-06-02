import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { validation } from 'frontend/articles';
import { ClaimProductIdData, claimProductIdSchema } from './types';

const defaultValues = { productId: '' };

export const useClaimProductId = () => {
  const { push } = useRouter();

  const { control, formState, register, handleSubmit } = useForm<ClaimProductIdData>({
    defaultValues,
    resolver: zodResolver(claimProductIdSchema),
  });
  const { errors } = formState;

  const handleClaimProductId = async (data: ClaimProductIdData) => {
    !errors.productId && push(`app/produto/${data.productId}`);
  };

  const msg = useMemo(
    () => ({
      productId: `O produto ${validation.required}`,
    }),
    []
  );

  return {
    msg,
    errors,
    control,
    register,
    handleSubmit,
    handleClaimProductId,
  };
};
