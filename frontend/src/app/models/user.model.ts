import { Address } from "./address.model";
import { Contact } from "./contact.model";

export interface User {
    id: string;
    name: string;
    login: string;
    password: string;
    role: string;
    status: string;
    address: Address;
    contact: Contact;
}  