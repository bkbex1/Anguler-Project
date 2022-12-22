import { IAddress } from "./addreses";
import { ICompany } from "./company";

export interface IUser{
    "id": number,
    "firstName": String,
    "lastName": String,
    "maidenName": String,
    "age": number,
    "gender": String,
    "username": String,
    "email": String,
    "password": String,
    "birthDate": String,
    "address": IAddress,
    "phone": String,
    "company": ICompany,
    "website": string,
    "image": string,
    "height": number,
    "weight": number,
    "postalCode": string,
    "state": string,
    "university": string,
    "token": String,
  }

  export interface bootUser{
    users:IUser[]
  }
