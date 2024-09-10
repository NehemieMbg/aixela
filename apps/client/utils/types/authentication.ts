export interface AuthResponse {
  id: number;
  username: string;
  accessToken: string;
}

export interface CurrentUser {
  id: number;
  fullName: string;
  email: string;
  avatarUrl: string | null;
  title: string | null;
  location: string | null;
  isConfirmed: boolean;
}
