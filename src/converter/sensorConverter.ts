import { Range } from "@/Converter/Converter";

function Converter (inRange: number[], outRange: number[], unit: string, rawValue : number) {
    var res = (rawValue/inRange[1])*(outRange[1]-(outRange[0]))+(outRange[1]);
    return res.toFixed(2);
};