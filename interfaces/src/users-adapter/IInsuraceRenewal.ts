import {
    // IUserAppCode,
    IVerificationCode
} from './';

export interface IInsuranceRenewal<T> {
    userId: string;
    code: IVerificationCode<T>;
    insuranceName: string;
    insuranceExpiry: string;
    insuranceLogo: string;
    vehicle: string;
}