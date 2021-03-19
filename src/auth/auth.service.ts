import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {
  }

  async googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }

    await this.usersService.register(req.user.email, req.user.name);

    return {
      email: req.user.email,
      name: req.user.name,
      jwtToken: this.jwtService.sign({ email: req.user.email, name: req.user.name }),
    };
  }

  async login(user: any) {
    const payload = { email: user.email, name: user.name };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}