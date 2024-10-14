// src/app/models/login-response.model.ts
export interface LoginResponse {
  jwtToken: string;
  username: string;
  roles: string[];
}
