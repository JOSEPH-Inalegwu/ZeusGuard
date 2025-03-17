export const BitcoinData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Bitcoin",
      data: [200, 260, 450, 500, 490, 470, 520],
      borderColor: ["purple"], 
      backgroundColor: "rgba(255, 99, 132, 0.2)", 
    },
  ],
};

export const BinanceData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Binance",
      data: [300, 500, 450, 700, 590, 570, 600],
      borderColor: ["green"], 
      backgroundColor: "rgba(255, 99, 132, 0.2)", 
    },
  ],
};

export const EthereumData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Binance",
      data: [400, 500, 850, 500, 690, 670, 700],
      borderColor: ["blue"], 
      backgroundColor: "rgba(255, 99, 132, 0.2)", 
    },
  ],
};

export const BitcoinOptions = {
  scales: {
    x: {
      ticks: {
        color: "#CCC", 
      },
    },
    y: {
      ticks: {
        color: "#CCCC", 
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: "white", 
      },
    },
  },
};