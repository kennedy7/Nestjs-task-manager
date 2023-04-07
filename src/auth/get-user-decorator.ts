import { createParamDecorator } from '@nestjs/common';

export const getUser = createParamDecorator((data, req) => {
  return req.user;
});
