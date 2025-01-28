export interface UserInfo {
  email: string | null;
  uid: string;
  emailVerified: boolean;
  refreshToken: string;
  events?: Event[];
}
