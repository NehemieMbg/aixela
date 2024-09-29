import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export const OptionalAuth = createParamDecorator(
  async (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const authorization = request.headers.authorization;
    const token = authorization?.split(' ')[1];

    if (!token) {
      return null;
    }

    const jwt: JwtService = new JwtService({
      secret: process.env.JWT_SECRET,
    });

    try {
      return await jwt.verifyAsync(token);
    } catch (error) {
      return null;
    }
  },
);
