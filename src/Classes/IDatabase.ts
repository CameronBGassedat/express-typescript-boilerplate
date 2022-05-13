import { TableDict } from "./Dictionnary"
import { ISensor } from "@/models/Sensor";
import { IUser } from "@/models/User";
import { IActuator } from "@/models/Actuator";

export default interface IDatabase {
    getSingle : (table : keyof typeof TableDict, idObject : number) => Promise<ISensor |  IUser |  IActuator | null>,
    getAll : (table : keyof typeof TableDict) =>  Promise<ISensor[] |  IUser[] |  IActuator[] | null>,
    deleteOne : (table : keyof typeof TableDict, idObject : number) => boolean,
    updateOne : (table: keyof typeof TableDict, idObject : number, obj : any) => boolean,
    createOne : (table : keyof typeof TableDict, obj : any) => boolean
}