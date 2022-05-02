export interface TableProps {
    headers: string[];
    data: any[];
    headerColor?: string;
}

export interface Contact {
    ContactPerson: string;
    Position: string;
    EmailAddress: string;
    PhoneNumber: string;
}

export interface Device {
    OccuredDate : string;
    Device: string;
    Status: 'Unavailable' | 'Available';
}