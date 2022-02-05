import { IEvento } from "./ievento";

export interface Responses {
    ok?:boolean; 
    evento: IEvento; 
    error?:string;
}

export interface Responses {
    eventos: IEvento[];
}
