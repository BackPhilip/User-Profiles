export interface User 
{
    id?: string;
    title: string;
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: string;
    registerDate: string;
    email: string;
    phone: number;
    picture: string;

    location: {
        state: string,
        street: string,
        city: string,
        country: string
    }
}