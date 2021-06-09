export interface IStatistics {
  type?: string;
  items: IStatItems,
  total: {
    [field: string]: number
  }
}

export interface IStatItems {
  [field: string]: {
    _id: string,
    count: number
  }[]
}