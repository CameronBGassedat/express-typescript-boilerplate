import IDatabase from "./IDatabase"
import { TableDict } from "./Dictionnary"
import mongoose from "mongoose";

export class Database implements IDatabase {

    async getSingle(table : keyof typeof TableDict, idObject : number) {
        return await (TableDict[table] as mongoose.Model<any>).findById(idObject);
    }

    async getAll(table : keyof typeof TableDict) {
        return await (TableDict[table] as mongoose.Model<any>).find();
    }
    
    deleteOne(table : keyof typeof TableDict, idObject : number) {
        TableDict[table].findByIdAndDelete(idObject);
        return true
    }
    
    updateOne(table: keyof typeof TableDict, idObject : number, obj : any) {
        (TableDict[table]as mongoose.Model<any>).findOneAndUpdate({ id : idObject, state : obj.state});
        return true
    }
    
    createOne(table : keyof typeof TableDict, obj : any) {
        TableDict[table].create(obj);
        return obj._id
    }
    
};
    