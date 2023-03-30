import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { UserService } from './user/user.service';
import { PermissionService } from './permission.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private permissionService: PermissionService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const token = request.headers?.authorization?.replace('Bearer ', '');

    if (!token) return false;

    try {
      jwt.verify(token, process.env.SECRET_JWT);
    } catch (err) {
      return false;
    }

    const decodeToken = jwt.decode(token, { json: true });
    const user = await this.userService.findById(decodeToken.uid);

    return this.checkPermission(request, user);
  }

  async checkPermission(request, user) {
    const resource = request.route.path;
    const action = request.method;

    // melakukan cek permission dari user dan resource
    const hasPermission = await this.permissionService.checkPermission(
      user.role,
      resource,
    );

    if (!hasPermission) {
      throw new ForbiddenException(
        `User role ${user.role} does not have permission to access ${resource} with ${action} method`,
      );
    }

    return true;
  }
}
