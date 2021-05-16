export interface IUserAppCode {
    value: string;
    date: number;
    completed: boolean;
}

export interface IResetData {
    userId: string;
    code: IUserAppCode,
}