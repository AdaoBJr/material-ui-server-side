import { validation } from 'articles';
import { z } from 'zod';

export const claimUserNameSchema = z.object({
  username: z
    .string()
    .min(3, { message: `${validation.minString} 3 caracteres.` })
    .max(10, { message: `${validation.maxString} 10 caracteres.` })
    .regex(/^[a-zA-Z]+$/i, { message: validation.requiredString }),
});

export type ClaimUserNameData = z.infer<typeof claimUserNameSchema>;
