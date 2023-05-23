import { z } from 'zod';

export const claimUserNameSchema = z.object({
  username: z.string(),
});

export type ClaimUserNameData = z.infer<typeof claimUserNameSchema>;
