import { ITabItem, TypeIdTab, IToDo } from './descriptor/types';

export interface IHeroComp {
    title: string;
    subtitle?: string;
};

/*Extiende la interface para tener esas porpiedades y se le agrega la f para activar el tab en función del 
id que se le pase */
export interface ITabItemComp extends ITabItem {
    activeTabItem: (id: TypeIdTab) => void;
};

export interface ITabsComp {
    getTabSelected: (id: TypeIdTab) => void
};

export interface IErrorsForm {
    message: string
};

export interface IItemToDoComp extends IToDo {
    toggleDone: (id: string)=>void;
    deleteItem: (id: string)=>void;
  };