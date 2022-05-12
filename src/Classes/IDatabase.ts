import { TableDict } from "./Dictionnary"
import { ISensor, Sensor } from "@/models/Sensor";
import { IUser, User } from "@/models/User";
import { Actuator, IActuator } from "@/models/Actuator";

export default interface IDatabase {
    getSingle : (table : keyof typeof TableDict, idObject : number) => ( ISensor |  IUser |  IActuator)| null,
    getAll : (table : keyof typeof TableDict) =>  ISensor |  IUser |  IActuator | null,
    deleteOne : (table : keyof typeof TableDict, idObject : number) => boolean,
    updateOne : (table: keyof typeof TableDict, idObject : number, obj : any) => boolean,
    createOne : (table : keyof typeof TableDict, obj : any) => boolean
}