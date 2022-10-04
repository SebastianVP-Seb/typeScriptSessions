import { TypeInput } from "./InputGeneric";

interface IValuesFields {
    name: string;
    value: string;
    label: string;
    type: TypeInput;
    regExp?: RegExp;
};

export interface IInputsFields {
    name: IValuesFields;
    address: IValuesFields;
    email: IValuesFields;
    phone: IValuesFields;
};

// El name tiene que ser igual a la propiedad
export const ObjectInputsFields:IInputsFields = {
    name: { value: '', type: 'text', regExp: /\a/, name: 'name', label: 'Name' },
    address: { value: '', type: 'text', regExp: /\a/, name: 'address', label: 'Address' },
    email: { value: '', type: 'email', regExp: /\a/, name: 'email', label: 'Email' },
    phone: { value: '', type: 'tel', regExp: /\a/, name: 'phone', label: 'Phone' },
};
