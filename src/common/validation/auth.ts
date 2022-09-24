import * as z from 'zod';

export const loginSchema = z.object({
  email: z.string().email({ message: 'البريد الالكتروني غير صحيح' }),
  password: z.string().min(6, 'كلمة المرور يجب ان تكون على الاقل 6 احرف').max(12, 'كلمة المرور يجب ان تكون اقل من 22 حرف'),
});

export const signUpSchema = loginSchema.extend({
  username: z.string(),
});

export type ILogin = z.infer<typeof loginSchema>;
export type ISignUp = z.infer<typeof signUpSchema>;
