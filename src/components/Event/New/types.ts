import { LatLng } from "leaflet";

export interface FormNewEventData {
  type: string;
  range: number;
  description: string;
  budget: number;
  date: string;
  locations: readonly {
    label: string;
    value: string;
  }[];
  inviteesAmount: number;
  position: LatLng;
}

export type EventCreationStatus =
  | "form"
  | "pending"
  | "confirmation"
  | "success";
