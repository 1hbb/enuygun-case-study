export type HomeProps = {
    data: Emps;
};

export type Emps = {
    employee: Employees
}


export interface Employee {
    __typename: string;
    id: string;
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    upvote: number;
    job: string;
    photo: string;
    phone: string;
}

export interface Employees {
    __typename: string;
    employees: Employee[];
}

export interface UserState {
    entities: Employee[];
    loading: boolean;
    value: string;
}