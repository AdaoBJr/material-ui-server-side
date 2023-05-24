import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { validation } from 'articles';
import { ClaimUserNameData, claimUserNameSchema } from './types';

const defaultValues = { username: '' };

export const useClaimUserName = () => {
  const { control, formState, register, handleSubmit } = useForm<ClaimUserNameData>({
    defaultValues,
    resolver: zodResolver(claimUserNameSchema),
  });
  const { errors } = formState;

  const handleClaimUsername = async (data: ClaimUserNameData) => {
    console.log('data', data);
  };

  const msg = useMemo(
    () => ({
      username: `O usuário ${validation.required}`,
    }),
    []
  );

  return {
    msg,
    errors,
    control,
    register,
    handleSubmit,
    handleClaimUsername,
  };
};
