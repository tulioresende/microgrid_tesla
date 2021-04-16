import { BatteryStatus } from "../../../globalVariables/Batteries";

export const iconList = {
    emptyBattery: `emptyBattery`,
    disconnectedBattery: `disconnectedBattery`,
    fullbattery: 'fullbattery',
    threeFourBattery: 'threeFourBattery',
    halfBattery: 'halfBattery',
    oneFourBattery: 'oneFourBattery',
}

export const getIcon = (status, chargeState) =>{
    if (status === BatteryStatus.disconnected)
        return iconList.disconnectedBattery;

    if (chargeState<10)
        return iconList.emptyBattery;
    else if (chargeState<30)
        return iconList.oneFourBattery;
    else if (chargeState<50)
        return iconList.halfBattery;
    else if (chargeState<70)
        return iconList.threeFourBattery;
    
    
}


export const setDisconnectedDefaultValue = (value, status, defaultValue=`-`) =>{
    if (status === BatteryStatus.disconnected)
        return defaultValue;
    
    return value;
}


