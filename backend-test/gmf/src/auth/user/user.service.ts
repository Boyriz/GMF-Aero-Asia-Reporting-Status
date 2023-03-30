/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

const SALT_PASSWORD = 12;

@Injectable()
export class UserService {
  userRepository: any;
  findById(uid: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private prismaClient: PrismaService) {}

  async create(user: Prisma.UserCreateInput) {
    if (user.hashedPassword) {
      user.hashedPassword = await bcrypt.hash(user.hashedPassword, SALT_PASSWORD);
    }
    const userData = await this.prismaClient.user.create({
      data: user,
    });
    delete userData.hashedPassword;
    return userData;
  }

  async findOne(user: { id?: string; email?: string }) {
    const userData = await this.prismaClient.user.findUnique({
      where: user,
    });
    if (!userData) return null;
    return userData;
  }

  async validateUser(email: string, password: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) throw new UnauthorizedException();
    if (!(await bcrypt.compare(password, user.password)))
      throw new UnauthorizedException();

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new AuthenticationFailedExecption();
    delete user.password;
    return user;
  }
}

class UserNotFoundException extends Error {
  name = 'UserNotFoundExecption';
  message = 'User not found';
}

class AuthenticationFailedExecption extends Error {
  name = 'AuthenticationFailedExecption';
  message = 'Password is wrong';
}