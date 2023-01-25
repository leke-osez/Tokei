//  Converts Price data from nomics API into readable format

const resultConverter = (data, curOption) => {
  let output = "";

  // Formatter for currency
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: curOption,
  });

  data.forEach((coin) => {
    output += `Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${
      formatter.format(coin.price).green
    } | Rank: ${coin.rank.blue} /n`;
  });

  return output;
};

export default resultConverter;
