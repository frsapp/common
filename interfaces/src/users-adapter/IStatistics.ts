export interface IStatistics {
  type?: string;
  items: IStatItems;
  total: {
    vehicles: number;
    registeredUsers: number;
    onboardedUsers: number;
    profileCreatedUsers: number;
  }
}

export interface IStatItems {
  [field: string]: {
    _id: string;
    name?: string;
    logo?: string;
    count: number
  }[]
}