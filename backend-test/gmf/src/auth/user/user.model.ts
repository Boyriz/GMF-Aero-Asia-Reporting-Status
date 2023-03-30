// src/auth/user/user.model.ts
export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    role?: string;
  }
  