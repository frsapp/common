export enum StreamEvent {
    // customer stream
    CUSTOMER_CREATED = 'customerCreated',
    CUSTOMER_UPDATED = 'customerUpdated',

    // renewal stream
    RENEWAL_STARTED = 'initiateCustomerRenewal',

    //delivery stream
    DELIVER_SMS = 'sms',
    DELIVER_EMAIL = 'email',
    DELIVER_WHATSAPP = 'whatsapp',

    // onboarding stream
    ONBOARDING_STARTED = 'intiateCustomerOnboarding'
}
