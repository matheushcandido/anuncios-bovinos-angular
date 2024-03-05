import { Address } from "./address.model";

export interface User {
    id: string;
    name: string;
    login: string;
    password: string;
    role: string;
    status: string;
    address: Address;
}  