import { BatteryStatus } from "../../globalVariables/Batteries";

export const BatteryStatusTranslate = (valueFromBD) =>{
    switch(valueFromBD){
        case 'carga':
            return BatteryStatus.charging;
        case 'stand-by':
            return BatteryStatus.standby;
        case 'descarga':
            return BatteryStatus.discharging;
        case 'desconectado':
            return BatteryStatus.disconnected;
        default :
            return BatteryStatus.unknown;
    }
}




export default BatteryStatus;