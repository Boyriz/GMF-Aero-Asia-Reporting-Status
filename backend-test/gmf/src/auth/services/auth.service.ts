import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import * as jwt from 'jsonwebtoken';
import { Role } from '../models/role.enum';

@Injectable()
export class AuthService {
  prisma: any;
  constructor(private userService: UserService) {}

  async authenticate(
    email: string,
    password: string,
    role: Role,
  ) {
    try {
      const user =
        await this.userService.validateUser(
          email,
          password,
          role,
        );

      const token = jwt.sign(
        {
          uid: user.id,
        },
        process.env.SECRET_JWT,
        {
          expiresIn: '7d',
        },
      );
      return { token };
    } catch (err) {
      throw err;
    }
  }
}
