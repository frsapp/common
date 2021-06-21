import {
    IVerificationCode
} from './';

export interface IInsuranceRenewal {
    userId: string;
    code: IVerificationCode;
    insuranceName: string;
    insuranceExpiryDate: string;
    vehicle: string;
    tenant: string;
    broker: string;
}