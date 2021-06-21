export interface IUserCreated {
    userId: string;
    phoneNumber: string;
    email: string;
}

export interface IUserUpdated {
    userId: string;
    data: string;
    type: 'email' | 'phone';
}