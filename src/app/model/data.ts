export interface IUser {
    userName: string;
    userId: string;
    userRole: string;
    profileDescription: string;
    profileImage: string;
    skills: string[];
    experienceYears: number;
    isActive: boolean;

    address: {
        current: {
            city: string;
            state: string;
            country: string;
            zipcode: string;
        };
        permanent: {
            city: string;
            state: string;
            country: string;
            zipcode: string;
        };
    };
}