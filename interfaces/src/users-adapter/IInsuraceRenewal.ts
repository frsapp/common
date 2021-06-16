import {
    IVerificationCode
} from './';

export interface IInsuranceRenewal {
    code: IVerificationCode;
    insuranceName: string;
    insuranceExpiryDate: string;
    vehicle: string;
    tenant: string;
    broker: string;
}