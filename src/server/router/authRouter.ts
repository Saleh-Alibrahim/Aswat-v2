import { z } from 'zod';
import { signUpSchema } from '../../common/validation/auth';
import { TRPCError } from '@trpc/server';
import { createRouter } from './context';
import { hash } from 'argon2';

export const authRouter = createRouter().mutation('register', {
  input: signUpSchema,
  resolve: async ({ input, ctx }) => {
    const { username, email, password } = input;
    console.log('input', input);
    const exists = await ctx.prisma.user.findFirst({
      where: { email },
    });
    if (exists) {
      throw new TRPCError({
        code: 'CONFLICT',
        message: 'هذا البريد الالكتروني مستخدم من قبل',
      });
    }

    const hashedPassword = await hash(password);

    const result = await ctx.prisma.user.create({
      data: { username, email, password: hashedPassword },
    });
    return {
      status: 201,
      message: 'تم انشاء الحساب بنجاح',
    };
  },
});
