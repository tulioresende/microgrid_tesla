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
        default :
            return BatteryStatus.disconnected;
    }
}




export default BatteryStatus;