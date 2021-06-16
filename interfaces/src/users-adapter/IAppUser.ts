export interface IVerificationCode {
    value: string;
    createdAt: Date;
}
export interface IResetData {
    userId: string;
    code: IVerificationCode
}