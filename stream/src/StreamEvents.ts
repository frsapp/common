export enum StreamEvents {
    CUSTOMER_PASS_RESET = 'customerPasswordReset',
    CUSTOMER_CREATED = 'customerCreated',
    CUSTOMER_PHONE_UPDATED = 'customerPhoneUpdated',
    CUSTOMER_EMAIL_UPDATED = 'customerEmailUpdated',
    CUSTOMER_INSURANCE_RENEWAL_EMAIL = 'customerInsuranceRenewalEmail',
    CUSTOMER_INSURANCE_RENEWAL_SMS = 'customerInsuranceRenewalSMS',
    DELIVER_SMS = 'sms',
    DELIVER_EMAIL = 'email'
}
