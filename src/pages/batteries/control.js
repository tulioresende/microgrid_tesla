export const BatteryStatus = {
    standby: 'Stand-By',
    discharging: 'Descarregando',
    charging: 'Carregando',
    disconnected: 'Desconectado',
};

export const BatteryStatusTranslate = (valueFromBD) =>{
    switch(valueFromBD){
        case 'carga':
            return BatteryStatus.charging;
        case 'Stand-By':
            return BatteryStatus.standby;
        case 'descarga':
            return BatteryStatus.discharging;
        case 'Desconectado':
        default :
            return BatteryStatus.disconnected;
    }
}




export default BatteryStatus;