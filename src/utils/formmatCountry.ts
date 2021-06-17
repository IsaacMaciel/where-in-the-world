export type Country = {
  name: string;
  capital: string;
  flag: string;
  region: string;
  population: number;
};

interface IFormatter {
  textWithComa: (data: string[]) => string;
  formatterCountry: (data: Country[]) => any;
}

class Formatter implements IFormatter {
  constructor() {}

  textWithComa(data: string[]): string {
    if (!data || data.length === 0) return;
    const stringFormmated = data.reduce(
      (element, stringAcumulator, currentIndex, dataArray) => {
        if (dataArray.length === 1) {
          return `${element}` + stringAcumulator;
        }
        if (currentIndex === 0) {
          return `${element}` + stringAcumulator;
        }
        return `${element} ,` + stringAcumulator;
      },
      ""
    );

    return stringFormmated;
  }

  formatterCountry(data: Country[]) {
    const formattedData = data?.map((country) => {
      return {
        ...country,
        population: country.population.toLocaleString("pt-BR"),
      };
    });

    return formattedData;
  }
}

const formatter = new Formatter();

export { formatter };
