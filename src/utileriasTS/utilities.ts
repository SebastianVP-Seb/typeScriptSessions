import { IInformationPeople } from '../usuarios/data/usuariosDB';
import { IRandomData } from '../usuarios/data/randomData';

type keys = keyof IInformationPeople;

const keysPeople:keys='first_name'; 

const anotherPerson:Pick<IInformationPeople, 'email'> = {
    email: ''
};

const personOne:Omit<IInformationPeople, 'email'> = {
    "id": 1,
    "first_name": "Nonna",
    "last_name": "Blackeby",
    // "email": "nblackeby0@thetimes.co.uk", el email ya no lo permite
    "gender": "Female"
};

const printUser=(personOne: Readonly<IInformationPeople>)=>{
    console.log(personOne.gender);
};

const hola:Readonly<IInformationPeople> = {
    "id": 1,
    "first_name": "Nonna",
    "last_name": "Blackeby",
    "email": "nblackeby0@thetimes.co.uk",
    "gender": "Female"
};

//Record
type keyOfInfoPeople = | 'id' | 'first_name' | 'last_name' | 'email' ;

const createKeys=():Record<string, IInformationPeople> => {
    return {
        
    };
};

//exlude, hacia varaibles no a interfaces
function exlclude1(fruit: Exclude<'apple' | 'melon' | 'strawberry', 'apple'>) {
    fruit='strawberry'
};

function exlclude2(fruit: Exclude<keyof IInformationPeople, 'email'>) {
    // fruit='strawberry'
    fruit='first_name' //no aparece el email
};

function exclude3(data: Exclude<IInformationPeople | IRandomData, IInformationPeople>) {
    // data={
        
    // }
};
