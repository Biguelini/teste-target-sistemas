interface DailySales {
  date: string;
  amount: number;
}

function calculateSalesStatistics(sales: DailySales[]) {

  const nonEmptySales = sales.filter(({ amount }) => amount !== 0);


  const minSale = Math.min(...nonEmptySales.map(({ amount }) => amount));
  const maxSale = Math.max(...nonEmptySales.map(({ amount }) => amount));


  const totalSales = nonEmptySales.reduce((acc, { amount }) => acc + amount, 0);
  const averageSale = totalSales / nonEmptySales.length;

  const aboveAverageDays = nonEmptySales.filter(({ amount }) => amount > averageSale).length;

  return {
    minSale,
    maxSale,
    aboveAverageDays,
  };
}

const dailySales: DailySales[] = [
  { date: "2023-03-01", amount: 1000 },
  { date: "2023-03-02", amount: 1200 },
  { date: "2023-03-03", amount: 800 },
  { date: "2023-03-04", amount: 0 }, 
  { date: "2023-03-05", amount: 0 }, 
  { date: "2023-03-06", amount: 900 },
  { date: "2023-03-07", amount: 1100 },
  { date: "2023-03-08", amount: 1300 },
  { date: "2023-03-09", amount: 1400 },
  { date: "2023-03-10", amount: 1000 },
  { date: "2023-03-11", amount: 800 },
  { date: "2023-03-12", amount: 0 }, 
  { date: "2023-03-13", amount: 1100 },
  { date: "2023-03-14", amount: 1200 },
  { date: "2023-03-15", amount: 900 },
  { date: "2023-03-16", amount: 1300 },
  { date: "2023-03-17", amount: 1500 },
  { date: "2023-03-18", amount: 1200 },
  { date: "2023-03-19", amount: 0 }, 
  { date: "2023-03-20", amount: 1000 },
  { date: "2023-03-21", amount: 1100 },
  { date: "2023-03-22", amount: 900 },
  { date: "2023-03-23", amount: 800 },
  { date: "2023-03-24", amount: 1400 },
  { date: "2023-03-25", amount: 1600 },
  { date: "2023-03-26", amount: 0 }, 
  { date: "2023-03-27", amount: 1200 },
  { date: "2023-03-28", amount: 1200},
  { date: "2023-03-28", amount: 1400 },
  { date: "2023-03-29", amount: 1300 },
  { date: "2023-03-30", amount: 1200 },
  { date: "2023-03-31", amount: 1100 },
];

const salesStats = calculateSalesStatistics(dailySales);

console.log(`Dia com menor faturamento: $${salesStats.minSale}`);
console.log(`Dia com maior faturamento: $${salesStats.maxSale}`);
console.log(`${salesStats.aboveAverageDays} tiveram vendas acima da média mensal.`);
