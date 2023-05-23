import { useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { validation } from 'articles';
import { ClaimUserNameData } from './types';

const defaultValues = { username: '' };

export const useClaimUserName = () => {
  const { control, formState, register, handleSubmit } = useForm<ClaimUserNameData>({
    defaultValues,
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
