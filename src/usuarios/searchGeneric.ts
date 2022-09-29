// Esta es una f genérica

export const searchGeneric=<T>(data: T, properties: Array<keyof T>, query:string): boolean=>{
    if(query==='') {
      return false;
    } else {
      return properties.some(item=>{
        const value=data[item];
        return (typeof value === 'string' || typeof value === 'number')
                && value.toString().toUpperCase().includes(query.toUpperCase());
      });
    };
};
