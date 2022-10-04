import { IInformationPeople } from "../../usuarios/data/usuariosDB";

export type keysInformationPeople = 'id' | 'first_name' | 'last_name' | 'email' | 'gender';

export type keysOfType=keyof IInformationPeople;

export interface IObjectInformationPeople {
    name: string,
    isChecked: boolean;
};

export type propertiesKeys=Record<keysOfType, IObjectInformationPeople>;

