export enum StreamEvent {

    // customer stream
    CUSTOMER_CREATED = 'customerCreated',
    CUSTOMER_PHONE_UPDATED = 'customerPhoneUpdated',
    CUSTOMER_EMAIL_UPDATED = 'customerEmailUpdated',

    // renewal stream
    CUSTOMER_INSURANCE_RENEWAL_EMAIL = 'customerInsuranceRenewalEmail',
    CUSTOMER_INSURANCE_RENEWAL_SMS = 'customerInsuranceRenewalSMS',
    CUSTOMER_INSURANCE_RENEWAL_WHATSAPP = 'customerInsuranceRenewalWhatsapp',

    //delivery stream
    DELIVER_SMS = 'sms',
    DELIVER_EMAIL = 'email',
    DELIVER_WHATSAPP = 'whatsapp',

    // onboarding stream
    ONBOARDING_STARTED = 'onboardingStarted'
}
