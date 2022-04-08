export function Converter (type: String, rawValue: number) {
    var rangeTemp: [number, number] = [-20, 55];
    var rangeHum: [number, number] = [0, 100];
    var rangeBaro: [number, number] = [950, 1150];
    var res;

    switch (type) {
        case "TEMPERATURE":
            res = rawToFormatted(rangeTemp, rawValue);
            return res.toFixed(1);

        case "HUMIDITY":
            res = rawToFormatted(rangeHum, rawValue);
            return res.toFixed(0);

        case "BAROMETER":
            res = rawToFormatted(rangeBaro, rawValue);
            return res.toFixed(0);
            
        default:
            break;
    }
};

const rawToFormatted = (range: [number, number], rawValue: number): number =>{
    return (rawValue/1023)*(range[1]-(range[0]))+(range[0])
}