import { IUserAppCode } from './';

export interface IInsuranceRenewal {
    userId: string;
    code: IUserAppCode;
    insuranceName: string;
    insuranceExpiry: string;
    insuranceLogo: string;
    link: string;
    vehicle: string;
}