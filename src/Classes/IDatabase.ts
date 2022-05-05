import { TableDict } from "./Dictionnary"
import { Sensor } from "@/models/Sensor";
import { User } from "@/models/User";
import { Actuator } from "@/models/Actuator";

export default interface IDatabase {
    getSingle : (table : keyof typeof TableDict, idObject : number) => (typeof Sensor | typeof User | typeof Actuator)| null,
    getAll : (table : keyof typeof TableDict) => typeof Sensor | typeof User | typeof Actuator | null,
    deleteOne : (table : keyof typeof TableDict, idObject : number) => boolean,
    updateOne : (table: keyof typeof TableDict, idObject : number, obj : any) => boolean,
    createOne : (table : keyof typeof TableDict, obj : any) => boolean
}