export interface Event {
  id: string;
  type: string;
  description: string;
  location: Location;
  date: string;
  budget: number;
  inviteesAmount: number;
}

export interface Invitee {
  name: string;
}

export interface Location {
  name: string;
  coords: {
    lat: number;
    lng: number;
  };
}
