import { Unit } from '@/common/enums/unit.enum';
import z from 'zod';

export const LoginBodyDto = z.object({
  cardNumber: z.string(),
  password: z.string(),
  unit: z.enum(Unit)
});

export type LoginBodyDto = z.infer<typeof LoginBodyDto>;
