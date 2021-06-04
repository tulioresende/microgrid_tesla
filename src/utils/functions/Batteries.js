import { BatteryStatus } from "../../globalVariables/Batteries";

export const BatteryStatusTranslate = (valueFromBD) => {
  switch (valueFromBD) {
    case "Charging":
      return BatteryStatus.charging;
    case "stand-by":
      return BatteryStatus.standby;
    case "Discharging":
      return BatteryStatus.discharging;
    case "desconectado":
      return BatteryStatus.disconnected;
    default:
      return BatteryStatus.unknown;
  }
};

export default BatteryStatus;
