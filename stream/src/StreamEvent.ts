export enum StreamEvent {
    CUSTOMER_CREATED = 'customerCreated',
    CUSTOMER_UPDATED = 'customerUpdated',

    BROKER_CREATED = 'brokerCreated',
    BROKER_UPDATED = 'brokerUpdated',

    INSURANCE_CREATED = 'insuranceCreated',
    INSURANCE_UPDATED = 'insuranceUpdated',

    RENEWAL_STARTED = 'initiateCustomerRenewal',

    DELIVER_SMS = 'sms',
    DELIVER_EMAIL = 'email',
    DELIVER_WHATSAPP = 'whatsapp',

    ONBOARDING_STARTED = 'intiateCustomerOnboarding'
}
