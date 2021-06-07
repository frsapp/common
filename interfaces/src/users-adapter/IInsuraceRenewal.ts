import {
    // IUserAppCode,
    IVerificationCode
} from './';

export interface IInsuranceRenewal<T> {
    userId: string;
    code: IVerificationCode<T>;
    insuranceName: string;
    insuranceExpiryDate: Date;
    insuranceLogo: string;
    vehicle: string;
}