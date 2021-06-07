// export interface IUserAppCode {
//     type: string;
//     value: string;
//     date: number;
//     completed: boolean;
// }


export interface IVerificationCode<T> {
    type: string;
    userId: string;
    value: string;
    expiryDate: Date;
    used: boolean;
    meta: T;
}
export interface IResetData<T> {
    userId: string;
    code: IVerificationCode<T>,
}