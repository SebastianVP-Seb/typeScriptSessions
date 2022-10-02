export type keysInformationPeople = 'id' | 'first_name' | 'last_name' | 'email' | 'gender';

export interface IObjectInformationPeople {
    name: string,
    isChecked: boolean;
};

export type propertiesKeys=Record<keysInformationPeople, IObjectInformationPeople>;

