import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { GoogleAuthGuard } from './auth/guards/google-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {
  }

  @Get()
  hello(@Req() req): string {
    return 'Hello from NestJS';
  }

  @UseGuards(GoogleAuthGuard)
  @Get('google')
  async googleAuth(@Req() req) {
  }

  @UseGuards(GoogleAuthGuard)
  @Get('google/redirect')
  googleAuthRedirect(@Req() req) {
    return this.authService.googleLogin(req);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    return req.user;
  }
}
