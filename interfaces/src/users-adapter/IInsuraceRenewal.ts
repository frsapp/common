import {
    // IUserAppCode,
    IVerificationCode
} from './';

export interface IInsuranceRenewal<T> {
    userId: string;
    code: IVerificationCode<T>;
    insuranceName: string;
    insuranceExpiryDate: string;
    vehicle: string;
    tenant: string;
    broker: string;
}