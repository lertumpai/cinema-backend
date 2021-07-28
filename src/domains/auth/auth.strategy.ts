import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

function cookieExtractor(req) {
  return req.cookies['token']
}

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: cookieExtractor,
      secretOrKey: 'secret',
    });
  }

  validate(payload: any) {
    return payload;
  }
}