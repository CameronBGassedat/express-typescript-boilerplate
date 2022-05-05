import IDatabase from "./IDatabase"
import { TableDict } from "./Dictionnary"

export class Database implements IDatabase {

    getSingle(table : keyof typeof TableDict, idObject : number) {
        return TableDict[table].findById(idObject);
    }

    getAll(table : keyof typeof TableDict) {
        return TableDict[table].find();
    }
    
    deleteOne(table : keyof typeof TableDict, idObject : number) {
        TableDict[table].findByIdAndDelete(idObject);
        return true
    }
    
    updateOne(table: keyof typeof TableDict, idObject : number, obj : any) {
        TableDict[table].findOneAndUpdate({ id : idObject, state : obj.state});
        return true
    }
    
    createOne(table : keyof typeof TableDict, obj : any) {
        TableDict[table].create(obj);
        return true
    }
};
    