import { Event as EventType } from "../Event/types";

export interface UserInfo {
  email: string | null;
  uid: string;
  emailVerified: boolean;
  refreshToken: string;
  events?: EventType[];
}
