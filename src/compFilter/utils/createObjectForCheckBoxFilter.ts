import { randomData } from "../../usuarios/data/randomData";

interface IObjectForCheckBox<U> {
    objectModel: U;
};

interface IStructureCheckBox {
    name: string;
    isChecked: boolean;
};

export type propertiesKeys<V>=Record<keyof V, IStructureCheckBox>;

/*Tenemos que asegurarle que T es un obj, por lo tanto hacemos el extends {} */

export const createObjectForCheckBoxFilter=<T extends {}>({objectModel}: IObjectForCheckBox<T>): propertiesKeys<T>=>{
    const arrayKeys=Object.keys(objectModel) as Array<keyof T>;
    const createObjectState: any={};
    arrayKeys.forEach(item=>{
        Object.assign(createObjectState, {
            [item]: { name: item, isChecked: false }
        });
    });
    // console.log(createObjectState);
    return createObjectState;
};

//Para probar con people o randomData que genera las keys dinámicas al recibir un objeto
createObjectForCheckBoxFilter({objectModel: randomData[0]})