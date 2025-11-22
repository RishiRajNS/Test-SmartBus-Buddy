export enum CrowdLevel {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High'
}

export interface Bus {
  id: string;
  routeNumber: string;
  destination: string;
  etaMinutes: number;
  crowdLevel: CrowdLevel;
  hasAC: boolean;
  seatsAvailable: number;
}

export interface SimulationState {
  selectedDestination: string;
  buses: Bus[];
  isLoading: boolean;
  bestBusId: string | null;
}