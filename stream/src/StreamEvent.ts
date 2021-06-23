export enum StreamEvent {
    CUSTOMER_CREATED = 'customerCreated',
    CUSTOMER_UPDATED = 'customerUpdated',

    RENEWAL_STARTED = 'initiateCustomerRenewal',

    DELIVER_SMS = 'sms',
    DELIVER_EMAIL = 'email',
    DELIVER_WHATSAPP = 'whatsapp',

    ONBOARDING_STARTED = 'intiateCustomerOnboarding'
}
