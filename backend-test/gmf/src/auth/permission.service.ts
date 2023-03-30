import { Injectable } from '@nestjs/common';

@Injectable()
export class PermissionService {
  async checkPermission(request, user) {
    // Logika untuk memeriksa permission user
    // Misalnya, cek jika user memiliki role tertentu
    const role = user.role;
    if (role === 'admin') {
      // Jika user adalah admin, memberikan akses penuh
      return true;
    } else if (role === 'user') {
      // Jika user adalah user biasa, cek jika memiliki permission
      // untuk melakukan aksi tertentu pada endpoint tertentu
      const endpoint = request.route.path;
      if (endpoint === '/home-user') {
        return true;
      } else {
        return false;
      }
    } else {
      // Jika role tidak ditemukan, tidak memberikan akses
      return false;
    }
  }
}
