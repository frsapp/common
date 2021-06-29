export interface IUserCreated {
    userId: string;
    name: string;
    phoneNumber?: string;
    email?: string;
    broker: string;
    tenant: string;
    role: string[];
    sendNotification?: boolean;
}

export interface IUserUpdated {
    userId: string;
    data: string;
    type: 'email' | 'phoneNumber';
}