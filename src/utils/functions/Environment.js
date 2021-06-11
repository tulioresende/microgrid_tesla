export const calcTreeNumbers = (co2SavedQuantity_kg) => {
  //co2 absorvido por uma arvore ao longo de vinte anos: 163kg
  //fonte: http://www.esalq.usp.br/acom/clipping_semanal/2013/3marco/23_a_29/files/assets/downloads/page0013.pdf

  const co2Absorved_kg = 163;
  const daysPerYear = 365;
  const yearsQuantity = 20;

  const co2AbsorvedInDaily_kg = co2Absorved_kg / (daysPerYear * yearsQuantity);

  return Math.round(co2SavedQuantity_kg / co2AbsorvedInDaily_kg);
};

export const calcCO2Saving = (energyGeneratedPerDay_kWh) => {
  //co2 emitido para gerar 1MWh no Brasil: 120,1 kg
  //fonte: https://www.epe.gov.br/sites-pt/publicacoes-dados-abertos/publicacoes/PublicacoesArquivos/publicacao-377/topico-470/Relatório%20S%C3%ADntese%20BEN%202019%20Ano%20Base%202018.pdf

  const co2EmittedPerMwh = 120.1;

  const co2EmittedPerKwh = co2EmittedPerMwh / 1000;

  return Math.round(energyGeneratedPerDay_kWh * co2EmittedPerKwh);
};

export default calcTreeNumbers;
