export const sumArrayObjectsByProperty = (arrayTa) => {
  var result = [];
  arrayTa.reduce(function (res, value) {
    if (!res[value.hour]) {
      res[value.hour] = { hour: value.hour, total: 0 };
      result.push(res[value.hour]);
    }
    res[value.hour].total += value.energy_kwh;
    return res;
  }, {});
  return result;
};
