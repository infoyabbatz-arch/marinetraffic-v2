export interface TrackingEvent {
  date: string;
  title: string;
  location: string;
}

export interface TrackingResult {
  status: string;
  carrier: string;
  reference: string;
  origin: string;
  destination: string;
  eta: string;
  vessel?: string;
  events: TrackingEvent[];
}
